/*
  Warnings:

  - You are about to drop the column `currenciesId` on the `posts` table. All the data in the column will be lost.
  - Made the column `currencyId` on table `posts` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."posts" DROP CONSTRAINT "posts_currenciesId_fkey";

-- AlterTable
ALTER TABLE "public"."posts" DROP COLUMN "currenciesId",
ALTER COLUMN "currencyId" SET NOT NULL,
ALTER COLUMN "currencyId" SET DEFAULT 1;

-- AddForeignKey
ALTER TABLE "public"."posts" ADD CONSTRAINT "posts_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "public"."currencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
