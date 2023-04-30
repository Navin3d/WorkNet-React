import React from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const [username, setUserName] = React.useState();
    const [password, setPassword] = React.useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:6969/auth/login", { username, password });
        console.log(res.data);
        if (res.status == 200) {
            localStorage.setItem("auth", new Boolean(res.data));
            navigate("/");
        }
    }
    return (
        <div><section>
            <div class="login-box">

                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div class="input-box">
                        <label>Aadhar Yen</label>
                        <span class="icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="text" onChange={(e) => { setUserName(e.target.value) }} value={username} required />
                    </div>

                    <div class="input-box">
                        <label>Password</label>
                        <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} required />
                    </div>

                    <div class="conform_forget">
                        <label><input type="checkbox" />
                            Confirm password</label>
                        <a href="#">Forget password</a>
                    </div>

                    <button type="submit">Login</button>
                    <div class="sign up">
                        <p>Don't have an account?
                            <a href="signup">sign up</a>
                        </p>
                    </div>
                </form>
            </div>
        </section>

            {/* <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}
        </div>
    )
}

export default Login