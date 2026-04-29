import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"

export default {
  providers: [GitHub],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnAdmin = nextUrl.pathname.startsWith("/admin")
      if (isOnAdmin) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn && nextUrl.pathname.startsWith("/login")) {
        return Response.redirect(new URL("/admin", nextUrl))
      }
      return true
    },
  },
} satisfies NextAuthConfig
