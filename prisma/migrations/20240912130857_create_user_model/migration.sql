-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'use',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
