-- AlterTable
ALTER TABLE "public"."posts"
    ADD COLUMN  "currencyId" INTEGER;

-- CreateTable
CREATE TABLE "public"."currencies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "currencies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "currencies_name_key" ON "public"."currencies"("name");

ALTER TABLE "public"."posts" ADD CONSTRAINT "posts_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "public"."currencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
