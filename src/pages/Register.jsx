import React from 'react'
import './Register.css'

function Register() {
  return (
    <div>
        <section>
    <div class="register-box">
        
        <form action="">
            <h2>REGISTER</h2>
            <div class="reg-box">
                <span class="icon">
                    <ion-icon name="person"></ion-icon>
                </span>
                <input type="text" required/>
                <label>Name</label>
                     
            </div> 
            <div class="reg-box">
                 <span class="icon">
                    <ion-icon name="id-card"></ion-icon>
                 </span>   
                <input type="Aadhar" required/>
                <label>Aadhar</label>
                 
            </div>
           
            <div class="reg-box">
                <span class="icon">
                    <ion-icon name="journal"></ion-icon>
                </span>
                <input type="text" required/>
                <label>Type of work</label>
                
            </div> 
            <div class="reg-box">
                <span class="icon">
                    <ion-icon name="pin"></ion-icon>
                </span>
                <input type="location" required/>
                <label>Location</label>
                
            </div> 
            
            <div class="reg-box">
                <span class="icon">
                    <ion-icon name="transgender-outline"></ion-icon>
                </span>
                <input type="text" required/>
                <label>Gender</label>
                
            </div> 

           

            <div class="reg-box">
                <span class="icon">
                    <ion-icon name="call"></ion-icon>
                </span>
                <input type="password" required/>
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