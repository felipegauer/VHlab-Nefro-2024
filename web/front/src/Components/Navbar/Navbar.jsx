
import vhlavb from '../assets/vhlabLogo.png';
import ModalMenu from '../Modal/ModalMenu';
import PessoaBoxModal from '../Modal/PessoaBoxModal';

function Navbar(){
    return(
        <div className="navbar">
            <div className='logo'>
                <img src={vhlavb} width={"180px"}alt="" />
                <h1>+ Med PUCRS</h1>
            </div>
            <ModalMenu className='test'>
                <PessoaBoxModal/>
            </ModalMenu>
        </div>
    )
}

export default Navbar;