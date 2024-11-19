import Link from "next/link";

export type ListRowItem = {
    title: string;
    type: "JS" | "CSS" | "Personal";
    id: string;
    body: string;
    created_at: string;
};

type ColorMap = {
    JS: string[];
    CSS: string[];
    Personal: string[];
}

const colorMap : ColorMap = {
    JS: ['bg-main-200', 'text-main-900', 'border-main-600', 'hover:text-main-500'],
    CSS: ["bg-mallard-200", 'text-mallard-900', 'border-mallard-600', 'hover:text-mallard-500'],
    Personal: ["bg-marigold-200", 'text-marigold-900', 'border-marigold-600', 'hover:text-marigold-500']
}

export const ListRow = (props: ListRowItem) => {
    const {title, type, created_at, id} = props;
    const color = colorMap[type];
    console.log(color[3])
    return (
        <div className={`flex flex-col border-l-8 ${color[2]} ${color[0]} cursor-pointer rounded-lg w-full h-full p-4 mb-5`}>
            <div className={`flex flex-col h-fill rounded text-xl w-full ${color[1]} ${color[3]}`}>
                <Link href={`/posts/${id}`} className={`flex flex-col font-semibold`}>
                    {title}
                    <span className='block text-sm font-medium'>{new Date(created_at).toDateString()}</span>
                </Link>
                <div className={`flex flex-row-reverse text-sm`}>
                    {type}
                </div>
            </div>
            </div>
    );
};

export default ListRow;