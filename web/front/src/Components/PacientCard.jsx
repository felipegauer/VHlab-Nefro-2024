import Card from "./Card";
import Female from "../assets/femalePacient.svg"
import Male from "../assets/malePacient.svg"
import SkeletonInfo from "./SkeletonInfo";
import PropTypes from "prop-types"

export default function PacientCard({ pacient }) {
    
    return !pacient ? <SkeletonInfo className="w-[500px]" /> : (<Card className='w-auto'>
        <div className="flex flex-row gap-8 p-2 w-max">
            <div>
                <img src={pacient.sexo == "Feminino" ? Female : Male} alt="Paciente" className={`md:w-24 md:h-24 w-12 ${pacient.desfecho =="Vivo"?"":"grayscale"}`} />
            </div>
            <div className="flex flex-col justify-center gap-1 md:text-lg text-sm">
                <div className="flex flex-row gap-4 ">
                    <h2 className="font-bold">Código: <span className="font-normal">{pacient.codigo}</span></h2>
                    <h2 className="font-bold">Sexo: <span className="font-normal">{pacient.sexo}</span></h2>
                    <h2 className="font-bold">Idade: <span className="font-normal">{pacient.idade}</span></h2>
                </div>
                <div className="flex flex-row gap-4">
                    <h2 className="font-bold">Tratamento: <span className="font-normal">{pacient.range} meses</span></h2>
                    <h2 className="font-bold">Desfecho: <span className="font-normal">{pacient.desfecho}</span></h2>

                </div>

            </div>
        </div>
    </Card>)
}


PacientCard.propTypes = {
    pacient: PropTypes.shape({
        sexo: PropTypes.string,
        codigo: PropTypes.string,
        idade: PropTypes.number,
        range: PropTypes.number,
        desfecho: PropTypes.string
    })
};
    