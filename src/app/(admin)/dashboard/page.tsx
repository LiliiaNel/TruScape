import MagicButton from "@/app/components/magic-button";

export interface PageProps {}

function Page({} : PageProps) {
    return (
        <main>
            <h1 className="text-xl">Dashboard</h1>
            <MagicButton/>
        </main>
    );
}

export default Page;