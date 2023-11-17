-- AlterTable
ALTER TABLE `student` MODIFY `stu_profilePhoto` VARCHAR(191) NULL,
    MODIFY `school` VARCHAR(191) NULL,
    MODIFY `id_group` INTEGER NULL,
    MODIFY `active` BOOLEAN NOT NULL DEFAULT true;
