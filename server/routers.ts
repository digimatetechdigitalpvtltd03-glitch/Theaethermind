import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createPathwayLead } from "./db";
import { pathfinderDestinations, pathfinderPersonas, pathfinderStages, recommendPath } from "./pathfinder";

const pathfinderSubmission = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(320),
  organization: z.string().trim().max(180).optional(),
  persona: z.enum(pathfinderPersonas),
  destination: z.enum(pathfinderDestinations),
  stage: z.enum(pathfinderStages),
  consentToContact: z.literal(true, { error: "Please confirm that AetherMind may contact you" }),
});

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  pathfinder: router({
    submit: publicProcedure.input(pathfinderSubmission).mutation(async ({ input }) => {
      const recommendation = recommendPath(input.destination, input.persona);
      await createPathwayLead({
        firstName: input.firstName,
        email: input.email.toLowerCase(),
        organization: input.organization || null,
        persona: input.persona,
        destination: input.destination,
        stage: input.stage,
        recommendedRoute: recommendation.route,
        consentToContact: true,
      });

      return { success: true as const, recommendation };
    }),
  }),
});

export type AppRouter = typeof appRouter;
