import { useEffect, useState } from "react";
import LineGraphCard from "../Components/graphsCards/LineGraphCard";
import PieGraphCard from "../Components/graphsCards/PieGraphCard";
import Service from "../Service/backEnd";


function GraphPage() {

  const [data,setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
        const data = await Service.get(`/api/getDeadAndAlive`);
        if (data.err)
            console.log(data.err);
        else {
            setData(data);
        }

    }

   
    getData();
}, [])


  return (
    <div className="container mx-auto flex flex-col gap-4">
      <div className=" flex flex-col md:flex-row gap-2">
        <LineGraphCard />
        <PieGraphCard dataset={data?data:null} />
      </div>
    </div>

  )
}


export default GraphPage;