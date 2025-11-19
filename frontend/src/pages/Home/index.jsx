import { Link } from "react-router-dom"
import './styles.css'

function Home() {
    return (
        <>
            <h2>Página inicial</h2>

            <Link to={'/users'}>
                <button>
                    Navegar para API
                </button>
            </Link>

        </>
    )
}

export default Home