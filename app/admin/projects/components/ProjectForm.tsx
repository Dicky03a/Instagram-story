"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { addProject, updateProject } from "@/app/actions/projects"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface ProjectFormProps {
  project?: any
  onSuccess?: () => void
}

export function ProjectForm({ project, onSuccess }: ProjectFormProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    try {
      if (project) {
        await updateProject(project.id, formData)
      } else {
        await addProject(formData)
      }
      if (onSuccess) onSuccess()
      router.refresh()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project ? "Edit Project" : "Add New Project"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" defaultValue={project?.title} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" defaultValue={project?.description} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="link">Link</Label>
            <Input id="link" name="link" type="url" defaultValue={project?.link} placeholder="https://..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="techStack">Tech Stack (comma separated)</Label>
            <Input id="techStack" name="techStack" defaultValue={project?.techStack?.join(", ")} placeholder="React, Next.js, Tailwind" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Project Image</Label>
            <Input id="image" name="image" type="file" accept="image/*" />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Saving..." : project ? "Update Project" : "Add Project"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
