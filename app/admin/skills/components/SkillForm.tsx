"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { addSkill, updateSkill } from "@/app/actions/skills"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface SkillFormProps {
  skill?: any
  onSuccess?: () => void
}

export function SkillForm({ skill, onSuccess }: SkillFormProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    try {
      if (skill) {
        await updateSkill(skill.id, formData)
      } else {
        await addSkill(formData)
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
        <CardTitle>{skill ? "Edit Skill" : "Add New Skill"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" defaultValue={skill?.name} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" defaultValue={skill?.category} placeholder="e.g. Frontend, Backend" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="level">Level (0-100)</Label>
            <Input id="level" name="level" type="number" defaultValue={skill?.level} min="0" max="100" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="icon">Icon (Image File)</Label>
            <Input id="icon" name="icon" type="file" accept="image/*" />
            {skill?.icon && (
              <p className="text-xs text-muted-foreground mt-1">
                Current icon: {skill.icon}
              </p>
            )}
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Saving..." : skill ? "Update Skill" : "Add Skill"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
