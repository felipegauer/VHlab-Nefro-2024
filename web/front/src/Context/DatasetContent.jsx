import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const DatasetContent = createContext();

const DatasetProvyder = ({ children }) => {
    const [name, setName] = useState("patients_synthetic");
    const [infoDataSet, setInfoDataSet] = useState(null);
    
    return (
        <DatasetContent.Provider value={{name,setName,infoDataSet,setInfoDataSet}}>
            {children}
        </DatasetContent.Provider>
    );
};
DatasetProvyder.propTypes = {
    children: PropTypes.node.isRequired,
};

export { DatasetContent, DatasetProvyder };