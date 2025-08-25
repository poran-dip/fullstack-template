import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

import apiRoutes from "./routes/index.js";

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));

// Body parsing middleware
app.use(express.json());

// Rate limiting in production
if (process.env.NODE_ENV === 'production') {
  const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
  });
  app.use(limiter);
}

// Health check endpoint
app.get('/', (_req: express.Request, res: express.Response) => {
  return res.json({ 
    success: true, 
    message: "Server's alive and kicking! 🚀", 
    data: { 
      timestamp: new Date().toISOString() 
    } 
  });
});

// API routes
app.use("/api", apiRoutes);

// Error handler
app.use((error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(error.stack);
  return res.status(500).json({ 
    success: false,
    error: process.env.NODE_ENV === 'production' ? 'Internal server error' : error.message 
  });
});

// 404 handler
app.use((_req: express.Request, res: express.Response) => {
  return res.status(404).json({ 
    success: false, 
    error: "Route not found" 
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const baseUrl = process.env.BASE_URL || `http://localhost:${PORT}`;
  console.log(`🚀 Server running on ${baseUrl}`);
});
