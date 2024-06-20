import { ImEnvelop } from "react-icons/im";
import { ImBug } from "react-icons/im";
import { ImBullhorn } from "react-icons/im";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar"

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="contacts_container">
        <div>
          <h2>Contato</h2>
          <ImEnvelop id="contactIcon1" />
        </div>
        <div>
          <h2>Reporte de bug</h2>
          <ImBug id="contactIcon2" />
        </div>
        <div>
          <h2>Denúncias</h2>
          <ImBullhorn id="contactIcon3" />
        </div>
      </div>
      <Link to={"/"}><img src=".\src\assets\mr_rocha.gif" width={300} height={200} alt="" className="teste-img"/></Link>
    </div>
  )
}

export default Contact