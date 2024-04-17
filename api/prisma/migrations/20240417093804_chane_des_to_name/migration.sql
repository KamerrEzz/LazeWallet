/*
  Warnings:

  - You are about to drop the column `description` on the `Expenses` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Incomes` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `walletId` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end` to the `Goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Incomes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `walletId` to the `Incomes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categories" ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Expenses" DROP COLUMN "description",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "walletId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Goals" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Incomes" DROP COLUMN "description",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "walletId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Incomes" ADD CONSTRAINT "Incomes_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
