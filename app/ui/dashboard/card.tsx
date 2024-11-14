import { ReactNode } from "react";
import { BoltIcon, ChatBubbleLeftEllipsisIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

export type CardDetails = {
    header: string;
    description: string | number | ReactNode;
    icon: "bolt" | "chat-bubble-left-ellipsis" | "clipboard-document-list";
};

const IconMap = {
    bolt: BoltIcon,
    "chat-bubble-left-ellipsis": ChatBubbleLeftEllipsisIcon,
    "clipboard-document-list": ClipboardDocumentListIcon
};

export default function Card(props: {card: CardDetails}) {
    const {card} = props;
    const Icon = IconMap[card.icon]
    return (
        <div className="flex h-full w-full flex-row min-h-10">
            <div className="h-auto w-full grow rounded-md bg-slate-50 md:block px-6 py-6 md:px-4">
                <span className="flex w-full h-auto justify-start mb-2 text-2xl">
                    {<Icon className="relative top-1 h-5 w-5 text-slate-700 mr-2" />}{card.header}
                </span>
                <div className="flex w-full bg-white rounded-md px-3 py-3 md:px-2 justify-center text-xl">
                    {card.description}
                </div>
            </div>
        </div>
    );
};
