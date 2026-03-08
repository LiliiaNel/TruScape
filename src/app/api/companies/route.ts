import { NextResponse } from 'next/server';
import {createCompany, getCompanies} from '@/lib/api';


export async function GET() {
    const companies = await getCompanies();
    return NextResponse.json(companies);
}

export async function POST(request: Request) {
    const body = await request.json();
    const company = await createCompany(body);
    return NextResponse.json(company);
}