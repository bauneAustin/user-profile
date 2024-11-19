import { Fragment } from "react";
import { getPost } from "@/app/lib/blogActions/data";
import { ListRowItem } from "@/app/ui/scrollableLIst/listRow";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const postDetails: ListRowItem[] = await getPost(params.id);
    const {title, type, created_at, body} = postDetails[0];

    return (
        <main className="text-main-950">
            <h1 className={`mb-4 text-xl md:text-2xl`}>
                {title}
            </h1>
            <h2 className="text-sm">
                {new Date(created_at).toDateString()} | {type}
            </h2>
            <hr className='border-b-4-solid border-main-900 h-2 w-full mt-4' />
            <div className="mt-6 h-full w-full flex flex-col">
                <p className="p-8 bg-main-50">
                    {body.split('\n').map((line, index) => (
                        <Fragment key={index}>
                            {line}
                            <br />
                        </Fragment>
                    ))}
                </p>
            </div>
        </main>
    )
};