import { Link } from "react-router-dom"

function Home() {
    return (
        <>Minha Home

            <Link to={'/rick-and-morty'}>
                <button>
                    Navegar para API
                </button>
            </Link>

        </>
    )
}

export default Home