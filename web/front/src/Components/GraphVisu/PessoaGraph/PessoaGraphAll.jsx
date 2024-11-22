import { useContext, useEffect, useState } from "react"
import Loading from "../../loading"
import LineGraph from "../../graphs/LineGraph"
import { CheckBoxContent } from "../../../Context/CheckboxContent"
import Service from '../../../Service/backEnd'


function PessoaGraphAll() {
    const [data, setData] = useState(null)
    const [dataSet, setDataSet] = useState(null)
    const { person, examSelected } = useContext(CheckBoxContent)

    useEffect(() => {
        console.log();
    })


    useEffect(() => {
        const getData = async () => {
            if (!person) return null;
            const dataR = await Service.get(`/api/exampatien/?codigo=${person}`);
            if (dataR.err)
                console.log(dataR.err);
            else
                setData({ exams: dataR[1].Exams });

            

        }

        getData()

    }, [person])

    return (<>
        {data ?(<>{
            Object.entries(data.exams).map(([key, value]) => {
                return value[0].Value === "Negativo" || value[0].Value === "Positivo" ? null :
                <LineGraph DataSet={value} labelX={"Mes/Ano"} labelY={key} legendName={key}/>
            })}</>)

            : <Loading />}
    </>)
}

export default PessoaGraphAll

