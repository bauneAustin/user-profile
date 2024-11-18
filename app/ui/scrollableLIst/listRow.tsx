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
    JS: ['bg-main-200', 'text-main-900', 'text-main-950', 'border-main-600'],
    CSS: ["bg-mallard-200", 'text-mallrd-900', 'text-mallard-950', 'border-mallard-600'],
    Personal: ["bg-marigold-200", 'text-marigold-900', 'text-marigold-950', 'border-marigold-600']
}

export const ListRow = (props: ListRowItem) => {
    const {title, type, created_at} = props;
    const color = colorMap[type];
    return (
        <div className={`flex flex-col border-l-8 ${color[3]} ${color[0]} rounded-lg w-full h-full p-4 mb-5`}>
            <div className={`flex flex-col h-fill rounded text-xl w-full text-${color[1]}`}>
                <div className={`flex flex-col ${color[1]} font-semibold`}>
                    {title}
                    <span className='block text-sm font-medium'>{new Date(created_at).toDateString()}</span>
                </div>
                <div className={`flex flex-row-reverse text-sm ${color[2]}`}>
                    {type}
                </div>
            </div>
            </div>
    );
};

export default ListRow;