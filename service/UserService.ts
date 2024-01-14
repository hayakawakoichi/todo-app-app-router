import { UserRepository } from '@/repository/UserRepository'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUserService = (userRepository: UserRepository) => {
    return {
        /**
         * Get user by id
         *
         * @param userId
         **/
        getUserById: (userId: string) => {
            return userRepository.findUserById(prisma, { userId })
        },

        /**
         * Create a new user
         * Clerk の Webhook でユーザーが作成されたときに呼び出される
         *
         * @param userId
         * @param name
         * @param email
         * @param clerkid
         */
        createUser: async ({
            name,
            email,
            clerkid
        }: {
            name: string
            email: string
            clerkid: string
        }) => {
            return await prisma.$transaction((prisma) => {
                return userRepository.createUser(prisma, {
                    name,
                    email,
                    clerkid
                })
            })
        }
    }
}
