// import { CarouselImg } from "../Components/Carouselmg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DatasetContent } from "../Context/DatasetContent";
import Service from "../Service/backEnd";
import Select from 'react-select';
import { PacientContext } from "../Context/PacientContext";
import { UserContent } from "../Context/UserContent";

export default function HomePage() {
    // let imgs = [
    //     "https://oncoclinicas-assets-wordpress-prd.s3.amazonaws.com/wp-content/uploads/2021/12/39-nefrologia.jpg",
    //     "https://setorsaude.com.br/wp-content/uploads/2014/11/CDI-HOSPITAL-SAO-LUCAS-02.jpg",
    //     "https://wwwhospitalsaolucas.pucrs.br/media/resize/930x2000/pasta/1/65f2ae1c0e3d9.jpg?t=1710403102986",
    //     // "https://med.estrategia.com/portal/wp-content/uploads/2021/09/puc-rs-residencia-medica-1024x576.webp",

    // ]

    const [options,setOptions] = useState(null)
    const {name,setName} = useContext(DatasetContent);
    const {setPacientList} = useContext(PacientContext)
    const {token} = useContext(UserContent);

    useEffect(() => {
        const getData = async () => {
            const data = await Service.get(`/api/dataset/all`,token);
            if (data.err)
                console.log(data.err);
            else {              
                const op = data.map((d)=>{return {value:d,label:d}})
                setOptions(op);
            }

        }
        if(!token) window.location.href= "/login"
        getData();
    },[])
    return (
        <div className=" h-full">
            {/* <div className="w-full h-[400px] m-auto">
                    <CarouselImg imgsSrc={imgs}/>
                    <CarouselImg/>
                </div> */}
                
            <div className="container mx-auto text-3xl h-full flex flex-row justify-center items-center gap-4">
                {/* <img src={NefroRim} alt="" className="w-96" /> */}

                <div className="flex flex-col gap-2 items-center w-full">
                <Link to='/dataset' className="color-bg w-min text-center px-6 py-2 rounded-xl text-white">
                    DataSet
                </Link>
                <Select
                    className="text-sm"
                    options={options}
                    defaultValue={{value:name,label:name}}
                    onChange={(e) => {setName(e.value); setPacientList([])}}
                />
                </div>
                
                {/* <Link to='/dataset' className="color-bg px-6 py-2 rounded-xl text-white">
                    Criar Paciente
                </Link> */}

                

            </div>
        </div>

    )
}
