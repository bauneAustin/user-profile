import {ListRow, ListRowItem} from "./listRow";
import { v4 as uuidv4 } from 'uuid';

export const ScrollableList = (props: {header: string; listRowItems: ListRowItem[]}) => {
    const {header, listRowItems} = props;
    return (
        <div className="flex flex-col max-h-96">
            {header ? <div className="text-2xl text-main-950 mt-14 mb-8">{header}</div> : null}
            <div className="flex flex-col min-h-96 w-full rounded-md bg-main-50 px-6 py-6 md:px-4 overflow-y-scroll">
                {listRowItems.map(item => <ListRow key={uuidv4()} {...item} />)}
            </div>
        </div>
    );
}

export default ScrollableList;