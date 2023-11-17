/*
  Warnings:

  - You are about to drop the column `username` on the `student` table. All the data in the column will be lost.
  - Added the required column `firstname` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `student` DROP COLUMN `username`,
    ADD COLUMN `firstname` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastname` VARCHAR(191) NOT NULL;
