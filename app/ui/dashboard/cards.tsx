import Card from "./card";

// Types
import { CardDetails } from "./card";
export type Cards = CardDetails[];

export const Cards = (props: {cardDetails: Cards}) => {
    const {cardDetails} = props;
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cardDetails.map(detail => <Card card={detail} key={detail.header}/>)}
        </div>
    );
}

export default Cards;