/*
  Warnings:

  - You are about to drop the column `active` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `id_group` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `school` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `stu_profilePhoto` on the `student` table. All the data in the column will be lost.
  - You are about to drop the `exam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `professor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `studentsexam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `studentsgame` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `theme` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `student` DROP COLUMN `active`,
    DROP COLUMN `created_at`,
    DROP COLUMN `id_group`,
    DROP COLUMN `school`,
    DROP COLUMN `stu_profilePhoto`;

-- DropTable
DROP TABLE `exam`;

-- DropTable
DROP TABLE `game`;

-- DropTable
DROP TABLE `group`;

-- DropTable
DROP TABLE `professor`;

-- DropTable
DROP TABLE `studentsexam`;

-- DropTable
DROP TABLE `studentsgame`;

-- DropTable
DROP TABLE `theme`;
