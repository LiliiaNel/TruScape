-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "income" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "sold" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "promotions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "companyId" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "promotions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "promotions" ADD CONSTRAINT "promotions_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
