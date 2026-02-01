import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, hashPassword } from "./auth";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  setupAuth(app);

  // Inquiries
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get(api.inquiries.list.path, async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const inquiries = await storage.getInquiries();
    res.json(inquiries);
  });

  // Seed Admin User
  const existingUser = await storage.getUserByUsername("info@hdproject.nl");
  if (!existingUser) {
    const password = await hashPassword("hdproject123!");
    await storage.createUser({
      username: "info@hdproject.nl",
      password,
    });
    console.log("Admin user seeded: info@hdproject.nl");
  }

  return httpServer;
}
