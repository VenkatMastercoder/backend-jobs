const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const prisma = new PrismaClient();

const { z } = require("zod");

const mySchema = z.object({
  id: z.string(),
});

app.get("/", (req, res) => {
  res.send("API V1 - WORKING");
});

app.get("/jobs", async (req, res) => {
  // 1. Setup 1 --> Data from Client [ Optional ]

  // 2. Setup 2 --> DB Logic
  const JobsData = await prisma.job.findMany();

  // 3. Setup 3 --> Data to Frontend Client
  res.json({ message: "Job Data Fetched", data: JobsData });
});

app.get("/jobs/:id", async (req, res) => {
  try {
    // 1. Setup 1 --> Data from Client
    const jobId = mySchema.parse(req.params);

    // 2. Setup 2 --> DB Logic
    const JobsData = await prisma.job.findUnique({
      where: {
        job_id: jobId.id,
      },
    });

    if (JobsData !== null) {
      // 3. Setup 3 --> Data to Frontend Client
      res.status(200).json({ message: "Job Data Fetched", data: JobsData });
    } else {
      res.status(404).json({ message: "Job Data Not Found", data: JobsData });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({message:err})
  }
});

app.listen(3000);
