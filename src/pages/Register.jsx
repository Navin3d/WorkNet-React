import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const INITIAL_USER = {
    name: "",
    location: "",
    gender: "",
    type_of_worker: "",
    mobile_number: "",
    aadhar_id: "",
    password: ""
};
function Register() {
    const navigate = useNavigate();
    const [requestBody, setRequestBody] = useState(INITIAL_USER);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequestBody((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:6969/auth/register", requestBody);
        if (res.status == 200) {
            navigate("/");
        }
    }
    return (
        <div>
            <section>
                <div class="register-box">

                    <form onSubmit={handleSubmit}>
                        <h2>REGISTER</h2>
                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <input type="text" name="name" onChange={handleChange} value={requestBody.name} required />
                            <label>Name</label>

                        </div>
                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="id-card"></ion-icon>
                            </span>
                            <input type="Aadhar" name="aadhar_id" onChange={handleChange} value={requestBody.aadhar_id} required />
                            <label>Aadhar</label>
                        </div>

                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="call"></ion-icon>
                            </span>
                            <input type="password" name="password" onChange={handleChange} value={requestBody.password} required />
                            <label>Password</label>
                        </div>

                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="journal"></ion-icon>
                            </span>
                            <input type="text" name="type_of_worker" onChange={handleChange} value={requestBody.type_of_worker} required />
                            <label>Type of work</label>
                        </div>

                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="pin"></ion-icon>
                            </span>
                            <input type="location" name="location" onChange={handleChange} value={requestBody.location} required />
                            <label>Location</label>
                        </div>

                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="transgender-outline"></ion-icon>
                            </span>
                            <input type="text" name="gender" onChange={handleChange} value={requestBody.gender} required />
                            <label>Gender</label>
                        </div>

                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="call"></ion-icon>
                            </span>
                            <input type="password" name="mobile_number" onChange={handleChange} value={requestBody.mobile_number} required />
                            <label>Phone number</label>
                        </div>

                        <button type="submit">Register</button>
                        {/* <div class="popup" id="popup">
                <img src="404-tick.png"/>
                <h2>Thank You</h2>
                <p>Your details has been successfully submitted.thanks!</p>
                <button type="button"  onclick="closepopup()">OK</button>
            </div> */}
                        {/* <script>
                let popup=document.getElementById("popup");
                function openpopup(){
                    popup.classList.add("open-popup");
                }
                function closepopup(){
                    popup.classList.remove("close-popup");
                }
            </script> */}
                        <div class="register-link">
                            <p>Already have an account?
                                <a href="/login">Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </section>

            {/* <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script></div> */}
        </div>
    )
}

export default Register