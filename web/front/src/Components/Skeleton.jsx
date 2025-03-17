import { ChartPieIcon } from "@heroicons/react/24/solid"


export default function Skeleton({className, src,srcClass}) {
    return (
        <div className={`border rounded-md p-4 shadow-lg ${className}`}>
             <div className="relative h-full bg-gray-300 flex justify-center items-center animate-pulse">
                {src? <img src={src} className={srcClass?srcClass:"h-24"} alt=""/> :
                <ChartPieIcon className="h-24 text-gray-500"/>}
             </div>
        </div>
    )
}
