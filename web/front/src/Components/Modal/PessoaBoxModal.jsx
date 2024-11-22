import { useContext, useEffect, useState } from 'react';
import SearchCheckBox from '../SearchCheckBox';
import CheckBoxModal from '../CheckBox/CheckBoxModal';
import { CheckBoxContent } from '../../Context/CheckboxContent';



function PessoaBoxModal() {
  const { examSelected, setExamSelected, person, setPerson } = useContext(CheckBoxContent)


  const handleClean =() =>{
    setPerson(null)
    setExamSelected([])
  }

  const handleGerar = ()=>{
    //check person
    //check exams
    //navigate next page
  }

  return (<>
    <div className='flex_modal'>
      <div className='params'>
        <div>
          <h3 style={{ marginBottom: "1em" }}>Selecione uma Pessoa</h3>
          <SearchCheckBox isMulti={false} />
          {/* TODO: se a pessoa existir, pegar as informacoes dela pelo backEnd */}

        </div>
        <div>
          <h3 style={{ marginBottom: "1em" }}>Selecione os exames</h3>
          <CheckBoxModal />
        </div>
      </div>
      <div className='btn_divs btns'>
      <button className='btn_cancel' onClick={()=> handleClean()}>Cancelar</button>
      <button className='btn_graficos' onClick={handleGerar} >Gerar Gráfico</button>
      </div>
      
    </div>

  </>)

}

export default PessoaBoxModal;