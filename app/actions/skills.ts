"use server"

import prisma from "@/lib/prisma"
import { saveFile } from "@/lib/upload"
import { revalidatePath } from "next/cache"

export async function addSkill(formData: FormData) {
  const name = formData.get("name") as string
  const category = formData.get("category") as string
  const level = parseInt(formData.get("level") as string) || 0
  const iconFile = formData.get("icon") as File

  let iconPath = ""
  if (iconFile && iconFile.size > 0) {
    iconPath = await saveFile(iconFile, "skills")
  }

  await prisma.skill.create({
    data: {
      name,
      category,
      level,
      icon: iconPath,
    },
  })

  revalidatePath("/")
  revalidatePath("/admin/skills")
}

export async function updateSkill(id: string, formData: FormData) {
  const name = formData.get("name") as string
  const category = formData.get("category") as string
  const level = parseInt(formData.get("level") as string) || 0
  const iconFile = formData.get("icon") as File

  const currentSkill = await prisma.skill.findUnique({ where: { id } })
  let iconPath = currentSkill?.icon || ""

  if (iconFile && iconFile.size > 0) {
    iconPath = await saveFile(iconFile, "skills")
  }

  await prisma.skill.update({
    where: { id },
    data: {
      name,
      category,
      level,
      icon: iconPath,
    },
  })

  revalidatePath("/")
  revalidatePath("/admin/skills")
}

export async function deleteSkill(id: string) {
  await prisma.skill.delete({
    where: { id },
  })

  revalidatePath("/")
  revalidatePath("/admin/skills")
}
