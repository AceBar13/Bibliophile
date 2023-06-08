
import Login_images from '../../images/login1.png';
import "./Signup.css";


const colors ={
    
    background: "#E0CEE7"
}

const Signup = () => {
    return (
        <section className='sign_up_page flex'>
            <div className='sign_up_form'>
            <h1> Sign up</h1>
             <p>Already have an account ? Login here</p>
            <h2> Name </h2> 
            <input type="text" placeholder="Enter your name here"/>
            <h3> Email id </h3> 
            <input type="text" placeholder="Enter your email id here"/>
            <h4> Password </h4> 
            <input type="text" placeholder="Enter your password"/> 
            <div>
            <input type="checkbox">
                 </input>
              <span>Remember me</span>
            </div>

            <div className='signup_button'>Sign Up </div>

            
            </div>

            <div className='signup_image flex flex-col'>
                <div>

                </div>
                <div>

            <img src={Login_images} className=" "/>
                </div>
            </div>

        </section>
    );
}

export default Signup;

{/* <>
        <div className=' signup-page flex justify-content-center'>
            <div className='sign_up_form'> 
        <h1> Sign up</h1> Already have an account ? Login here
            <h2> Name </h2> 
            <input type="text" placeholder="Enter your name here"/>
            <h3> Email id </h3> 
            <input type="text" placeholder="Enter your email id here"/>
            <h4> Password </h4> 
            <input type="text" placeholder="Enter your password"/> 
</div> 


<div className='image'> 
<img src={Login_images} className=" "/>
</div>

</div> */}