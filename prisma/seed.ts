import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
    adapter,
});

const companies: Prisma.CompanyCreateInput[] = [
    {
        id: "7",
        title: "Aurora Learning",
        description: "Online education platform focused on professional upskilling and certifications.",
        status: "active",
        joinedDate: new Date("2025-07-31"),
        hasPromotions: true,
        categoryId: "3",
        categoryTitle: "Education",
        countryId: "2",
        countryTitle: "USA",
    },
    {
        id: "8",
        title: "GreenField Analytics",
        description: "Data analytics and business intelligence solutions for mid-size companies.",
        status: "notActive",
        joinedDate: new Date("2025-08-02"),
        hasPromotions: false,
        categoryId: "5",
        categoryTitle: "IT & Software",
        countryId: "4",
        countryTitle: "Ukraine",
    },
    {
        id: "9",
        title: "SkyVision Drones",
        description: "Manufacturer of FPV drones for aerial filming and industrial inspections.",
        status: "suspended",
        joinedDate: new Date("2025-08-03"),
        hasPromotions: false,
        categoryId: "8",
        categoryTitle: "Hardware",
        countryId: "3",
        countryTitle: "Italy",
    },
    {
        id: "10",
        title: "UZO Logistics",
        description: "International logistics and supply chain management company.",
        status: "active",
        joinedDate: new Date("2025-08-15"),
        hasPromotions: true,
        categoryId: "6",
        categoryTitle: "Logistics",
        countryId: "2",
        countryTitle: "USA",
    },
    {
        id: "11",
        title: "Nova HealthTech",
        description: "Digital health solutions for clinics and private medical practices.",
        status: "pending",
        joinedDate: new Date("2025-08-20"),
        hasPromotions: true,
        categoryId: "4",
        categoryTitle: "Healthcare",
        countryId: "5",
        countryTitle: "Spain",
    },

];


export async function main() {
    for (const c of companies) {
        await prisma.company.create({ data: c });
    }
}

main();