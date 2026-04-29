"use server"

import prisma from "@/lib/prisma"
import { saveFile } from "@/lib/upload"
import { revalidatePath } from "next/cache"

export async function addProject(formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const link = formData.get("link") as string
  const techStackString = formData.get("techStack") as string
  const imageFile = formData.get("image") as File

  const techStack = techStackString.split(",").map(s => s.trim()).filter(Boolean)

  let imagePath = ""
  if (imageFile && imageFile.size > 0) {
    imagePath = await saveFile(imageFile, "projects")
  }

  await prisma.project.create({
    data: {
      title,
      description,
      link,
      techStack,
      image: imagePath,
    },
  })

  revalidatePath("/")
  revalidatePath("/admin/projects")
}

export async function updateProject(id: string, formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const link = formData.get("link") as string
  const techStackString = formData.get("techStack") as string
  const imageFile = formData.get("image") as File

  const techStack = techStackString.split(",").map(s => s.trim()).filter(Boolean)

  const currentProject = await prisma.project.findUnique({ where: { id } })
  let imagePath = currentProject?.image || ""

  if (imageFile && imageFile.size > 0) {
    imagePath = await saveFile(imageFile, "projects")
  }

  await prisma.project.update({
    where: { id },
    data: {
      title,
      description,
      link,
      techStack,
      image: imagePath,
    },
  })

  revalidatePath("/")
  revalidatePath("/admin/projects")
}

export async function deleteProject(id: string) {
  await prisma.project.delete({
    where: { id },
  })

  revalidatePath("/")
  revalidatePath("/admin/projects")
}
