-- CreateEnum
CREATE TYPE "CompanyStatus" AS ENUM ('active', 'notActive', 'pending', 'suspended');

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "CompanyStatus" NOT NULL,
    "joinedDate" TIMESTAMP(3),
    "hasPromotions" BOOLEAN NOT NULL DEFAULT false,
    "categoryId" TEXT,
    "categoryTitle" TEXT,
    "countryId" TEXT,
    "countryTitle" TEXT,
    "avatar" TEXT,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);
