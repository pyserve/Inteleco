-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventRegisteredUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventRegisteredUsers_AB_unique" ON "_EventRegisteredUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_EventRegisteredUsers_B_index" ON "_EventRegisteredUsers"("B");

-- AddForeignKey
ALTER TABLE "_EventRegisteredUsers" ADD CONSTRAINT "_EventRegisteredUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventRegisteredUsers" ADD CONSTRAINT "_EventRegisteredUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
