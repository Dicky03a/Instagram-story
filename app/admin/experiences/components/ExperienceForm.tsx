"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { addExperience, updateExperience } from "@/app/actions/experiences"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface ExperienceFormProps {
  experience?: any
  onSuccess?: () => void
}

export function ExperienceForm({ experience, onSuccess }: ExperienceFormProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    try {
      if (experience) {
        await updateExperience(experience.id, formData)
      } else {
        await addExperience(formData)
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
        <CardTitle>{experience ? "Edit Experience" : "Add New Experience"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" defaultValue={experience?.company} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" name="role" defaultValue={experience?.role} required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" name="startDate" type="date" defaultValue={experience?.startDate ? new Date(experience.startDate).toISOString().split('T')[0] : ""} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date (optional)</Label>
              <Input id="endDate" name="endDate" type="date" defaultValue={experience?.endDate ? new Date(experience.endDate).toISOString().split('T')[0] : ""} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" defaultValue={experience?.description} />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Saving..." : experience ? "Update Experience" : "Add Experience"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
