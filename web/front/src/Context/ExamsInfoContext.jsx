import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ExamInfoContext = createContext();

const ExamInfoProvyder = ({ children }) => {
    const [examsInfo, setExamsInfo] = useState(null);
    return (
        <ExamInfoContext.Provider value={{ examsInfo, setExamsInfo}}>
            {children}
        </ExamInfoContext.Provider>
    );
};

ExamInfoProvyder.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ExamInfoContext, ExamInfoProvyder };