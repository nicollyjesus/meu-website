import './App.css';
import Pagina from './components/pagina/Pagina';

function App() {
    return (
        <>
            <header className="header">
                <h1 className="h1-header">Nicolly</h1>
                <nav>
                    <ul className="ul-header">
                        <li className="li-header">
                            <a href="#pagina" className="a-header">
                                Página Inicial
                            </a>
                        </li>
                        <li className="li-header">
                            <a href="#" className="a-header">
                                Objetivos
                            </a>
                        </li>
                        <li className="li-header">
                            <a href="#" className="a-header">
                                Projetos
                            </a>
                        </li>
                        <li className="li-header">
                            <a href="#" className="a-header">
                                Habilidades
                            </a>
                        </li>
                        <li className="li-header">
                            <a href="#" className="a-header">
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="section-pagina" id='pagina'>
                <Pagina />
            </section>
        </>
    );
}

export default App;
