import PropTypes from 'prop-types';

export default function SkeletonInfo({className}) {
    return(
        <div className={`rounded-md my-4 ${className}`}>
            <div className=" flex flex-row gap-6 justify-start animate-pulse">
                <div className='h-24 w-24 p-2 '>
                    <div className="bg-gray-300 h-16  rounded-full "/>
                </div>
                
                <div className="flex flex-col w-full pb-4 justify-center">
                    <div className="h-4 self-stretch bg-gray-300 mb-4 rounded-full animate-pulse"/>
                    <div className="h-4 bg-gray-300 rounded-full animate-pulse"/>
                </div>
            </div>
                
                
        </div>
    )
}

SkeletonInfo.propTypes = {
    className: PropTypes.string,
}