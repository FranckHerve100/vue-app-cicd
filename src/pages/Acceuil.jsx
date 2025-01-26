import {Link} from "react-router-dom"

function Acceuil () {
    return (
        <div className="container flex flex-col h-screen justify-center items-center">
            <h1 className="text-2xl">Merci de deposer votre Avis</h1>
            <Link to={'/deposer-un-avis'} className="text-xl text-red-500 border-b border-green-500">
                Nouvel avis
            </Link>
        </div>
    )
    
}
export default Acceuil;