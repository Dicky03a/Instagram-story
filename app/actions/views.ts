"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function addView(formData: FormData) {
  const topic = formData.get("topic") as string
  const date = formData.get("date") as string
  const opinion = formData.get("opinion") as string

  await prisma.view.create({
    data: {
      topic,
      date,
      opinion,
    },
  })

  revalidatePath("/")
  revalidatePath("/admin/views")
}

export async function updateView(id: string, formData: FormData) {
  const topic = formData.get("topic") as string
  const date = formData.get("date") as string
  const opinion = formData.get("opinion") as string

  await prisma.view.update({
    where: { id },
    data: {
      topic,
      date,
      opinion,
    },
  })

  revalidatePath("/")
  revalidatePath("/admin/views")
}

export async function deleteView(id: string) {
  await prisma.view.delete({
    where: { id },
  })

  revalidatePath("/")
  revalidatePath("/admin/views")
}
