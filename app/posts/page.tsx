import BlogTable from "../ui/posts/blogTable"
export default async function Page() {

    return (
        <main className="text-main-950">
            <h1 className={`mb-4 text-xl md:text-2xl`}>
                Austin's Posts
            </h1>
            <div className="mt-6 h-full w-full flex flex-col">
                <BlogTable />
            </div>
        </main>
    )
};
