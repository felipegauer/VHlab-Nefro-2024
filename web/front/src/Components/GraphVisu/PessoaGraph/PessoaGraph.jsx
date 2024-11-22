import { useContext, useEffect, useState } from "react";
import { CheckBoxContent } from "../../../Context/CheckboxContent";
import LineGraph from "../../graphs/LineGraph";



function PessoaGraph(){

    //const {person,exams} =useContext(CheckBoxContent)
    const [data, setData] =useState(null)

    useEffect(()=>{
        // BackEnd
    },[person])


    return(<LineGraph dataX={data.months} dataY={data.exams[0]} labelX ={"Meses"}labelY={"Valores"}/>)
}

export default PessoaGraph;