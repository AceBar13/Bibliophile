import { useState } from 'react';
import Login_images from '../../images/login1.png';
import "./Signup.css";
import { db } from '../../fire';
import { auth } from '../../fire';
import { store } from '../../fire';
import {useNavigate} from "react-router-dom"
import {doc,setDoc} from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const colors ={
    
    background: "#E0CEE7"
}

const SignUpUser = () => {
    const [uname,setUName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const navigate = useNavigate();

    const handleClickTwo = ()=>{
        navigate('/signIn')
    }
    const handleImageFile = (e)=>{
        setImageFile(e.target.files[0]);
    }
    const registerUser=()=>{
       
        
        createUserWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
            const id = toast.loading("Registering User...Please Wait!!!");
       
           if(imageFile==null)
             return;
       
               const userId = userCredentials.user.uid;
               const docReference  = doc(db,'users',userId);
               
               const imgRef = ref(store,`images/${imageFile.name}`);
                uploadBytes(imgRef,imageFile).then((snapshot)=>{
                   getDownloadURL(imgRef).then((url)=>{
                       const data = { userName : uname, userEmail: email, userPassword: password,
                           profileImage: url}
                              setDoc(docReference, data).then((docRef)=>{
                              toast.update(id, { render: "User created successfully", type: "success", isLoading: false });
                              navigate('/')
                       }).catch((error)=>{
                          alert(error.message)
                       })
                   })
                })
        }).catch((error)=>{
           alert(error.message)
        })
    }
    return (
        <section className='sign_up_page flex'>
           
            <div className='sign_up_form'>
             <h1>Register Your Account</h1>
           
            <input className="name_inp" type="text" placeholder="Enter your name" onChange={(e)=> setUName(e.target.value)}/>
          
            <input className="email_inp" type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
         
            <input className="password_inp" type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/> 

            <input type="file" className="chooser" accept="image/*" onChange={handleImageFile} />
            <button type="button" onClick={handleClickTwo}>Already Have An Account? Sign In.</button>
           <button type="button" className='signup_button'onClick={registerUser}>Register</button>

            
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
    );
}

export default SignUpUser;