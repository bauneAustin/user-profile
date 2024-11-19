import Link from "next/link";
export const Pill = (props: {text: string, link?: string}) => {
    const {text} = props;
    return (
        <Link href={`/${text.toLowerCase()}`} className="flex flex-row rounded-full h-10 w-full bg-slate-50 hover:bg-main-100 cursor-pointer justify-center">
            <span className="relative top-2 font-semibold">{text}</span>
        </Link>
    )
};

export default Pill;