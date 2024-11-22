
import { useParams } from "react-router-dom";
import LineGraphCard from "../Components/graphsCards/LineGraphCard";
import PacientCard from "../Components/PacientCard";
import { useContext, useEffect, useState } from "react";
import Service from "../Service/backEnd";
import { DatasetContent } from "../Context/DatasetContent";



function PacientPage() {

  const [pacient, setPacient] = useState(null)
  const [dataSets, setDataSets] = useState(null)
  const {name} = useContext(DatasetContent)


    const { codigo } = useParams()

    useEffect(() => {

        const getData = async () => {

            const data = await Service.get(`/api/pacient/${name}/${codigo}`);
            if (data.err)
                console.log(data.err);
            else{
              setPacient(data);
            }
                
        }

        const getDataSet = async () => {
          const data = await Service.get(`/api/pacient/exams/${name}/${codigo}`);
            if (data.err)
                console.log(data.err);
            else{
              setDataSets(data.exams);
            }
                
        }

        getData()
        getDataSet()


    }, [codigo,name])


    //Funcao para todos juntos
    // const handleSeries = ()=>{
    //   let series = []

    //   Object.entries(dataSets).map(([key, value]) => {
    //     series.push({name: value.name, data: value.data})
    //   })

    //   return series
    // }
  

  return (
    <div className="py-6 w-full">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="w-max">
          <PacientCard pacient={pacient}/> 
        </div>
        <div className=" flex flex-col w-full lg:grid lg:grid-cols-2 gap-4">
          {/* <LineGraphCard dataSet={dataSets?dataSets[0]:null}/> */}
          {dataSets?<>{Object.entries(dataSets)?.map(([, value], index) => <LineGraphCard key={index} dataSet={value}/>)}
          {/* <LineGraphCard series={handleSeries()}/> */}
          </>
          :(<><LineGraphCard/><LineGraphCard/></>)}
        </div>
      </div>
    </div>
  );
}

export default PacientPage;