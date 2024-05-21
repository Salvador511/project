-- CreateTable
CREATE TABLE "users" (
    "id_user" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "school" TEXT,
    "email" TEXT NOT NULL,
    "id_group" TEXT,
    "AdditionQuiz" INTEGER,
    "SubstractionQuiz" INTEGER,
    "isprofessor" BOOLEAN,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Group" (
    "id_group" SERIAL NOT NULL,
    "group_name" TEXT,
    "groupPhoto" TEXT,
    "id_professor" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id_group")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
