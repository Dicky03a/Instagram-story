import prisma from "@/lib/prisma"
import { ViewForm } from "./components/ViewForm"
import { Button } from "@/components/ui/button"
import { deleteView } from "@/app/actions/views"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"

export default async function ViewsAdminPage() {
  const views = await prisma.view.findMany({
    orderBy: { createdAt: "desc" }
  })

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manage My Views</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <ViewForm />
        </div>
        
        <div className="lg:col-span-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Topic</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {views.map((view) => (
                <TableRow key={view.id}>
                  <TableCell className="font-medium">{view.topic}</TableCell>
                  <TableCell>{view.date}</TableCell>
                  <TableCell className="text-right">
                    <form action={async () => {
                      "use server"
                      await deleteView(view.id)
                    }}>
                      <Button variant="destructive" size="sm" type="submit">
                        Delete
                      </Button>
                    </form>
                  </TableCell>
                </TableRow>
              ))}
              {views.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-4 text-muted-foreground">
                    No views found. Add one to get started.
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
