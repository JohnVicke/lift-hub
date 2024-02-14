import { schema } from "~/server/db";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { completeSignUpInput } from "~/validators/auth/complete-signup";
import { eq } from "drizzle-orm";

export const authRouter = createTRPCRouter({
  completeSignUp: protectedProcedure
    .input(completeSignUpInput)
    .mutation(async ({ input, ctx }) => {
      const updatedUserId = await ctx.db
        .update(schema.users)
        .set({ role: input.role, username: input.username })
        .where(eq(schema.users.id, ctx.session.user.id))
        .returning({ updatedId: schema.users.id });
      return { updatedUserId };
    }),
});
