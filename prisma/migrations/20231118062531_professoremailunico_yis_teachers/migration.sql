/*
  Warnings:

  - You are about to drop the column `isTeacher` on the `student` table. All the data in the column will be lost.
  - Added the required column `isprofessor` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `student` DROP COLUMN `isTeacher`,
    ADD COLUMN `isprofessor` BOOLEAN NOT NULL;
