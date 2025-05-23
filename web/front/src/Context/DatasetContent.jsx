import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const DatasetContent = createContext();

const DatasetProvyder = ({ children }) => {
    const [name, setName] = useState("DBCleanPlusCompleted2");
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