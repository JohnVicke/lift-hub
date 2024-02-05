import { withAuth } from "next-auth/middleware";

const publicRoutes = ["/", "/signin", "/signup"];

export default withAuth(function middleware(_req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
      if (!isPublicRoute && token === null) {
        return false;
      }
      return true;
    },
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
