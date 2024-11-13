export default async function Page() {
    return (
        <main>
            <h1 className={`mb-4 text-xl md:text-2xl`}>
                Austin Baune Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                Top
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