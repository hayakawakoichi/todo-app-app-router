import { SignInButton, UserButton, auth } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import { Typography } from '../ui/typography'

export default function Header() {
    const { userId } = auth()

    return (
        <header className="flex justify-between items-center w-full p-3 border-b h-16">
            <div className="flex justify-start">
                <Typography variant="h4">やることリスト</Typography>
            </div>
            <div className="flex gap-2 items-center justify-end">
                <UserButton afterSignOutUrl="/" />
                {!userId && (
                    <SignInButton afterSignInUrl="/todo" mode="modal">
                        <Button>Sign In</Button>
                    </SignInButton>
                )}
            </div>
        </header>
    )
}
