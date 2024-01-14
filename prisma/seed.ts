import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const JohnDoe = await prisma.app_user.upsert({
        where: { id: '0eb88855-5bf6-4a7f-b111-b46f5c3bd9c6' },
        update: {},
        create: {
            id: '0eb88855-5bf6-4a7f-b111-b46f5c3bd9c6',
            name: 'John Doe'
        }
    })
    const JaneSmith = await prisma.app_user.upsert({
        where: { id: '71c2ada9-1868-46f2-af7b-14e35c88aab1' },
        update: {},
        create: {
            id: '71c2ada9-1868-46f2-af7b-14e35c88aab1',
            name: 'Jane Smith'
        }
    })

    console.log({ JohnDoe, JaneSmith })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
