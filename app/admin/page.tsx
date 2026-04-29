import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "@/lib/prisma"
import { Briefcase, Code2, Wrench, MessageSquare } from "lucide-react"

export default async function AdminDashboard() {
  const experiencesCount = await prisma.experience.count()
  const projectsCount = await prisma.project.count()
  const skillsCount = await prisma.skill.count()
  const viewsCount = await prisma.view.count()

  const stats = [
    {
      title: "Total Experiences",
      value: experiencesCount,
      icon: Briefcase,
      description: "Work history entries",
    },
    {
      title: "Total Projects",
      value: projectsCount,
      icon: Code2,
      description: "Portfolio showcases",
    },
    {
      title: "Total Skills",
      value: skillsCount,
      icon: Wrench,
      description: "Technical competencies",
    },
    {
      title: "Total Views",
      value: viewsCount,
      icon: MessageSquare,
      description: "Personal opinions",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">
          Welcome to your portfolio management dashboard.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
