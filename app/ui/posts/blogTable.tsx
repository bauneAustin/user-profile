import { getPosts } from "@/app/lib/blogActions/data";
import { ListRowItem } from "../scrollableLIst/listRow";
import Link from "next/link";

export default async function BlogTable () {
    const posts: ListRowItem[] = await getPosts();

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-main-50 p-2 md:pt-0">
                    <table className="border-spacing-y-2 border-separate min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-2xl font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 mb-5 font-medium sm:pl-6">
                                    Title
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Preview
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Type
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Created At
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {posts?.map((post) => (
                                <tr
                                    key={post.id}
                                    className="w-full py-3 text-lg last-of-type:border-none rounded [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    <td className="whitespace-nowrap max-w-32 truncate py-3 pl-6 pr-3">
                                        <Link
                                            className="hover:text-main-500 text-main-900"
                                            href={`/posts/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </td>
                                    <td className="whitespace-nowrap max-w-80 px-3 py-3 truncate">
                                        {post.body}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {post.type}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {new Date(post.created_at).toDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}