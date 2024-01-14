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
