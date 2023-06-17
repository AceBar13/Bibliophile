import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
import { auth } from "../../fire";
import { signInWithEmailAndPassword } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import Login_images from '../../images/login1.png';

const SignIn = ()=>{

   const [email, setEmail]  = useState('');
   const [password,setPassword] = useState('');
   const navigate = useNavigate();

   const handleClickTwo = ()=>{
    navigate('/signup');
   }
   const handleClickThree = ()=>{
    navigate('/signUp-user')
   }
   const authenticate = ()=>{
    const id = toast.loading("Signing You In ... Please wait");
    signInWithEmailAndPassword(auth,email,password).then((userDetails)=>{
        navigate('/')
  }).catch((error)=>{
      const err = error.message;
      alert(err);
  })

   }
return (
    <section className='sign_up_page flex'>
           
    <div className='sign_up_form'>
     <h1>Sign In</h1>
   
    
  
    <input className="email_inp" type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
 
    <input className="password_inp" type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/> 

    <button type="button" onClick={handleClickTwo}>Dont have an Account? Register as a shop.</button>
    <button type="button" onClick={handleClickThree}>Dont have an Account? Register as a user</button>
   
   <button type="button" className='signup_button'onClick={authenticate}>Sign In</button>
   

    
    </div>

    <div className='signup_image flex flex-col'>
        <div>

        </div>
        <div>

    <img src={Login_images} className=" "/>
        </div>
    </div>
    <ToastContainer />
    
</section>
)
}
export default SignIn