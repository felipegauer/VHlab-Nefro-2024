import { useParams } from "react-router-dom";
import LineGraphCard from "../Components/graphsCards/LineGraphCard";
import PacientCard from "../Components/PacientCard";
import { useContext, useEffect, useState } from "react";
import Service from "../Service/backEnd";
import { ExamInfoContext } from "../Context/ExamsInfoContext";
import * as XLSX from "xlsx";

function CustomPacientPage() {
  const [pacient, setPacient] = useState({
    codigo: "00000000",
    dataset: "Teste",
    desfecho: "Vivo",
    fim: "2015-11-01T00:00:00.000Z",
    idade: 38,
    inicio: "2014-09-01T00:00:00.000Z",
    range: 15,
    sexo: "Masculino",
  });
  const [dataSets, setDataSets] = useState(null);
  const [annotations, setAnnotations] = useState(true);

  const { setExamsInfo } = useContext(ExamInfoContext);

  
  useEffect(() => {
    const getExamsInfo = async () => {
      const data = await Service.get(`/api/info/all`);
      if (data.err) console.log(data.err);
      else {
        setExamsInfo(data);
      }
    };

    getExamsInfo();
  }, []);

const handleFile = (e) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(sheet);
        const columns = XLSX.utils.sheet_to_json(sheet, { header: 1 })[0];
        const exams = [];
        let y = 2021;
        const d = new Date()
        d.setFullYear(y,0,1)

        try {
            columns.forEach((column) => {
                
                if (!(column === "Mês/Ano")){
                    
                    let obj = {
                        name: column,
                        data: []
                    }
                
                    json.forEach((element) => {
                        let obj2 ={
                            x: d.toDateString(),
                            y: element[column]
                        }
                        obj.data.push(obj2)
                        y++
                        d.setFullYear(y,0,1)
                        
                    });
                    exams.push(obj)
                    y=2021
                    d.setFullYear(y,0,1)
                    
                }
    
            });
            
            setDataSets({real:exams,ml:exams})
            
    
        } catch (error) {
            console.log(error)
        }

        

        // json.forEach((element) => {
        //     columns.forEach((column) => {
                
                
        //         if (!exams[column]) {
        //             exams[column] = [];
        //         }
        //         exams[column].push(element[column]);
        //     });
        // });
        // console.log(exams)
    };
    
}


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
                checked={annotations}
                onChange={() => setAnnotations(!annotations)}
                className="h-4 w-4 ml-4"
              />
              Anotações

            </label>

            <input 
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFile} />
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
                  dataShow={{annotations:annotations,real_data:false,ml_data:true}}
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

export default CustomPacientPage;
