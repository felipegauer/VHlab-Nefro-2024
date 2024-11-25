import { useState } from "react";
import DataSetInfoCard from "../Components/DataSetInfoCard";
import PacientList from "../Components/PacientList";
import GraphPage from "./GraphPage";
import Table from "./TablePage";


export default function DataSetPage() {
    const [selected, setSelected] = useState(1)

    const handleClicked = (num) => {
        setSelected(num)
    }

    const handleSwitch = ()=>{
        switch(selected){
            case 0:
                return <GraphPage/>
            case 1:
                return <Table/>
            case 2:
                return <PacientList/>
            default:
                return <GraphPage/>
        }
    }

    return (
        <div className="h-[63%]">
            <div className="container pt-6 mx-auto flex flex-col gap-6">
                <DataSetInfoCard/>
                <div className="flex container flex-row justify-around text-lg mb-6">
                    {/* <div className={`px-2 py-1 hover:border hover:border-black hover:rounded cursor-pointer ${selected==0?"border border-black rounded":""}`} onClick={()=> handleClicked(0)}><h1 >Gráfico</h1></div> */}
                    <div className={`px-2 py-1 hover:border hover:border-black hover:rounded cursor-pointer ${selected==1?"border border-black rounded":""}`} onClick={()=> handleClicked(1)}><h1 >Exames</h1></div>
                    <div className={`px-2 py-1 hover:border hover:border-black hover:rounded cursor-pointer ${selected==2?"border border-black rounded":""}`} onClick={()=> handleClicked(2)}><h1 >Pacientes</h1></div>
                </div>
            </div>
            <div className="h-full">
            {handleSwitch()}
            </div>
            
        </div>
    )
}