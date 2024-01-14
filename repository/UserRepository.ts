import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUserRepository = () => {
    return {
        findUserById: async (userId: string) => {
            return await prisma.app_user.findUnique({
                where: {
                    id: userId
                }
            })
        }
    }
}

export type UserRepository = ReturnType<typeof createUserRepository>
