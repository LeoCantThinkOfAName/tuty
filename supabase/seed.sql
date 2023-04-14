INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    raw_app_meta_data,
    raw_user_meta_data,
    email_confirmed_at,
    created_at
)
VALUES
(
    '00000000-0000-0000-0000-000000000000',
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e2',
    'authenticated',
    'authenticated',
    'test1@email.com',
    '$2a$10$xYOC9HH2YshTQ2MvUShpmupFE/.dB/M2wFuFiUpIBUPKgv0d8cVcy',
    '{"provider":"email","providers":["email"]}', '{}',
    timezone('utc'::text, now()),
    timezone('utc'::text, now())
),
(
    '00000000-0000-0000-0000-000000000000',
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e3',
    'authenticated',
    'authenticated',
    'test2@email.com',
    '$2a$10$xYOC9HH2YshTQ2MvUShpmupFE/.dB/M2wFuFiUpIBUPKgv0d8cVcy',
    '{"provider":"email","providers":["email"]}', '{}',
    timezone('utc'::text, now()),
    timezone('utc'::text, now())
),
(
    '00000000-0000-0000-0000-000000000000',
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e4',
    'authenticated',
    'authenticated',
    'test3@email.com',
    '$2a$10$xYOC9HH2YshTQ2MvUShpmupFE/.dB/M2wFuFiUpIBUPKgv0d8cVcy',
    '{"provider":"email","providers":["email"]}', '{}',
    timezone('utc'::text, now()),
    timezone('utc'::text, now())
);

INSERT INTO public.categories (id, name, created_at)
VALUES
(1, 'category.exchange', timezone('utc'::text, now())),
(2, 'category.findStudent', timezone('utc'::text, now())),
(3, 'category.findTeacher', timezone('utc'::text, now())),
(4, 'category.studyGroup', timezone('utc'::text, now()));

INSERT INTO public.posts (
    user_id,
    category_id,
    id,
    title,
    description,
    location,
    familiar_subject,
    target_subject,
    tags,
    fee,
    created_at
)
VALUES
(
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e2',
    1,
    '437bd61b-4f72-4349-8039-6d975cbe9070',
    'first post',
    'This is the first post!',
    'At my place',
    'English',
    'Frontend',
    '{test,fake}',
    '100',
    timezone('utc'::text, now())
),
(
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e3',
    2,
    '3e7d3686-2aeb-43e8-9f5b-3a22e44255f5',
    'second post',
    'This is the second post!',
    'At my place',
    'Cooking',
    'Yoga',
    null,
    '0 ~ 100',
    timezone('utc'::text, now())
),
(
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e2',
    3,
    'e219e2b7-8914-409b-9977-6746b9ea7d70',
    'third post',
    'This is the third post!',
    'At my place',
    'Cooking',
    'English',
    null,
    null,
    timezone('utc'::text, now())
),
(
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e4',
    4,
    '5fd2a8d5-ced6-4d3a-be30-551a497fbca8',
    'last post',
    'This is the last post!',
    'At my place',
    'Yoga',
    'Frontend',
    '{hehe,haha}',
    '10000',
    timezone('utc'::text, now())
);

INSERT INTO public.likes (id, post_id, user_id, created_at, liked)
VALUES
(
    1,
    '437bd61b-4f72-4349-8039-6d975cbe9070',
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e2',
    timezone('utc'::text, now()),
    TRUE
),
(
    2,
    '437bd61b-4f72-4349-8039-6d975cbe9070',
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e3',
    timezone('utc'::text, now()),
    TRUE
),
(
    3,
    '437bd61b-4f72-4349-8039-6d975cbe9070',
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e2',
    timezone('utc'::text, now()),
    TRUE
),
(
    4,
    'e219e2b7-8914-409b-9977-6746b9ea7d70',
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e2',
    timezone('utc'::text, now()),
    TRUE
);

INSERT INTO public.bookmarks (id, user_id, post_id, created_at)
VALUES
(
    1,
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e2',
    '437bd61b-4f72-4349-8039-6d975cbe9070',
    timezone('utc'::text, now())
),
(
    2,
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e2',
    '3e7d3686-2aeb-43e8-9f5b-3a22e44255f5',
    timezone('utc'::text, now())
),
(
    3,
    '185f2f83-d63a-4c9b-b4a0-7e4a885799e2',
    '5fd2a8d5-ced6-4d3a-be30-551a497fbca8',
    timezone('utc'::text, now())
);