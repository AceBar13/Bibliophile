

import { useNavigate } from "react-router-dom";
import '../Collections/Collections.css';
import ProfileCards from "../../components/Cards/ProfileCards";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../auth";
import 'react-toastify/dist/ReactToastify.css';
import { store } from "../../fire";
import { db } from "../../fire";
import { onSnapshot } from "firebase/firestore";
import { addDoc, collection} from "firebase/firestore";
import { ref } from "firebase/storage";
import { uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Collections = () => {
   const [modal, setModal] = useState(false);
   const [bookName, setBookName] = useState('');
   const [bookPrice,setBookPrice] = useState(0);
   const [bookDesc, setBookDesc] = useState('');
   const [genre, setGenre] = useState('');
   const [stock,setStock] = useState(0);
   const [imageFile, setImageFile] = useState(null);
   const navigate = useNavigate();
   const {currentUser} = useContext(AuthContext);
   const [books,setBooks] = useState([]);
   const [searchValue,setSearchValue] = useState('');


   useEffect(()=>{
    const bookRef  = collection(db,'books');
    onSnapshot(bookRef,(snapshot)=>{
      const books = snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data(),
      }))
      setBooks(books);
    })
   
  },[])
  //console.log(books);


   const addBook = ()=>{

    

    const id = toast.loading("Your Book is being Uploaded...");

    const imgRef = ref(store,`images/${imageFile.name}`);
    uploadBytes(imgRef,imageFile).then((snapshot) =>{
        getDownloadURL(imgRef).then((url)=>{
            const imgUrl = url;

              const dataObject = {
                date: new Date(),
                bookName: bookName,
                bookDesc : bookDesc,
                bookPrice: bookPrice,
                imageUrl : imgUrl,
                genre: genre,
                stock: stock,
                shopId: currentUser.uid
              } 
        //    const docRef = doc(db,'blogs',`${currentUserId}/blogfolder/${new Date()}`)
       // const docRef = doc(db,'blogs',currentUserId);
       const docRef = collection(db,'books')
       addDoc(docRef,dataObject).then((userRef)=>{
        toast.update(id, { render: "Book Uploaded Successfully", type: "success", isLoading: false });
        navigate('/collections');
       }).catch((error)=>{
        alert(error.message);
       })
        
           /* setDoc(docRef,dataObject,{ merge: true }).then((userRef)=>{
              toast.update(id, { render: "Blog Uploaded Successfully", type: "success", isLoading: false });
              navigate('/blogs');
           }).catch((error)=>{
              
           })  */

        })
    }).catch((error)=>{
        alert(error.message);
    })
        

   }
   function renderFunction(books){
       return (<div className="prof-card-cont">

       <div className="prof-card-img">
             <img src={books.imageUrl}></img>
       </div>

       <div className="prof-details-cont">
           <div className='details-cont'>
           <h1>{books.bookName}</h1>
           
           <p>{books.bookDesc}</p>
           <h3>Price = {books.bookPrice}</h3>
           <h4>InStock = {books.stock}</h4>
           </div>
           <div>
               <button type="button">Delete</button>
               <button type="button">Edit</button>
           </div>
       </div>

   </div>)
   }
   const handleImageFile = (e) => {

    setImageFile(e.target.files[0]);
  }

   const toggleModal = ()=>{
      setModal(!modal);
   }

    return (

       <div className="inv-cont">

       {modal && (
        <div className="modal">
          <div  className="overlay"> 
          
          <div className="modal-content">
             <div className="model-content">   
          <label className="lab">
               Book Name:
                <input type="text" className="inv-input"  onChange={(e)=> setBookName(e.target.value)}/>
            </label>
            <label className = "lab" for="cars">Choose a Genre:
               <select name="genre-chooser" id="genre"  onChange={(e)=> setGenre(e.target.value)}>
                <option value="none" selected disabled hidden></option>
                      <option value="Action">Action</option>
                      <option value="Adventure">Adventure</option>
                       <option value="Sci-Fic">Sci-Fic</option>
                      <option value="Fantasy">Fantasy</option>
                      <option value="Horror">Horror</option>
                </select>
                </label>
            <label className="lab">
                Price:
                <input type="number"  className="inv-input" onChange={(e)=> setBookPrice(e.target.value)}/>
            </label>
            <label className="lab">
               In Stock:
                <input type="number"  className="inv-input" onChange={(e)=> setStock(e.target.value)}/>
            </label>
            <label className="lab">
            
                <textarea type="text"  rows="10" cols="35" placeholder="Book Description"  className="inv-input" onChange={(e)=> setBookDesc(e.target.value)}/>
            </label>
            <label className="lab"> Select Image For Your Book:
             <input type="file" className="chooser" accept="image/*" onChange={handleImageFile}  />
        </label>

            <button type="button"  className="package-button" onClick={addBook}>
               Add Book
            </button>
            <button type="button" onClick={toggleModal} className="package-button">
               Cancel
            </button>
          </div>
          </div>
          </div>
        </div>
      )}

        <div className="text-search-cont">
            <div>
            <h2>List Of Your Books</h2>
            </div>
            <div className="inv-side-box">
                <input className="inv-search-box" type="text" placeholder="Seach In Your Inventory" onChange={(e)=> setSearchValue(e.target.value)} ></input>
                <button className="inv-search-side-button" type="button" onClick={toggleModal}>Add Books</button>
            </div>
         
        </div>
        <br/>

        <div className="inv-cards-cont">
        {books.filter((books)=>{
                         if(searchValue == ""){
                             return books;
                          }else if(books.bookName.toLowerCase().includes(searchValue.toLowerCase())){
                             return books;
                         }
                   }).map(renderFunction)}
           
        </div>

       </div>
    );
}

export default Collections;