// import { CarouselImg } from "../Components/Carouselmg";
import { Link } from "react-router-dom";


export default function HomePage() {
    // let imgs = [
    //     "https://oncoclinicas-assets-wordpress-prd.s3.amazonaws.com/wp-content/uploads/2021/12/39-nefrologia.jpg",
    //     "https://setorsaude.com.br/wp-content/uploads/2014/11/CDI-HOSPITAL-SAO-LUCAS-02.jpg",
    //     "https://wwwhospitalsaolucas.pucrs.br/media/resize/930x2000/pasta/1/65f2ae1c0e3d9.jpg?t=1710403102986",
    //     // "https://med.estrategia.com/portal/wp-content/uploads/2021/09/puc-rs-residencia-medica-1024x576.webp",

    // ]
    return (
        <div className=" h-full">
            {/* <div className="w-full h-[400px] m-auto">
                    <CarouselImg imgsSrc={imgs}/>
                    <CarouselImg/>
                </div> */}
                
            <div className="container mx-auto text-3xl h-full flex flex-col justify-center items-center ">
                {/* <img src={NefroRim} alt="" className="w-96" /> */}
                <Link to='/dataset' className="color-bg px-6 py-2 rounded-xl text-white">
                    DataSet
                </Link>


            </div>
        </div>

    )
}
