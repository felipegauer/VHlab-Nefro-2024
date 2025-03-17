import { useContext, useEffect, useState } from "react"
import DataSet from "../assets/DataSet.svg"
import SkeletonInfo from "./SkeletonInfo"
import Service from "../Service/backEnd"
import { DatasetContent } from "../Context/DatasetContent"
import { UserContent } from "../Context/UserContent"
import { useNavigate } from "react-router-dom"

const classNameString = "w-max p-4 rounded-lg border"
export default function DataSetInfoCard() {
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState(null)
    const {name,setInfoDataSet} = useContext(DatasetContent)
    const{token} = useContext(UserContent)
    const Navigate = useNavigate();
   

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const data = await Service.get(`/api/dataset/${name}/info`,token)
            if (data.err)
                console.log(data.err);
            else {
                setInfo(data)
                setInfoDataSet(data)
                setLoading(false)
            }
        }

        if(!token)Navigate("/login");
        getData()
    }, [])

    useEffect(() => {
        if (info) setLoading(false)
    }, [info])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.getMonth() + 1; // getMonth() retorna de 0 a 11, então adicionamos 1
        const year = date.getFullYear();
        return `${month}/${year}`;
    };

    return loading ?
        <SkeletonInfo className={classNameString}  srcClass="h-24 p-4" /> :
        (<div className={classNameString}>
            <div className="flex gap-4 my-4 ">
                <div>
                    <img src={DataSet} alt="DatSet" className="md:w-24 md:h-24 w-12" />
                </div>
                <div className="flex flex-col justify-center gap-1 md:text-lg text-sm">
                    <div className="flex flex-row gap-4 ">
                        <h2 className="font-bold">Dataset: <span className="font-normal">{info.nome}</span></h2>
                        <h2 className="font-bold">Período: <span className="font-normal">{formatDate(info.inicio)} - {formatDate(info.fim)}</span></h2>
                    </div>
                    <div className="flex flex-row gap-4">
                        <h2 className="font-bold">Pacientes: <span className="font-normal">{info.pacientes}</span></h2>
                        <h2 className="font-bold">Vivos: <span className="font-normal">{info.vivos}</span></h2>
                        <h2 className="font-bold">Óbitos: <span className="font-normal">{info.mortos}</span></h2>

                    </div>

                </div>
            </div>
        </div>)
}