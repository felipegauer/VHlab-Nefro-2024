import ExampleContent from "../components/AppleStyleComponents/ExampleContent"
import TextImageSticky from "../components/AppleStyleComponents/TextImageSticky"


export default function AppleStylePage(){
    return <div className=" bg-neutral-100 text-neutral-900 w-[100vw]">

        {data.map((d)=>(
             <TextImageSticky
             url={d.url}
             header={d.header}
             subheader={d.subheader}
             >
                 <ExampleContent/>
             </TextImageSticky>
        ))}

       
        <div className="h-screen"/>
    </div>
}

const data = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1573588028698-f4759befb09a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        header:"Impossible is just an opinion",
        subheader:"Believe"
    },
    {
        id: 2,
        url:"https://images.unsplash.com/photo-1468730390451-2cd74fc670b5?q=80&w=1519&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        header:"Creativity is intelligence having fun",
        subheader:"Imagine"
    }
]