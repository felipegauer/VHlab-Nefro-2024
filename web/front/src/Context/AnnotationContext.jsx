import { createContext, useState } from 'react';
import PropTypes from 'prop-types';



const AnnotationContext = createContext();

const AnnotationProvyder = ( { children }) =>{
    const [annotations, setAnnotations] = useState({});

    return (
        <AnnotationContext.Provider value={{annotations,setAnnotations}}>
            {children}
        </AnnotationContext.Provider>
    );
}

export {AnnotationContext, AnnotationProvyder};