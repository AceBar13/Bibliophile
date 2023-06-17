import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../auth';
import BooksCard from '../../components/Cards/BooksCard';



const Home = () => {
    const { currentUser } = useContext(AuthContext)

    console.log(currentUser);

  
   return (
        
        <div>
            <div>
              <h1>Top Picks</h1>
            </div>
           <BooksCard/>
           <div>
            <h1>Recommendation For You...</h1>
           </div>
        </div>
       
        
    ) 

   
}
export default Home;