import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


import './LoginPage.css'

const API_URL = "http://localhost:5005"

function LoginPage(props) {

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const [errorMessage, setErrorMessage] = useState(undefined)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }))
    }

    const handleLoginSubmit = e => {
        e.preventDefault()

        const requestBody = { username, password }

        axios
            .post(`${API_URL}/auth/login`, requestBody)
            .then((response) => {
                navigate("/")
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return (
        <div className="loginpage">
            <section className="form-section">

                <h1>Log In</h1>

                <form onSubmit={handleLoginSubmit}>

                    <label>Username</label>
                    <input
                        type="text"
                        name='username'
                        value={userData.username}
                        onChange={handleInputChange}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name='password'
                        value={userData.password}
                        onChange={handleInputChange}
                    />

                </form>

                <p>If you don´t have an account yet, you can create an account
                    <Link to={"/signup"}>  here</Link>
                </p>
            </section>

            <section className="btn-section">
                <div className="title">
                    <h1>Hello!</h1>
                    <h2>Awesome to have you at IronProfile again!</h2>
                </div>
                <div className="btn">
                    <p>If you sign up, you agree with all our terms and conditions where we can do whatver we want with the data!</p>
                    <Link to={"/"}><button>Log In</button></Link>
                </div>
            </section>
        </div>
    )
}

export default LoginPage