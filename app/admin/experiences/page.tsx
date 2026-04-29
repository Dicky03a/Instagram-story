import prisma from "@/lib/prisma"
import { ExperienceForm } from "./components/ExperienceForm"
import { Button } from "@/components/ui/button"
import { deleteExperience } from "@/app/actions/experiences"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"

export default async function ExperiencesAdminPage() {
  const experiences = await prisma.experience.findMany({
    orderBy: { startDate: "desc" }
  })

  const formatDate = (date: Date | null) => {
    if (!date) return "Present"
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric"
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manage Experiences</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <ExperienceForm />
        </div>
        
        <div className="lg:col-span-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Period</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {experiences.map((exp) => (
                <TableRow key={exp.id}>
                  <TableCell className="font-medium">{exp.company}</TableCell>
                  <TableCell>{exp.role}</TableCell>
                  <TableCell>
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </TableCell>
                  <TableCell className="text-right">
                    <form action={async () => {
                      "use server"
                      await deleteExperience(exp.id)
                    }}>
                      <Button variant="destructive" size="sm" type="submit">
                        Delete
                      </Button>
                    </form>
                  </TableCell>
                </TableRow>
              ))}
              {experiences.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-4 text-muted-foreground">
                    No experiences found. Add one to get started.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
