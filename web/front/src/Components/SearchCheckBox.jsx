import {useContext, useEffect, useRef, useState} from 'react';
import Select from 'react-select';
import { CheckBoxContent } from '../Context/CheckboxContent';

function SearchCheckBox({isMulti}) {
    const ref = useRef()
    const {person, setPerson, persons} = useContext(CheckBoxContent)
    const [options, setOptions] = useState([])

    

    useEffect(() => {
      if(persons)
        setOptions(persons.map((person,index) => {
          return { value: index+1, label: person.codigo }}))
    }, [])

    useEffect(() => {
      setOptions(persons.map((person,index) => {
          return { value: index+1, label: person.codigo }}))
    },[persons])

    const handleChange = (selectedOption) => {
      setPerson(selectedOption ? selectedOption.value > 0 ? selectedOption.label : null:null);
      
      
  };

  useEffect(() => {
    if(!person)
      ref.current.setValue( {value:0,label:"Selecione uma pessoa"})
  }, [person])


    return (
      <div style={{width:"25em"}}>
          <Select
          defaultValue={person?options.find((op)=>op.label === person):{value:0,label:"Selecione uma pessoa"}}
          isMulti = {isMulti?true:false}
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          isLoading={persons.length === 0}
          onChange={(e) => handleChange(e)}
          ref={ref}
        />
      </div>
        
      );
}11
    

export default SearchCheckBox;