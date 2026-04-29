import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { signIn } from "@/auth"
import { Github } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>
            Sign in with your GitHub account to access the dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form
            action={async () => {
              "use server"
              await signIn("github", { redirectTo: "/admin" })
            }}
          >
            <Button variant="outline" className="w-full" type="submit">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
