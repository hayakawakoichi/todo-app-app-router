import { auth } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import { PlusCircle, SearchIcon, Settings } from 'lucide-react'

export default function Footer() {
    const { userId } = auth()
    return (
        <footer className="fixed bottom-0 w-full h-14 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            {userId && (
                <div className="container mx-auto px-4 md:px-6 h-full">
                    <div className="h-full flex items-center justify-between">
                        <Button
                            className="flex flex-col items-center justify-center w-full h-full text-gray-500 dark:text-gray-400"
                            variant="ghost"
                        >
                            <SearchIcon className="h-6 w-6" />
                            <span className="sr-only">Home</span>
                        </Button>
                        <Button
                            className="flex flex-col items-center justify-center w-full h-full text-gray-500 dark:text-gray-400"
                            variant="ghost"
                        >
                            <PlusCircle className="h-6 w-6" />
                            <span className="sr-only">Search</span>
                        </Button>
                        <Button
                            className="flex flex-col items-center justify-center w-full h-full text-gray-500 dark:text-gray-400"
                            variant="ghost"
                        >
                            <Settings className="h-6 w-6" />
                            <span className="sr-only">Profile</span>
                        </Button>
                    </div>
                </div>
            )}

            {!userId && (
                <div className="flex flex-col p-5 text-center">
                    <p>2023 ⒸKoichi Hayakawa</p>
                </div>
            )}
        </footer>
    )
}
