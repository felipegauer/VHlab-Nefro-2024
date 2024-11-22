import Skeleton from "../skeleton"
import PieGraph from "../graphs/PieGraph"
import Card from "../Card"
import PropTypes from 'prop-types';

const classNameString = "w-full md:w-[35%] h-[400px]"

export default function PieGraphCard({dataset}){

    return !dataset? 
    <Skeleton className={classNameString}/> : 
    (<Card className={classNameString}><PieGraph dataset={dataset?dataset:null}/></Card>)
}

PieGraphCard.propTypes = {
    dataset: PropTypes.array,
};   
