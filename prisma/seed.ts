import {faker} from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function  main() {
  const users = []

  for (let item = 0; item < 1000; item++){
    users.push({
      name: faker.person.firstName(),
      email: faker.internet.email()
    });
  }

  await prisma.user.createMany({
      data: users,
    })

}


main()
.catch((e) => {
  console.error(e)
  process.exit(1)
})
.finally(async () => {
  await prisma.$disconnect()
})
