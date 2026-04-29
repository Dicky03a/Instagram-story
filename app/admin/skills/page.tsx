import prisma from "@/lib/prisma"
import { SkillForm } from "./components/SkillForm"
import { Button } from "@/components/ui/button"
import { deleteSkill } from "@/app/actions/skills"
import Image from "next/image"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"

export default async function SkillsAdminPage() {
  const skills = await prisma.skill.findMany({
    orderBy: { createdAt: "desc" }
  })

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manage Skills</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <SkillForm />
        </div>
        
        <div className="lg:col-span-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Icon</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Level</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {skills.map((skill) => (
                <TableRow key={skill.id}>
                  <TableCell>
                    {skill.icon ? (
                      <div className="relative w-8 h-8">
                        <Image 
                          src={skill.icon} 
                          alt={skill.name} 
                          fill 
                          className="object-contain" 
                        />
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">No icon</span>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{skill.name}</TableCell>
                  <TableCell>{skill.category}</TableCell>
                  <TableCell>{skill.level}%</TableCell>
                  <TableCell className="text-right">
                    <form action={async () => {
                      "use server"
                      await deleteSkill(skill.id)
                    }}>
                      <Button variant="destructive" size="sm" type="submit">
                        Delete
                      </Button>
                    </form>
                  </TableCell>
                </TableRow>
              ))}
              {skills.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                    No skills found. Add one to get started.
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
