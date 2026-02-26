'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

export interface AddPromotionButtonProps {
    companyId?: string;
}

export default function AddPromotionButton({
                                               companyId,
                                           }: AddPromotionButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        if (!companyId) {
            console.warn('Cannot add promotion: companyId is missing');
            return;
        }
        router.push(`/companies/${companyId}/new-promotion`);
    };

    return (
        <Button
            onClick={handleClick}
            disabled={!companyId}
        >
            Add promotion
        </Button>
    );
}