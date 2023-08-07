/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `currencies` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `name` on the `currencies` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."currency_type" AS ENUM ('USD', 'TWD');

-- AlterTable
ALTER TABLE "public"."currencies" DROP COLUMN "name",
ADD COLUMN     "name" "public"."currency_type" NOT NULL;

-- AlterTable
ALTER TABLE "public"."posts" ADD COLUMN     "currenciesId" INTEGER;

-- DropEnum
DROP TYPE "public"."currency";

-- CreateIndex
CREATE UNIQUE INDEX "currencies_name_key" ON "public"."currencies"("name");

-- AddForeignKey
ALTER TABLE "public"."posts" ADD CONSTRAINT "posts_currenciesId_fkey" FOREIGN KEY ("currenciesId") REFERENCES "public"."currencies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
