-- CreateEnum
CREATE TYPE "CustomerStatus" AS ENUM ('ACTIVE', 'NON_ACTIVE', 'LEAD');

-- CreateEnum
CREATE TYPE "OpportunityStatus" AS ENUM ('NEW', 'CLOSED_WON', 'CLOSED_LOST');

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "addressLines" TEXT NOT NULL,
    "postcode" TEXT,
    "status" "CustomerStatus" NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opportuniteis" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "status" "OpportunityStatus" NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "opportuniteis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- AddForeignKey
ALTER TABLE "opportuniteis" ADD CONSTRAINT "opportuniteis_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
