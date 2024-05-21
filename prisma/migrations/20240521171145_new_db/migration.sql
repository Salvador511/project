/*
  Warnings:

  - You are about to drop the `exam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `professors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `registers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `studentsexam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `studentsgame` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `theme` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `exam`;

-- DropTable
DROP TABLE `game`;

-- DropTable
DROP TABLE `professors`;

-- DropTable
DROP TABLE `registers`;

-- DropTable
DROP TABLE `students`;

-- DropTable
DROP TABLE `studentsexam`;

-- DropTable
DROP TABLE `studentsgame`;

-- DropTable
DROP TABLE `theme`;

-- CreateTable
CREATE TABLE `users` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `school` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `id_group` VARCHAR(191) NULL,
    `AdditionQuiz` INTEGER NULL,
    `SubstractionQuiz` INTEGER NULL,
    `isprofessor` BOOLEAN NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `active` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
