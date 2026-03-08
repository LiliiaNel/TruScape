import { NextResponse } from 'next/server';
import { createPromotion, getPromotions } from '@/lib/api';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const companyId = searchParams.get('companyId') ?? undefined;
    const promotions = await getPromotions({ companyId });
    return NextResponse.json(promotions);
}

export async function POST(request: Request) {
    const body = await request.json();
    const promotion = await createPromotion(body);
    return NextResponse.json(promotion);
}