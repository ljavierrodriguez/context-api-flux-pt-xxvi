import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Context } from '../store/appContext';
import { ThemeContext } from '../store/DarkModeContext';

const Home = () => {

    const { theme, setTheme } = useContext(ThemeContext); // ThemeContext.Consumer
    const { store, actions } = useContext(Context); // Context.Consumer

    return (
        <section id="home" className={theme}>
            <nav class={"navbar navbar-expand-lg " + ( theme === 'light' ? "navbar-dark bg-dark" : "navbar-light bg-light")}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    { store.name } { store.lastname }
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">Usando Context</h1>
                    </div>
                    <div className="col-md-12 text-center">
                        <button className={"btn btn-" + (theme === 'light' ? 'dark' : 'light')} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </button>
                    </div>
                    <div className="col-md-12 py-3">
                        <h3>Listado de Tareas:</h3>
                        <ul className="list-group my-4">
                            {
                                !!store.tasks &&
                                store.tasks.map((task, index) => {
                                    return (
                                        <li key={index} className='list-group-item'>
                                            {task}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <h3>Listado de Usuarios:</h3>
                        <ul className="list-group my-4">
                            {
                                !!store.users &&
                                store.users.map((user, index) => {
                                    return (
                                        <li key={index} className='list-group-item'>
                                            {user.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <button className="btn btn-primary" onClick={actions?.saludo}>
                            Saludo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;