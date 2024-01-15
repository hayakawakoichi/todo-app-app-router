import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import React from 'react'

const data = [
    {
        seq: 1,
        todo_latest: {
            todo_history: {
                title: 'TODO1',
                description: 'TODO1の説明'
            }
        }
    },
    {
        seq: 2,
        todo_latest: {
            todo_history: {
                title: 'TODO2',
                description: 'TODO2の説明'
            }
        }
    },
    {
        seq: 3,
        todo_latest: {
            todo_history: {
                title: 'TODO3',
                description: 'TODO3の説明'
            }
        }
    },
    {
        seq: 4,
        todo_latest: {
            todo_history: {
                title: 'TODO4',
                description: 'TODO4の説明'
            }
        }
    },
    {
        seq: 3,
        todo_latest: {
            todo_history: {
                title: 'TODO3',
                description: 'TODO3の説明'
            }
        }
    },
    {
        seq: 4,
        todo_latest: {
            todo_history: {
                title: 'TODO4',
                description: 'TODO4の説明'
            }
        }
    }
]

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-between">
            <div className="flex-1 w-full sm:max-w-xl lg:max-w-4xl">
                <div className="p-4 pb-20 grid gap-4 grid-cols-2 lg:grid-cols-4">
                    {data.map((item, index) => (
                        <Card
                            key={item.seq}
                            className="bg-white rounded-xl shadow-md transform transition-transform duration-200 hover:scale-105"
                        >
                            <CardHeader className="flex flex-col items-start justify-between space-y-0 pb-2">
                                <Typography variant="h1">
                                    {index + 1}
                                </Typography>
                                <CardTitle className="text-sm font-medium">
                                    {item.todo_latest.todo_history.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    <svg
                                        // dataSlot="icon"
                                        fill="none"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                                        />
                                    </svg>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {item.todo_latest.todo_history.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
