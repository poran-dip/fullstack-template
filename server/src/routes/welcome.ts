import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to your full-stack ERN setup",
    data: {
      author: "Poran Dip",
      template: "Express + React + Node.js Template",
      stack: {
        frontend: {
          technologies: [
            "React 19",
            "TypeScript",
            "Vite",
            "TailwindCSS v4",
            "React Router v7"
          ],
          setup: {
            pages: "Add pages in `src/pages`",
            components: "Add components in `src/components`",
            pageComponents: "Add page-specific components in `src/components/[page-name]`",
            routing: "Import pages in `src/App.tsx`"
          }
        },
        backend: {
          technologies: [
            "Node.js",
            "Express 5",
            "TypeScript",
            "CORS",
            "Dotenv"
          ],
          setup: {
            environment: "Copy `.env.example` into `.env` (do NOT commit `.env`)",
            routes: "Add routes in `src/routes/` and register them in `src/routes/index.ts`",
            structure: "Use `/api/[route-name]` pattern for consistency",
            database: "Configure a database as needed—pick what works best for your project"
          }
        }
      },
      timestamp: new Date().toISOString()
    }
  });
});

export default router;
