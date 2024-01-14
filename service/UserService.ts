import { UserRepository } from '@/repository/UserRepository'

export const createUserService = (userRepository: UserRepository) => {
    return {
        getUserById: (userId: string) => {
            return userRepository.findUserById(userId)
        }
    }
}
