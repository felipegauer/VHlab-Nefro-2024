import Male from "../assets/malePacient.svg"
import Female from "../assets//femalePacient.svg"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import SkeletonInfo from "./SkeletonInfo"
import Info from "../assets/info.svg"
import Service from "../Service/backEnd"
import { PacientContext } from "../Context/PacientContext"
import { DatasetContent } from "../Context/DatasetContent"
import PacientListParams from "./PacientListParams"
import { UserContent } from "../Context/UserContent"


export default function PacientList() {

    const {pacientList, setPacientList} = useContext(PacientContext)
    const [loading, SetLoading] = useState(true)
    const [params,setParams] = useState({
        idade: [18, 100],
        desfecho: 'Todos',
        codigo: '',
        date: null
    })
    const {name} = useContext(DatasetContent)
    const {token}  = useContext(UserContent)


    useEffect(() => {
        if(!token)window.location.href= "/login"
    },[token])

    useEffect(() => {
        const getData = async () => {
            SetLoading(true)
            const data = await Service.get(`/api/pacient/${name}/all`,token);
            if (data.err)
                console.log(data.err);
            else{
                setPacientList(data)
                SetLoading(false)
            }     
        }

        if (pacientList.length > 0){
            SetLoading(false)
            return
        }
        getData()


    }, [pacientList, setPacientList,name])

    //TODO: SKELENTON LIST
    return <div className="container mx-auto flex flex-col h-full pb-10">
        <PacientListParams  setParams={setParams}/>
        {loading?<SkeletonInfo className={"w-full"} src={Info} />:(
        <div className="p-2 rounded-lg border overflow-auto">
            
            <ul role="list" className="divide-y divide-gray-200 ">
            {pacientList?.map(p =>{
                if (p.idade < params.idade[0] || p.idade > params.idade[1]) return null
                if (params.desfecho != 'Todos' && p.desfecho != params.desfecho) return null
                if (params.codigo != '' && !p.codigo.includes(params.codigo)) return null
                
                if (params.date != null && (params.date[0] > new Date(p.inicio) || params.date[1] < new Date(p.inicio))) return null

                return (
                <li key={p.codigo} > {/*className="odd:bg-white even:bg-gray-50"*/}
                    <Link className="flex justify-between gap-x-6 py-5 text-lg transition-all transform hover:scale-[0.99] delay-0" to={`/paciente/${name}/${p.codigo}`}>
                        <div className="flex min-w-0 gap-x-4 ">
                            <img className={`h-12 w-12 flex-none rounded-full bg-gray-50 ${p.desfecho == "Vivo" ? "" : "grayscale"}`} src={p.sexo == "Masculino" ? Male : Female} alt="" />
                            <div className="min-w-0 flex-auto">
                                <p className=" font-semibold leading-6 text-gray-900">{p.codigo}</p>
                                <p className="mt-1 truncate text-base leading-5 text-gray-500">{p.range} meses de tratamento</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="leading-6  text-gray-900">{p.desfecho}</p>
                            <p className="mt-1 text-base leading-5 text-gray-500">{p.idade} anos</p>
                        </div>
                    </Link>

                </li>)
            
            })}
        </ul>
        </div>
        
        )}
    </div>
}

{/* <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Dries Vincent</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">dries.vincent@example.com</p>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">Business Relations</p>
                    <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                        </div>
                        <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                </div>
            </li>
            <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Lindsay Walton</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">lindsay.walton@example.com</p>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">Front-end Developer</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
                </div>
            </li>
            <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Courtney Henry</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">courtney.henry@example.com</p>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">Designer</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
                </div>
            </li>
            <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Tom Cook</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">tom.cook@example.com</p>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">Director of Product</p>
                    <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                        </div>
                        <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                </div>
            </li> */}