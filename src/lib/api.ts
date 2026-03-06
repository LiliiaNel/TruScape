import prisma from "../../lib/prisma";

export interface SummaryStats {
    promotions: number;
    categories: number;
    newCompanies: number;
    activeCompanies: number;
}

export interface SummarySales {
    id: string;
    companyId: string;
    companyTitle: string;
    sold: number;
    income: number;
}

export interface Country {
    id: string;
    title: string;
}

export interface Category {
    id: string;
    title: string;
}

export enum CompanyStatus {
    Active = 'active',
    NotActive = 'notActive',
    Pending = 'pending',
    Suspended = 'suspended',
}

export interface Company {
    id: string;
    title: string;
    description: string | null;
    status: CompanyStatus;
    joinedDate: string;
    hasPromotions: boolean;
    categoryId: string | null;
    categoryTitle: string | null;
    countryId: string | null;
    countryTitle: string | null;
    avatar?: string;
    sold: number;
    income: number;
}

export interface Promotion {
    id: string;
    title: string;
    description: string;
    discount: number;
    companyId: string;
    companyTitle: string;
    avatar?: string;
}

// Companies

export const getCompanies = async (): Promise<Company[]> => {
    const companies = await prisma.company.findMany({
        orderBy: { joinedDate: "desc" },
    });

    return companies.map((c) => ({
        id: c.id,
        title: c.title,
        description: c.description,
        status: c.status as CompanyStatus,
        joinedDate: c.joinedDate?.toISOString() ?? "",
        hasPromotions: c.hasPromotions,
        categoryId: c.categoryId,
        categoryTitle: c.categoryTitle,
        countryId: c.countryId,
        countryTitle: c.countryTitle,
        avatar: c.avatar ?? undefined,
        sold: c.sold,
        income: c.income,
    }));
};

export const getCompany = async (id: string): Promise<Company | null> => {
    const c = await prisma.company.findUnique({
        where: { id },
    });
    if (!c) return null;

    return {
        id: c.id,
        title: c.title,
        description: c.description,
        status: c.status as CompanyStatus,
        joinedDate: c.joinedDate?.toISOString() ?? "",
        hasPromotions: c.hasPromotions,
        categoryId: c.categoryId,
        categoryTitle: c.categoryTitle,
        countryId: c.countryId,
        countryTitle: c.countryTitle,
        avatar: c.avatar ?? undefined,
        sold: c.sold,
        income: c.income,
    };
};

export const createCompany = async (
    data: Omit<Company, "id" | "hasPromotions">
): Promise<Company> => {
    const c = await prisma.company.create({
        data: {
            ...data,
            hasPromotions: false,
        },
    });

    return {
        id: c.id,
        title: c.title,
        description: c.description,
        status: c.status as CompanyStatus,
        joinedDate: c.joinedDate?.toISOString() ?? "",
        hasPromotions: c.hasPromotions,
        categoryId: c.categoryId,
        categoryTitle: c.categoryTitle,
        countryId: c.countryId,
        countryTitle: c.countryTitle,
        avatar: c.avatar ?? undefined,
        sold: c.sold,
        income: c.income,
    };
};

// Categories
export const getCategories = async (): Promise<Category[]> => {
    const categories = await prisma.company
        .findMany({ distinct: ["categoryId"] })
        .then((list) =>
            list.filter((c) => c.categoryId && c.categoryTitle)
                .map((c) => (
                    {
                        id: c.categoryId!,
                        title: c.categoryTitle!
                    }))
        );
    return categories;
};

// Countries

export const getCountries = async (): Promise<Country[]> => {
    const countries = await prisma.company
        .findMany({ distinct: ["countryId"] })
        .then((list) =>
            list.filter((c) => c.countryId && c.countryTitle)
                .map((c) => ({
                id: c.countryId!,
                title: c.countryTitle!,
            }))
        );
    return countries;
};

// Sales
export const getSummarySales = async (): Promise<SummarySales[]> => {
    const companies = await prisma.company.findMany();

    return companies.map((c) => ({
        id: c.id,
        companyId: c.id,
        companyTitle: c.title,
        sold: c.sold,
        income: c.income,
    }));
};

// Promotions

export const getPromotions = async (
    params: Partial<{ companyId: string }> = {}
): Promise<Promotion[]> => {
    const where = params.companyId ? { companyId: params.companyId } : {};
    const promos = await prisma.promotion.findMany({
        where,
        include: { company: true },
    });

    return promos.map((p) => ({
        id: p.id,
        title: p.title,
        description: p.description,
        discount: p.discount,
        companyId: p.companyId,
        companyTitle: p.company.title,
        avatar: p.avatar ?? undefined,
    }));
};

export const createPromotion = async (
    data: Omit<Promotion, "id">
): Promise<Promotion> => {
    const { companyTitle, ...prismaData } = data;
    const p = await prisma.promotion.create({
        data: prismaData,
        include: { company: true },
    });
    return {
        id: p.id,
        title: p.title,
        description: p.description,
        discount: p.discount,
        companyId: p.companyId,
        companyTitle: p.company.title,
        avatar: p.avatar ?? undefined,
    };
};

// Summary Stats

export const getSummaryStats = async (): Promise<SummaryStats> => {
    const companies = await prisma.company.count();
    const promotions = await prisma.company.count({ where: { hasPromotions: true } });
    const categoryGroups = await prisma.company.groupBy({ by: ["categoryId"] });
    const categories = categoryGroups.length;
    const newCompanies = await prisma.company.count({
        where: { joinedDate: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
    });
    const activeCompanies = await prisma.company.count({ where: { status: "active" } });

    return { promotions, categories, newCompanies, activeCompanies };
};