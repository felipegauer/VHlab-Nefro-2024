import { useContext, useEffect, useState } from "react";
import "../element.css";
import Loading from "../loading";
import { CheckBoxContent } from "../../Context/CheckboxContent";

function CheckBox(){

    const [roles, setRoles] = useState([]); //Todo: substituir pelas colunas do dataSet
    const {examSelected,setExamSelected, exams} = useContext(CheckBoxContent)
  
    useEffect(()=>{
      setRoles(Object.entries(exams).map(([key, value]) => ({ name: value }))
    );
      
    },[])

    const handler = (e) => {
        if(e.target.checked)
          setExamSelected([...examSelected, e.target.value]);
        else setExamSelected(examSelected.filter(exam => exam !== e.target.value));
        console.log(examSelected);
        
    }
    
    return(
  
        <>
            {
              roles?.length >0? (
                <>
                  {
                    roles.map((role, index) => (
                      <label key={index}>
                        <input type="checkbox" value={role.name} checked={examSelected.some((ex)=>ex === role.name)} onChange={handler}/>
                        {role.name}
                      </label>))
                  }
                </>
              )
               : <Loading/>
              
                
            }
        </>
    )
}

export default CheckBox