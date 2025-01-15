import { Outlet, Link } from "react-router-dom";


function App() {


  return (
    <section className="bg-blue-900 text-slate-50">
      <hearder className="flex justify-between px-32 py-6">
        <Link to={'/'} className="text-xl text-slate-50 border-slate-50">AVIS</Link>
        <nav>
          <ul>
            <li className="flex gap-3 items-center">
              <Link to={'/deposer-un-avis'} className="text-xl text-slate-50 border-slate-50">
                Nouvel avis
              </Link>
              
            </li>
            <li>
              <Link to={'/avis'} className="text-xl text-slate-50 border-slate-50">
                Liste des avis
              </Link>
              
            </li>
          </ul>
        </nav>
      </hearder>
      <Outlet />
    </section>
  )
}

export default App;
