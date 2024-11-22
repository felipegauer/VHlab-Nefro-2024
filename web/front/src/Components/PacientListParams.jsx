import Select from 'react-select';
import Slider from '@mui/material/Slider';
import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import Service from "../Service/backEnd"
import "react-datepicker/dist/react-datepicker.css";
import { DatasetContent } from '../Context/DatasetContent';

const options = [
    { value: 'Vivo', label: 'Vivo' },
    { value: 'Óbito', label: 'Óbito' },
    { value: 'Todos', label: 'Todos' }
]

function PacientListParams({ setParams }) {

    const [idade, setIdade] = useState([18, 100]);
    const [desfecho, setDesfecho] = useState('Todos');
    const [codigo, setCodigo] = useState('');
    const [date, setDate] = useState([new Date().setHours(0, 0, 0, 0),new Date().setHours(0, 0, 0, 0)]);

    const {name, infoDataSet} = useContext(DatasetContent)


    useEffect(()=>{
        const getData = async () => {
            // // const data = await Service.get(`/api/pacient/${name}/all`);
            // if (data.err)
            //     console.log(data.err);
            // else{
            //     // setStartDate(data.data)
            //     // setIdade()
            //     return
            // }     
        }
        if (infoDataSet) {
            setDate([new Date(infoDataSet.inicio), new Date(infoDataSet.fim)])
        }


        //getData()

    },[infoDataSet])

    const minDistance = 10;

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setIdade([Math.min(newValue[0], idade[1] - minDistance), idade[1]]);
        } else {
            setIdade([idade[0], Math.max(newValue[1], idade[0] + minDistance)]);
        }
    };

    const handleReset = () => {
        if (infoDataSet) setDate([new Date(infoDataSet.inicio), new Date(infoDataSet.fim)])
        else setDate([new Date().setHours(0, 0, 0, 0),new Date().setHours(0, 0, 0, 0)])

        setIdade([18, 100])


        setParams({
            idade: idade,
            desfecho: 'Todos',
            codigo: '',
            date: null
        })
    };

    return (
        <div className="py-4 flex gap-4 items-center justify-around">
            <div className='flex flex-col'>
                <h1 className='text-center'>Código</h1>
                <input className='border border-black rounded' onChange={(e)=> setCodigo(e.target.value)} />
            </div>
            
            <div className='w-[200px] flex flex-col'>
                <h1 className='text-center'>Idade</h1>
                <Slider
                    getAriaLabel={() => 'Idade'}
                    value={idade}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={() => idade}
                    min={18}
                    max={100}
                    disableSwap
                />
            </div>
        <div className='flex gap-6 justify-center items-center'>
            <div className='flex flex-col'>
                <h1 className='text-center'>Inicio</h1>
                <DatePicker
                selected={date[0]}
                onChange={(d) => setDate([d, date[1]])}
                dateFormat="dd/MM/yyyy"
                className='border border-black rounded w-[90px] '/>
            </div>

            <div className='flex flex-col'>
                <h1 className='text-center'>fim</h1>
                <DatePicker
                selected={date[1]}
                onChange={(d) => setDate([date[0], d])}
                dateFormat="dd/MM/yyyy"
                className='border border-black rounded w-[90px] '/>
            </div>
        
        </div>
            

            <Select
                options={options}
                defaultValue={options[2]}
                onChange={(e) => setDesfecho(e.value)}
                className='self-end'
            />

            <div className='flex gap-4 self-end'>
            <button onClick={() => setParams({
                idade: idade,
                desfecho: desfecho,
                codigo: codigo,
                date: date
            })} className='color-bg text-white py-2 px-4 rounded-lg hover:scale-105 transition-all'>Aplicar</button>

             <button onClick={handleReset} className='bg-red-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition-all'>Resetar</button>
            </div>
            
        </div>
    )
}



PacientListParams.propTypes = {
    setParams: PropTypes.func.isRequired,
};

export default PacientListParams;