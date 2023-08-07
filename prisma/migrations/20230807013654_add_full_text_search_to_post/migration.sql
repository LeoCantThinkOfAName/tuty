-- AlterTable
ALTER TABLE
    "public"."posts"
ADD COLUMN
    "textSearch" TSVECTOR GENERATED ALWAYS AS (to_tsvector('simple', coalesce(subject, '') || ' ' || coalesce(objective, '') || ' ' || coalesce(content, '')) || array_to_tsvector(tags)) STORED;

-- CreateIndex
CREATE INDEX "posts_textSearch_idx" ON "public"."posts" USING GIN ("textSearch");

SELECT id, "textSearch"
FROM posts;
