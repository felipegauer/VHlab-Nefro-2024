import { useContext, useEffect, useState } from "react"
import Service from "../Service/backEnd"
import { PacientContext } from "../Context/PacientContext"
import { DatasetContent } from "../Context/DatasetContent";
import { UserContent } from "../Context/UserContent";


export default function Table() {

    const [dataSet, setDataSet] = useState({
        head: ["שם הבדיקה", "תאור הבדיקה", "מחיר הבדיקה"],
        body: []
    })
    const { examsInfo, setExamsInfo } = useContext(PacientContext);
    const {name} = useContext(DatasetContent)
    const {token} = useContext(UserContent)

    useEffect(() => {
        const getData = async () => {
            const data = await Service.get(`/api/dataset/${name}/stats`,token);
            if (data.err)
                console.log(data.err);
            else {
                setDataSet(data);
                setExamsInfo(data);

            }

        }

        if(!token)window.location.href= "/login"
        getData();
    }, [])

const formatData = (data) => { 
    return Number(data.toFixed(2))
}

    return (
        <div className="container mx-auto bg flex flex-col h-full overflow-auto pe-4 pb-4">
            <div className="relative overflow-x-auto shadow-md md:rounded-lg">
                <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className=" text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
                        <tr>
                            {dataSet.head.map((item, index) => (
                                <th key={index} scope="col" className="px-6 py-3 text-center">
                                    {item}
                                </th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {dataSet.body.map((item, index) => (
                            <tr key={index} className="odd:bg-white even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" key={index} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item[dataSet.head[0]]}
                                </th>
                                {
                                    dataSet.head.map((key, index) =>

                                        index !== 0 && (<td key={key} className="px-6 py-4 text-center">
                                            {formatData(item[key])}
                                        </td>
                                        ))
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}