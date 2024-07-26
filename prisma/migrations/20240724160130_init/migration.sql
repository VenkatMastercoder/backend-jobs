-- CreateTable
CREATE TABLE "Job" (
    "job_id" TEXT NOT NULL,
    "job_image_url" TEXT NOT NULL,
    "job_title" TEXT NOT NULL,
    "job_location" TEXT NOT NULL,
    "job_tags" JSONB NOT NULL,
    "job_offer" TEXT NOT NULL,
    "job_start_date" TEXT NOT NULL,
    "job_opening" TEXT NOT NULL,
    "job_experience" TEXT NOT NULL,
    "job_apply_by" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "job_details_id" TEXT NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("job_id")
);

-- CreateTable
CREATE TABLE "JobDetails" (
    "job_details_id" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "job_type" TEXT NOT NULL,
    "about_job" JSONB NOT NULL,
    "about_company" JSONB NOT NULL,
    "skills_mandatory" JSONB NOT NULL,
    "exta_benefits" JSONB NOT NULL,
    "job_id" TEXT NOT NULL,

    CONSTRAINT "JobDetails_pkey" PRIMARY KEY ("job_details_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Job_job_id_key" ON "Job"("job_id");

-- CreateIndex
CREATE UNIQUE INDEX "Job_job_details_id_key" ON "Job"("job_details_id");

-- CreateIndex
CREATE UNIQUE INDEX "JobDetails_job_details_id_key" ON "JobDetails"("job_details_id");

-- CreateIndex
CREATE UNIQUE INDEX "JobDetails_job_id_key" ON "JobDetails"("job_id");

-- AddForeignKey
ALTER TABLE "JobDetails" ADD CONSTRAINT "JobDetails_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;
