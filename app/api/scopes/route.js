import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (request) => {
    const data = await prisma.scope.findMany({
        include:{
            applications: true
        }
    });
    return Response.json(data);
}

export const POST = async (request) => {
    return Response.json({ message: await request.json()});
}