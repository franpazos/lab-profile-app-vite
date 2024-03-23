import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <div className="homepage">
            <div className="text">
                <h1>Iron Profile</h1>
                <p>Today we will create an app with authorization, adding some cool styles!</p>
            </div>
            <div className="buttons">
                <Link to={'/signup'}><button>Sign Up</button></Link>
                <Link to={'/login'}><button>Log In</button></Link>
            </div>
        </div>
    )
}

export default Homepage 