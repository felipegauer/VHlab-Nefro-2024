import Select from 'react-select';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import PropTypes from 'prop-types';

const options = [
    { value: 'Vivo', label: 'Vivo' },
    { value: 'Óbito', label: 'Óbito' },
    { value: 'Todos', label: 'Todos' }
]

function PacientListParams({ setParams }) {

    const [idade, setIdade] = useState([18, 100]);
    const [desfecho, setDesfecho] = useState('Todos');

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
    return (
        <div className="py-4 flex gap-4 items-center justify-around">
            <div className='w-[200px] flex flex-col'>
                <h1>Idade</h1>
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

            <Select
                options={options}
                defaultValue={options[2]}
                onChange={(e) => setDesfecho(e.value)}
            />


            <button onClick={() => setParams({
                idade: idade,
                desfecho: desfecho,
            })} className='color-bg text-white py-2 px-4 rounded-lg hover:scale-105 transition-all'>Aplicar</button>
        </div>)
}



PacientListParams.propTypes = {
    setParams: PropTypes.func.isRequired,
};

export default PacientListParams;