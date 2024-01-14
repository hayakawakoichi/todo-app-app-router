import { getUserById } from '@/action/user.action'
import { SignInButton, UserButton } from '@clerk/nextjs'

export default async function Home() {
    const user = await getUserById('0eb88855-5bf6-4a7f-b111-b46f5c3bd9c6') // John Doe
    console.log({ user })

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="h-screen">
                {user?.name}
                <UserButton afterSignOutUrl="/" />
                <SignInButton afterSignInUrl="/todo" mode="modal" />
            </div>
        </main>
    )
}
