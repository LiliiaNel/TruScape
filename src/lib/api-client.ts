import type {
    Company,
    Promotion,
    Category,
    Country,
    SummaryStats,
    SummarySales } from '@/lib/api';

export const fetchCompanies = async (): Promise<Company[]> => {
    const res = await fetch('/api/companies');
    return res.json();
};

export const fetchCompany = async (id: string): Promise<Company> => {
    const res = await fetch(`/api/companies/${id}`);
    return res.json();
};

export const createCompany = async (data: Omit<Company, 'id' | 'hasPromotions'>): Promise<Company> => {
    const res = await fetch('/api/companies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const fetchPromotions = async (companyId?: string): Promise<Promotion[]> => {
    const url = companyId ? `/api/promotions?companyId=${companyId}` : '/api/promotions';
    const res = await fetch(url);
    return res.json();
};

export const createPromotion = async (data: Omit<Promotion, 'id'>): Promise<Promotion> => {
    const res = await fetch('/api/promotions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
};