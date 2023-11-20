/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Professor` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `professor` MODIFY `profilePhoto` VARCHAR(191) NULL,
    MODIFY `school` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Professor_email_key` ON `Professor`(`email`);
