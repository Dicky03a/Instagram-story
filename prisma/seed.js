const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')
  
  // Contoh seed data untuk Skill
  const skills = [
    { name: 'Next.js', category: 'Frontend', level: 90 },
    { name: 'PostgreSQL', category: 'Database', level: 85 },
    { name: 'Prisma', category: 'ORM', level: 80 },
  ]

  for (const skill of skills) {
    const s = await prisma.skill.upsert({
      where: { name: skill.name },
      update: {},
      create: skill,
    })
    console.log(`Created skill: ${s.name}`)
  }

  console.log('Seeding finished.')
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
