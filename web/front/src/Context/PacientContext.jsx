import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const PacientContext = createContext();

const PacientProvyder = ({ children }) => {
    const [pacientList, setPacientList] = useState([]);
    const [examsInfo, setExamsInfo] = useState(null);
    return (
        <PacientContext.Provider value={{ pacientList, setPacientList, examsInfo, setExamsInfo}}>
            {children}
        </PacientContext.Provider>
    );
};

PacientProvyder.propTypes = {
    children: PropTypes.node.isRequired,
};

export { PacientContext, PacientProvyder };