import { z } from "zod";

export const completeSignUpInput = z.object({
  username: z.string(),
  role: z.enum(["athlete", "coach"]),
});
