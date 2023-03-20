import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav>
            <hr></hr>
            <div className="banner">
                <h2>Artesan IA</h2>
                <p>We investigate the market so that you can focus on <span>what you truly care about</span></p>
                <div className="links">
                <div className="dropdown">
                    <p className="language">EN <span>▼</span></p>
                    <div className="lang-menu">
                    <Link href="/es">ES</Link>
                    <Link href="/ca">CA</Link>
                    </div>  
                </div>
                <Link to={'/'}>Home</Link>
                <Link to={'/demoinfo'}>Demo</Link>  
                </div>
            </div>
            <hr></hr>
        </nav>
    )
}

export default Navbar