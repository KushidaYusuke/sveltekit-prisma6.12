import { PrismaClient } from '../../generated/prisma/client';
// import { withAccelerate } from '@prisma/extension-accelerate';

// const prisma = new PrismaClient().$extends(withAccelerate());
const prisma = new PrismaClient();

export default prisma;
