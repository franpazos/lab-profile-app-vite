import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

import './SignupPage.css'

const API_URL = "http://localhost:5005"

function SignupPage(props) {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        campus: "",
        course: ""
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

    const handleSignUpSubmit = e => {
        e.preventDefault()

        console.log("Clicked")

        const requestBody = {
            username: userData.username,
            password: userData.password,
            campus: userData.campus,
            course: userData.course
        }

        axios
            .post(`${API_URL}/auth/signup`, requestBody)
            .then(() => navigate('/login'))
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return (
        <div className="signup-page">

            <section className="form-section">

                <h1>Sign Up</h1>

                <form onSubmit={handleSignUpSubmit}>

                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />

                    <label>Campus:</label>
                    <input
                        type="text"
                        name="campus"
                        value={userData.campus}
                        onChange={handleInputChange}
                    />

                    <label>Course:</label>
                    <input
                        type="text"
                        name="course"
                        value={userData.course}
                        onChange={handleInputChange}
                    />

                    <div className="btn">
                        <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data</p>
                        <button type="submit">Create the account</button>
                    </div>
                </form>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

            </section>

            <section className="btn-section">
                <div className="title">
                    <h1>Hello!!!</h1>
                    <h2>Welcome to IronProfile!</h2>
                </div>
            </section>
        </div>
    )
}

export default SignupPage