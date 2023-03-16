-- CreateTable
CREATE TABLE "User" (
    "user_name" TEXT NOT NULL,
    "pwd" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "notelp" TEXT NOT NULL,
    "last_login" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_name")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "postal_code" INTEGER,
    "state" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_name") ON DELETE RESTRICT ON UPDATE CASCADE;
