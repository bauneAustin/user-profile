import { ReactNode } from "react";
import { BoltIcon, ChatBubbleLeftEllipsisIcon, ClipboardDocumentListIcon, FireIcon } from '@heroicons/react/24/outline';

export type CardDetails = {
    header: string;
    description: string | number | ReactNode;
    icon: "bolt" | "chat-bubble-left-ellipsis" | "clipboard-document-list" | "fire";
};

const IconMap = {
    bolt: BoltIcon,
    "chat-bubble-left-ellipsis": ChatBubbleLeftEllipsisIcon,
    "clipboard-document-list": ClipboardDocumentListIcon,
    "fire": FireIcon
};

export default function Card(props: {card: CardDetails}) {
    const {card} = props;
    const Icon = IconMap[card.icon]
    return (
        <div className="flex h-full w-full flex-row">
            <div className="flex flex-col h-full w-full grow rounded-md bg-main-50 px-6 py-6 md:px-4">
                <div className="flex w-full h-auto justify-start mb-2 text-2xl text-main-950">
                    {<Icon className="relative top-1.5 h-5 w-5 mr-2 text-main-950" />}
                    {card.header}
                </div>
                <div className="flex h-full truncate rounded-xl bg-white px-4 py-8 align-middle items-center justify-center text-xl font-semibold text-main-950">
                    {card.description}
                </div>
            </div>
        </div>
    );
};
