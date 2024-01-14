import { createUserRepository } from '@/repository/UserRepository'
import { createUserService } from '@/service/UserService'

const userRepository = createUserRepository()
const userService = createUserService(userRepository)

export async function getUserById(userId: string) {
    try {
        const user = await userService.getUserById(userId)
        return user
    } catch (error) {
        console.error({ error })
    }
}

/**
 * Create a new user
 * Clerk の Webhook でユーザーが作成されたときに呼び出される
 *
 * @param name
 * @param email
 * @param clerkid
 */
export async function createUser({
    name,
    email,
    clerkid
}: {
    name: string
    email: string
    clerkid: string
}) {
    try {
        const user = await userService.createUser({
            name,
            email,
            clerkid
        })
        return user
    } catch (error) {
        console.error({ error })
    }
}
