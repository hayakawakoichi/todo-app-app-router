import { createUserRepository } from '@/repository/UserRepository'
import { createUserService } from '@/service/UserService'
import { UserJSON } from '@clerk/nextjs/server'

const userRepository = createUserRepository()
const userService = createUserService(userRepository)

/**
 * Create a new user
 * Clerk の Webhook でユーザーが作成されたときに呼び出される
 *
 * @param name
 * @param email
 * @param clerkid
 */
export async function createUser({
    id: clerkid,
    email_addresses,
    first_name,
    last_name
}: UserJSON) {
    const name = !!first_name && !!last_name ? `${first_name} ${last_name}` : ''
    const email = email_addresses[0].email_address

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
