/*
  Warnings:

  - Added the required column `id_group` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `professor` ADD COLUMN `id_group` INTEGER NOT NULL;
