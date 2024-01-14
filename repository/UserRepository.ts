import { randomUUID as uuidV4 } from 'crypto'
import { Prisma, PrismaClient } from '@prisma/client'

export const createUserRepository = () => {
    return {
        findUserById: async (
            prisma: PrismaClient,
            { userId }: { userId: string }
        ) => {
            return await prisma.app_user.findUnique({
                where: {
                    id: userId
                }
            })
        },

        createUser: async (
            prisma: Prisma.TransactionClient,
            {
                name,
                email,
                clerkid
            }: {
                name: string
                email: string
                clerkid: string
            }
        ) => {
            return await prisma.app_user.create({
                data: {
                    id: uuidV4(),
                    name: name,
                    email: email,
                    clerkid: clerkid
                }
            })
        }
    }
}

export type UserRepository = ReturnType<typeof createUserRepository>
