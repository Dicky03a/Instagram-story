"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { addView, updateView } from "@/app/actions/views"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface ViewFormProps {
  view?: any
  onSuccess?: () => void
}

export function ViewForm({ view, onSuccess }: ViewFormProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    try {
      if (view) {
        await updateView(view.id, formData)
      } else {
        await addView(formData)
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
        <CardTitle>{view ? "Edit View" : "Add New View"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="topic">Topic</Label>
            <Input id="topic" name="topic" defaultValue={view?.topic} required placeholder="e.g. AI dalam Industri Kreatif" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" name="date" defaultValue={view?.date} required placeholder="e.g. Maret 2024" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="opinion">Opinion</Label>
            <Textarea id="opinion" name="opinion" defaultValue={view?.opinion} required className="min-h-[100px]" />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Saving..." : view ? "Update View" : "Add View"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
