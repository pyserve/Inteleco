-- CreateTable
CREATE TABLE "Scope" (
    "id" SERIAL NOT NULL,
    "industry" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Scope_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scopeId" INTEGER NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Industry" (
    "id" SERIAL NOT NULL,
    "industry" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Industry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_scopeId_fkey" FOREIGN KEY ("scopeId") REFERENCES "Scope"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
