import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Cuidador from "../components/Cuidador";
import { VscAccount } from "react-icons/vsc";
import '../App.css';

const Cuidadores = () => {
    return (
        <>
            <NavBar />
            <section className="cuidadores-section">
                <div className="cuidadores-div">
                    <VscAccount className="icon-large"/>    
                    <div>
                        <Cuidador nome={"José dos Santos"} age={"25"} xp={"2"} localidade={"Santos"}/>
                        <Link to="/perfil/jose">
                            <button className="ver-perfil-btn">Ver Perfil</button>
                        </Link>
                    </div>
                </div>
                <div className="cuidadores-div">
                    <VscAccount className="icon-large"/>
                    <div>
                        <Cuidador nome={"Maria"} age={"38"} xp={"4"} localidade={"Peruibe"} />
                        <Link to="/perfil/maria">
                            <button className="ver-perfil-btn">Ver Perfil</button>
                        </Link>
                    </div>
                </div>
                <div className="cuidadores-div">
                    <VscAccount className="icon-large"/>  
                    <div>
                        <Cuidador nome={"Marcos"} age={"29"} xp={"3"} localidade={"Guarujá"}/>
                        <Link to="/perfil/marcos">
                            <button className="ver-perfil-btn">Ver Perfil</button>
                        </Link>
                    </div>
                </div>
                <div className="cuidadores-div">
                    <VscAccount className="icon-large"/>
                    <div>
                        <Cuidador nome={"João"} age={"45"} xp={"10"} localidade={"Cubatão"}/>
                        <Link to="/perfil/joao">
                            <button className="ver-perfil-btn">Ver Perfil</button>
                        </Link>
                    </div>
                </div>
            </section>
            <Link to="/">
                <img src=".\src\assets\mr_rocha.gif" width={300} height={200} alt="" className="cuidadores-img"/>
            </Link>
        </>
    );
}

export default Cuidadores;


