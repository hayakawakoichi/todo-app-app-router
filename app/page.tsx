import { SignInButton, UserButton } from '@clerk/nextjs'

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="h-screen">
                <UserButton afterSignOutUrl="/" />
                <SignInButton afterSignInUrl="/todo" mode="modal" />
            </div>
        </main>
    )
}
