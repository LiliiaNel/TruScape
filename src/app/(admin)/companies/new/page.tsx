'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import CompanyForm, { CompanyFieldValues } from '@/app/components/company-form';
import { createCompany } from '@/lib/api-client';
import { CompanyStatus } from '@/lib/types';

export default function Page() {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutateAsync } = useMutation({
        mutationFn: createCompany,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['companies'] });
        },
    });

    const handleSubmit = async (values: CompanyFieldValues) => {
        await mutateAsync({
            title: values.name,
            description: values.description,
            status: values.status as CompanyStatus,
            categoryId: null,
            categoryTitle: values.category || null,
            countryId: null,
            countryTitle: values.country || null,
            joinedDate: values.date ? new Date(values.date).toISOString() : "",
            sold: 0,
            income: 0,
        });
        router.back();
    };

    return (
        <div className="py-6 px-10">
            <CompanyForm onSubmit={handleSubmit} />
        </div>
    );
}