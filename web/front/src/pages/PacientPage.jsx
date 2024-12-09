
import { useParams } from "react-router-dom";
import LineGraphCard from "../Components/graphsCards/LineGraphCard";
import PacientCard from "../Components/PacientCard";
import { useEffect, useState } from "react";
import Service from "../Service/backEnd";




function PacientPage() {

  const [pacient, setPacient] = useState(null)
  const [dataSets, setDataSets] = useState(null)
  const [checkbox, setCheckbox] = useState({
    real_data: false,
    ml_data: true,
    annotations: false
  })


  const { codigo } = useParams()
  const { dataset } = useParams()

  useEffect(() => {

    const getData = async () => {

      const data = await Service.get(`/api/pacient/${dataset}/${codigo}`);
      if (data.err)
        console.log(data.err);
      else {
        setPacient(data);
      }

    }

    const getDataSet = async () => {
      const data = await Service.get(`/api/pacient/exams/${dataset}/${codigo}`);
      if (data.err)
        console.log(data.err);
      else {
        setDataSets(data.exams);
      }

    }

    getData()
    getDataSet()


  }, [codigo,dataset])


  //Funcao para todos juntos
  // const handleSeries = ()=>{
  //   let series = []

  //   Object.entries(dataSets).map(([key, value]) => {
  //     series.push({name: value.name, data: value.data})
  //   })

  //   return series
  // }

  const handleChecked = (e) => {
    if (e.target.checked) {
      setCheckbox({ ...checkbox, [e.target.value]: true })
    }else{
      setCheckbox({ ...checkbox, [e.target.value]: false })
    }
  }

  return (
    <div className="py-6 w-full">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="w-max flex xl:flex-row xl:items-end gap-4 flex-col">
          <PacientCard pacient={pacient} />
          <div className="flex gap-2 items-center">

            <div className="flex gap-1 items-center">
              <input type="checkbox" value="real_data"  onChange={handleChecked} className="h-4 w-4 ml-4" />
              <label className="text-lg text-end">Dado Real</label>
            </div>

            <div className="flex gap-1 items-center">
              <input type="checkbox" value="ml_data" checked={checkbox.ml_data} onChange={handleChecked} className="h-4 w-4 ml-4" />
              <label className="text-lg text-end">Dado Machine Learning</label>
            </div>

            <div className="flex gap-1 items-center">
              <input type="checkbox" value="annotations" onChange={handleChecked} className="h-4 w-4 ml-4" />
              <label className="text-lg text-end">Anotações</label>
            </div>
          </div>

        </div>
        <div className=" flex flex-col w-full lg:grid lg:grid-cols-2 gap-4">
          {/* <LineGraphCard dataSet={dataSets?dataSets[0]:null}/> */}
          {dataSets ? <>{Object.entries(dataSets)?.map(([, value], index) => <LineGraphCard key={index} dataSet={value} dataShow={checkbox} />)}
            {/* <LineGraphCard series={handleSeries()}/> */}
          </>
            : (<><LineGraphCard /><LineGraphCard /></>)}
        </div>
      </div>
    </div>
  );
}

export default PacientPage;