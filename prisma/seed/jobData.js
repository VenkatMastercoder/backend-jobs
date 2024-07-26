const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.job.create({
    data: {
      job_id: 'job_1',
      job_image_url: 'https://example.com/image1.jpg',
      job_title: 'Software Engineer',
      job_location: 'New York, NY',
      job_tags: { tags: ['JavaScript', 'Node.js', 'React'] },
      job_offer: 'Competitive Salary',
      job_start_date: '2024-08-01',
      job_opening: '3',
      job_experience: '2 years',
      job_apply_by: new Date('2024-07-31T23:59:59Z'),
      job_details_id: 'job_details_1',
      JobDetails: {
        create: {
          job_details_id: 'job_details_1',
          salary: '$80,000 - $100,000',
          job_type: 'Full-time',
          about_job: { description: 'This is a challenging role that requires a keen eye for detail and a passion for technology.' },
          about_company: { description: 'A leading tech company specializing in innovative solutions.' },
          skills_mandatory: { skills: ['JavaScript', 'React', 'Node.js'] },
          exta_benefits: { benefits: ['Health Insurance', '401(k)', 'Paid Time Off'] },
        },
      },
    },
  });

  await prisma.job.create({
    data: {
      job_id: 'job_2',
      job_image_url: 'https://example.com/image2.jpg',
      job_title: 'Product Manager',
      job_location: 'San Francisco, CA',
      job_tags: { tags: ['Product Management', 'Agile', 'Scrum'] },
      job_offer: 'Attractive Salary',
      job_start_date: '2024-09-01',
      job_opening: '2',
      job_experience: '5 years',
      job_apply_by: new Date('2024-08-15T23:59:59Z'),
      job_details_id: 'job_details_2',
      JobDetails: {
        create: {
          job_details_id: 'job_details_2',
          salary: '$100,000 - $130,000',
          job_type: 'Full-time',
          about_job: { description: 'Lead cross-functional teams to deliver exceptional products.' },
          about_company: { description: 'A fast-growing startup with a focus on user-centric design.' },
          skills_mandatory: { skills: ['Product Management', 'Agile', 'Scrum'] },
          exta_benefits: { benefits: ['Stock Options', 'Flexible Working Hours', 'Health Insurance'] },
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });