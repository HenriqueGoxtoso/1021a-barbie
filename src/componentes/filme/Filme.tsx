import Imagem from "./../../assets/barbie.png"
import './Filme.css'
function Filme(){
    return(
        <div className="text-barbie">
            <h1>Barbie</h1>
            <p className="sinopse"></p>
            <img src={Imagem} alt="" />
        </div>
    )
}
export default Filme 
