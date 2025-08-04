
function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1184/1184131.png"
                            alt="Termômetro"
                            width="30"
                            height="30"
                            className="d-inline-block align-text-top me-2"
                        />
                        GERADOR ALEATÓRIO DE TEMPERATURA
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;