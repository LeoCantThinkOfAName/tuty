CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS profiles (
  user_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  modified_at TIMESTAMPTZ,
  user_name TEXT NOT NULL,
  description TEXT,
  title TEXT,
  image TEXT,
  PRIMARY KEY (user_id),
  FOREIGN KEY (user_id)
    REFERENCES auth.users(id)
);

CREATE TABLE IF NOT EXISTS posts (
    id UUID DEFAULT UUID_GENERATE_V4() UNIQUE,
    user_id UUID NOT NULL,
    category_id INT4 NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    modified_at TIMESTAMPTZ,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    location TEXT,
    familiar_subject TEXT,
    target_subject TEXT,
    tags TEXT[],
    fee TEXT,
    PRIMARY KEY (id, user_id, category_id),
    FOREIGN KEY (user_id)
        REFERENCES auth.users(id),
    FOREIGN KEY (category_id)
        REFERENCES public.categories(id)
);

CREATE TABLE IF NOT EXISTS bookmarks (
    id serial NOT NULL,
    user_id UUID NOT NULL,
    post_id UUID NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    deleted_at TIMESTAMPTZ,
    deleted BOOL DEFAULT FALSE,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
        REFERENCES auth.users(id),
    FOREIGN KEY (post_id)
        REFERENCES public.posts(id)
);

CREATE TABLE IF NOT EXISTS likes (
    id serial NOT NULL,
    user_id UUID NOT NULL,
    post_id UUID NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    deleted_at TIMESTAMPTZ,
    liked BOOL DEFAULT TRUE,
    deleted BOOL DEFAULT FALSE,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
        REFERENCES auth.users(id),
    FOREIGN KEY (post_id)
        REFERENCES public.posts(id)
);

CREATE TABLE IF NOT EXISTS comments (
    id serial NOT NULL,
    user_id UUID NOT NULL,
    post_id UUID NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    deleted_at TIMESTAMPTZ,
    body TEXT NOT NULL,
    deleted BOOL DEFAULT FALSE,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
        REFERENCES auth.users(id),
    FOREIGN KEY (post_id)
        REFERENCES public.posts(id)
);

CREATE FUNCTION public.handle_new_user()
    returns TRIGGER
    language plpgsql
    security definer SET search_path = public
    as $$
        BEGIN
            INSERT INTO public.profiles (user_id, user_name)
            VALUES (new.id, new.email);
            RETURN new;
        END;
    $$;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE procedure public.handle_new_user();

CREATE VIEW post_detail as
  SELECT
    p.id,
    p.title,
    p.created_at,
    p.description,
    p.target_subject,
    p.familiar_subject,
    p.location,
    p.tags,
    u.user_name,
    u.title as user_title,
    u.image as user_image,
    u.user_id as user_id,
    c.name as category_name,
    SUM(CASE WHEN l.liked IS true THEN 1 ELSE 0 END) as likes
  FROM public.posts p
  LEFT JOIN public.profiles u ON p.user_id = u.user_id
  LEFT JOIN public.categories c ON p.category_id = c.id
  LEFT JOIN public.likes l ON l.post_id = p.id
  GROUP BY p.id, p.title, p.created_at, p.description, p.target_subject, p.familiar_subject, p.location, p.tags, u.user_name, u.title, u.image, u.user_id, c.name;

CREATE VIEW user_detail as
  SELECT
    u.id,
    u.email,
    u.last_sign_in_at,
    u.created_at,
    u.updated_at,
    p.user_name,
    p.description,
    p.title,
    p.image
FROM public.profiles p
LEFT JOIN auth.users u ON p.user_id = u.id;