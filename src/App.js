import logo from './media/perroLogo.png';
import './styles/styles.css';
import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/Rhodesian.jpg';
function App() {
  return (
    <div className="App">
       <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="imagen" className="logo" />
            </li>
            <li>
                <button className="button mainButon">Nuevo post</button>
            </li>
            <li>
                <button className="button secundaryButon">Iniciar Sesión</button>
            </li>
            <li>
                <button className="button mainButon">Registro</button>
            </li>    
            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza"/>
                    <i className="fas fa-search button iconoBusqueda"></i>
                </div>
                
            </li>
        </ul>
    </header>
    <main>
        <section>
            <h1>Razas de Perros</h1>
            <ul className="breadCardContainer">
                
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={borderCollie} alt="Border collie"/>
                    </div>
                    <span className= "breedTitle">Border Collie</span> 
                </li>
                <li className="breedCard"> <div className="contenedorImagen">
                    <img src={rhodesian} alt="Rhodesian"/>
                </div>
               <span className= "breedTitle">Rhodesian</span>
            </li>
            </ul>
        </section>
        <section>
            
        </section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
