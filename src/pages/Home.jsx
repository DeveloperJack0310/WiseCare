import Carrossel from '../components/sliderHome.jsx'
import NavBar from '../components/NavBar.jsx'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Carrossel />
      <h1 className='title_main'>Encontre cuidadores!</h1>
      <Link to={"/"}><img src=".\src\assets\mr_rocha.gif" width={300} height={200} alt="" className="teste-img"/></Link>
    </div>
  )
}


export default Home