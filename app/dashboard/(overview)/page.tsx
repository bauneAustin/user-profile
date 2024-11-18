import BarChart from "@/app/ui/barChart/barchart";
import { CardDetails } from "@/app/ui/dashboard/card";
import Cards from "@/app/ui/dashboard/cards";
import { ListRowItem } from "@/app/ui/scrollableLIst/listRow";
import ScrollableList from "@/app/ui/scrollableLIst/scrollableList";

// actions
import { getPosts, getGithubCommits } from "@/app/lib/blogActions/actions";

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
    // TODO: add better quieries for the data we want
    // Update routing and add suspense while we wait for the data to load
    const posts: ListRowItem[] = await getPosts();
    const githubComments = await getGithubCommits();

    const cardDetails: CardDetails[] = [
        {
            header: "Git Commits",
            description: githubComments[0]?.contributions,
            icon:"bolt"
        },
        {
            header: "Active Projects",
            description: currentProjects,
            icon: "clipboard-document-list"
        },
        {
            header: "Number of Posts",
            description: posts.length,
            icon: "chat-bubble-left-ellipsis"
        },
        {
            header: "Recommendations",
            description: "another todo",
            icon: "fire"
        }
    ];

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
                    <BarChart posts={posts} />
                </div>
                {/* </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}> */}
                <div>
                    <ScrollableList header="Recent Posts" listRowItems={posts} />
                </div>
                {/* </Suspense> */}
            </div>
        </main>
    );
}