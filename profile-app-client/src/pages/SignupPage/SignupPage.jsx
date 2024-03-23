import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

const API_URL = "http://localhost:5005"

function SignupPage() {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        campus: "",
        course: ""
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }))
    }


    return (
        <div className="signuppage">

            <div className="form">

                <h1>Sign Up</h1>

                <form onSubmit="">

                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />

                    <label>Campus:</label>
                    <input
                        type="text"
                        name="campus"
                        value={campus}
                        onChange={handleInputChange}
                    />

                    <label>Course:</label>
                    <input
                        type="text"
                        name="course"
                        value={course}
                        onChange={handleInputChange}
                    />

                </form>
            </div>
            <div className="btn">

            </div>
        </div>
    )
}

export default SignupPage