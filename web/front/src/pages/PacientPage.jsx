import { useParams } from "react-router-dom";
import LineGraphCard from "../Components/graphsCards/LineGraphCard";
import PacientCard from "../Components/PacientCard";
import { useContext, useEffect, useState } from "react";
import Service from "../Service/backEnd";
import { ExamInfoContext } from "../Context/ExamsInfoContext";
import { UserContent } from "../Context/UserContent";

function PacientPage() {
  const [pacient, setPacient] = useState(null);
  const [dataSets, setDataSets] = useState(null);
  const [checkbox, setCheckbox] = useState({
    real_data: false,
    ml_data: true,
    annotations: true,
  });
  const {token} = useContext(UserContent)

  const { setExamsInfo } = useContext(ExamInfoContext);

  const { codigo } = useParams();
  const { dataset } = useParams();
  
  useEffect(() => {
    if(!token)window.location.href= "/login"
},[token])

  useEffect(() => {
    const getData = async () => {
      const data = await Service.get(`/api/pacient/${dataset}/${codigo}`,token);
      if (data.err) console.log(data.err);
      else {
        setPacient(data);
      }
    };

    const getDataSet = async () => {
      const data = await Service.get(`/api/pacient/exams/${dataset}/${codigo}`,token);
      if (data.err) console.log(data.err);
      else {
        setDataSets({ml:data.exams,real:data.exams_real?data.exams_real:data.exams});
      }
    };

    const getExamsInfo = async () => {
      const data = await Service.get(`/api/info/all`);
      if (data.err) console.log(data.err);
      else {
        setExamsInfo(data);
      }
    };

    getData();
    getDataSet();
    getExamsInfo();
  }, [codigo, dataset]);

  //Funcao para todos juntos
  // const handleSeries = ()=>{
  //   let series = []

  //   Object.entries(dataSets).map(([key, value]) => {
  //     series.push({name: value.name, data: value.data})
  //   })

  //   return series
  // }

  const handleChecked = (e) => {
    const { name, checked } = e.target;
    setCheckbox({ ...checkbox, [name]: checked });
  };

  return (
    <div className="py-6 w-full">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="w-max flex xl:flex-row xl:items-end gap-4 flex-col">
          <PacientCard pacient={pacient} />
          <form className="flex gap-2 items-center">
            <label className="flex gap-1 items-center text-lg text-end">
              {" "}
              <input
                type="checkbox"
                name="real_data"
                checked={checkbox.real_data}
                onChange={handleChecked}
                className="h-4 w-4 ml-4"
              />
              Dado Real
            </label>

            <label className="flex gap-1 items-center text-lg text-end">
              <input
                type="checkbox"
                name="ml_data"
                checked={checkbox.ml_data}
                onChange={handleChecked}
                className="h-4 w-4 ml-4"
              />
              Dado Machine Learning
            </label>

            <label className="flex gap-1 items-center text-lg text-end">
              <input
                type="checkbox"
                name="annotations"
                checked={checkbox.annotations}
                onChange={handleChecked}
                className="h-4 w-4 ml-4"
              />
              Anotações
            </label>
          </form>
        </div>

        <div className=" flex flex-col w-full lg:grid lg:grid-cols-2 gap-4">
          {/* <LineGraphCard dataSet={dataSets?dataSets[0]:null}/> */}
          {dataSets ? (
            <>
              {Object.entries(dataSets.real)?.map(([, value], index) => 
              (
                <LineGraphCard
                  key={index}
                  dataSet={{real:value, ml:dataSets.ml[index]}}
                  dataShow={checkbox}
                />
              )
              )}
              {/* <LineGraphCard series={handleSeries()}/> */}
            </>
          ) : (
            <>
              <LineGraphCard />
              <LineGraphCard />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PacientPage;
