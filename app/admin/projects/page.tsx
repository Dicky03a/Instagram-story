import prisma from "@/lib/prisma"
import { ProjectForm } from "./components/ProjectForm"
import { Button } from "@/components/ui/button"
import { deleteProject } from "@/app/actions/projects"
import Image from "next/image"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"

export default async function ProjectsAdminPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" }
  })

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manage Projects</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <ProjectForm />
        </div>
        
        <div className="lg:col-span-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Tech Stack</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    {project.image ? (
                      <div className="relative w-16 h-10">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover rounded" 
                        />
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">No image</span>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-[10px] bg-slate-100 px-1 rounded">{tech}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <form action={async () => {
                      "use server"
                      await deleteProject(project.id)
                    }}>
                      <Button variant="destructive" size="sm" type="submit">
                        Delete
                      </Button>
                    </form>
                  </TableCell>
                </TableRow>
              ))}
              {projects.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-4 text-muted-foreground">
                    No projects found. Add one to get started.
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
