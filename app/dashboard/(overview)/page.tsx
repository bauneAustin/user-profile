import BarChart from "@/app/ui/barChart/barchart";
import { CardDetails } from "@/app/ui/dashboard/card";
import Cards from "@/app/ui/dashboard/cards";
import { ListRowItem } from "@/app/ui/scrollableLIst/listRow";
import ScrollableList from "@/app/ui/scrollableLIst/scrollableList";
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
    const cardDetails: CardDetails[] = [
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
        },
        {
            header: "Recommendations",
            description: "another todo",
            icon: "fire"
        }
    ];

    const testBlogList: ListRowItem[] = [
        {
            title: "Test Post",
            type: "personal"
        },
        {
            title: "NextJS is cool!",
            type: "js"
        },
        {
            title: "NextJS is cool! 2",
            type: "js"
        },
        {
            title: "Tailwind is also cool!",
            type: "css"
        }
    ]

    return (
        <main className="text-main-950">
            <h1 className={`mb-4 text-xl md:text-2xl`}>
                What is Austin up to?
            </h1>
            <div>
                <Cards cardDetails={cardDetails} />
            </div>
            <div className="mt-6 h-full grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-2">
                {/* <Suspense fallback={<RevenueChartSkeleton />}> */}
                <div>
                    <BarChart />
                </div>
                {/* </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}> */}
                <div>
                    <ScrollableList header="Recent Posts" listRowItems={testBlogList} />
                </div>
                {/* </Suspense> */}
            </div>
        </main>
    );
}