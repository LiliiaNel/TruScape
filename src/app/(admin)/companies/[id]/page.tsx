import Header from '@/app/components/header';
import {notFound} from "next/navigation";
//
// export interface PageProps {
//     params: Promise<{ id: string[]}>;
// }
//
// export default async function Page({ params }: PageProps) {
//     const { id } = await params;
//     const firstSegment = id[0];
//     const numericId = Number.parseInt(firstSegment ?? '', 10);
//
//     if (Number.isNaN(numericId) || numericId <= 0) {
//         notFound();
//     }
//     return (
//         <>
//             <Header>Company /{id.join('/')}</Header>
//         </>
//     );
// }

export interface PageProps {
    params: { id: string };
}

export default function Page({ params }: PageProps) {
    return (
        <div className="py-6 px-10">
            <p>{`Information about company (${params.id})`}</p>
        </div>
    );
}