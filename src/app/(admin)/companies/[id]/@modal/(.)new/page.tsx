'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/app/components/modal';
import PromotionForm from '@/app/components/promotion-form';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const { id } = React.use(params);

    return (
        <Modal show={true} onClose={() => router.back()}>
            <PromotionForm companyId={id} onSubmit={() => router.back()} />
        </Modal>
    );
}