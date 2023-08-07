/*
  Warnings:

  - The values [hour,day,week,month,year] on the enum `rate_type` will be removed. If these variants are still used in the database, this will fail.
  - Changed the type of `name` on the `currencies` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."currency" AS ENUM ('USD', 'TWD');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."rate_type_new" AS ENUM ('HOUR', 'DAY', 'WEEK', 'MONTH', 'YEAR');
ALTER TABLE "public"."posts" ALTER COLUMN "rateType" TYPE "public"."rate_type_new" USING ("rateType"::text::"public"."rate_type_new");
ALTER TYPE "public"."rate_type" RENAME TO "rate_type_old";
ALTER TYPE "public"."rate_type_new" RENAME TO "rate_type";
DROP TYPE "public"."rate_type_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."posts" DROP CONSTRAINT "posts_currencyId_fkey";

-- DropIndex
DROP INDEX "public"."currencies_name_key";

-- AlterTable
ALTER TABLE "public"."currencies" DROP COLUMN "name",
ADD COLUMN     "name" "public"."currency" NOT NULL;
