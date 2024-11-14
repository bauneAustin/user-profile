import Pill from "./pill/pill";
export default function Sidebar() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <div className="bg-main-950 flex h-48 flex-col rounded w-full text-white text-9xl justify-end text-center">
                AB
            </div>
            <div className="flex grow flex-col h-full bg-main-50 py-2 mt-3 md:flex-col md:space-x-0 md:space-y-2">
                <Pill text='Dashboard' />
                <Pill text='Posts' />
            </div>
        </div>
    );
};
