import PropTypes from 'prop-types';


export default function Card({children ,className}) {
    
    return(
        <div className={`border rounded-md p-4 shadow-lg ${className}`}>
            <div className="relative h-full w-full">
                {children}
            </div>
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};