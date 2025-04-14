import { NavLink, Outlet } from "react-router"



function App() {
  return (
    
    <div>
      <div className="relative">
      <div className="mockup-code w-full">
      <pre data-prefix="$" className="text-2xl"><code>npm i malware</code></pre>
      <pre data-prefix=">" className="text-warning text-2xl"><code>installing...</code></pre>
      <pre data-prefix=">" className="text-success text-2xl"><code>Added 25 files!</code></pre>
      <pre data-prefix=">" className="text-success text-2xl"><code>Malware started fetching</code></pre>
    </div>
    <p className=" absolute top-60 font-bold bg-gradient-to-br from-cyan-500 to bg-orange-300 text-2xl flex flex-col left"><progress className="progress w-56" value="70" max="100"></progress>Progressing, wait.</p>
    </div>
    
    <div className="flex justify-around mb-10 bg-amber-200 anc-container">
    <NavLink to="/"><button className="btn">Home</button></NavLink>
    <NavLink to="/navbar"><button className="btn">Navbar</button></NavLink>
    <NavLink to="/hero"><button className="btn">Hero</button></NavLink>
    <NavLink to="/users"><button className="btn">Users</button></NavLink>
    <NavLink to="/users2"><button className="btn">Users2</button></NavLink>
    <NavLink to="/posts"><button className="btn">Posts</button></NavLink>
    </div>
    <Outlet/>
    </div>
  )
}

export default App
