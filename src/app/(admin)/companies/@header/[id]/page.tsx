import Header from '@/app/components/header';
import { getCompany } from '@/lib/api';
import {Company} from "@/lib/types";
import getQueryClient from '@/lib/utils/getQueryClient';

export interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
    const { id } = await params;
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['companies', id],
        queryFn: () => getCompany(id),
        staleTime: 10 * 1000,
    });

    const company = queryClient.getQueryData(['companies', id]) as Company;

    return <Header>{company?.title}</Header>;
}