-- CreateTable
CREATE TABLE "Demo" (
    "id" SERIAL NOT NULL,
    "tags" TEXT[],
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "solutions" TEXT[],
    "industry" TEXT[],

    CONSTRAINT "Demo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DemoAuthors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DemoAuthors_AB_unique" ON "_DemoAuthors"("A", "B");

-- CreateIndex
CREATE INDEX "_DemoAuthors_B_index" ON "_DemoAuthors"("B");

-- AddForeignKey
ALTER TABLE "_DemoAuthors" ADD CONSTRAINT "_DemoAuthors_A_fkey" FOREIGN KEY ("A") REFERENCES "Demo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DemoAuthors" ADD CONSTRAINT "_DemoAuthors_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
