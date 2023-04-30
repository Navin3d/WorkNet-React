import React from 'react'
import "./Signup.css"
function Signup()
 {
  return (
    <div>
        <div class ="split-screen">
            <div class="left">
             </div>
            <div class="right">
                <form>
                    <section class="copy">
                        <h2>SIGN UP</h2>
                    </section>
                          
                    <div class="input-container name">
                        <label for="fname"> Full name</label>
                        <input id="fname" name="fname" type="text"/>
                    </div> 
                    <div class="input-container email">
                        <label for="email"> Email</label> 
                        <input id="email" name="email" type="text"/>
                    </div>
                    <div class="input-container password">
                        <label for="password"> Password</label>
                        <input id="password" name="password"
                        placeholder="Must be atleast 6 characters" type="password"/>
                    
                    <i class ="far fa-eye-slash"></i>
                    </div>
                    <div class="input-container cta">
                        <label class="checkbox-container">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            sign up for email updates.
                        </label>
                    </div>
                    <button class="signup-btn" type="submit">sign up</button>
                    
                    
                        <div class="login-container">
                             <p>Already have an account?<a href="/login"><strong>log in</strong>
                            </a></p>
                        </div>
                    
                    
                </form>
            </div>
        </div></div>
  )
}

export default Signup