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
