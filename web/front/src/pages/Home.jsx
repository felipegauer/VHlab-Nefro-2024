import { useContext, useEffect } from "react";
import GraphPage from './GraphPage'
import PessoaGraphAll from '../Components/GraphVisu/PessoaGraph/PessoaGraphAll'
import Service from '../Service/backEnd'
import { CheckBoxContent } from "../Context/CheckboxContent";
import LineGraph from "../Components/graphs/LineGraph";

function Home() {

    const { setPersons, setExams} = useContext(CheckBoxContent)

    useEffect(() => {
        const getData = async ()=>{
            const data = await Service.get("/api/teste");
            if (data.err) 
                console.log(data.err);
            else
                setPersons(data);
        
                
        }

        const getExams = async ()=>{
            const data = await Service.get("/api/exam");
            if (data.err) 
                console.log(data.err);
            else
                setExams(data);
        }
        
        getData();
        getExams();
    }, []);


    return (
    <GraphPage>
        <PessoaGraphAll/>
    </GraphPage> 

    );
}

export default Home;