import Cards from "@/app/ui/dashboard/cards";

// TODO: Probably move these to separate file or db
const currentProjects = <ul>
    <li>
        User Dashboard
    </li>
    <li>
        Learn tailwind
    </li>
    <li>
        Try Deno
    </li>
</ul>;

export default async function Page() {
    const cardDetails = [
        {
            header: "TODO",
            description: "test",
            icon:"bolt"
        },
        {
            header: "Active Projects",
            description: currentProjects,
            icon: "clipboard-document-list"
        },
        {
            header: "Number of Posts",
            description: 0,
            icon: "chat-bubble-left-ellipsis"
        }
    ];

    return (
        <main>
            <h1 className={`mb-4 text-xl md:text-2xl`}>
                Austin Baune Dashboard
            </h1>
            <div>
                <Cards cardDetails={cardDetails} />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-2">
                {/* <Suspense fallback={<RevenueChartSkeleton />}> */}
                <div>
                    Left
                </div>
                {/* </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}> */}
                <div>
                    Right
                </div>
                {/* </Suspense> */}
            </div>
        </main>
    );
}