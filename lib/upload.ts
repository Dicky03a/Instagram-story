import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

/**
 * Saves a file to the public/uploads directory.
 * @param file The file object from FormData
 * @param folder The subfolder name (e.g., 'skills' or 'projects')
 * @returns The public path to the file (e.g., '/uploads/skills/filename.png')
 */
export async function saveFile(file: File, folder: string): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Create unique filename
  const extension = file.name.split('.').pop();
  const fileName = `${uuidv4()}.${extension}`;
  
  const uploadDir = join(process.cwd(), 'public', 'uploads', folder);
  const filePath = join(uploadDir, fileName);

  // Ensure directory exists
  await mkdir(uploadDir, { recursive: true });

  // Write file
  await writeFile(filePath, buffer);

  return `/uploads/${folder}/${fileName}`;
}
