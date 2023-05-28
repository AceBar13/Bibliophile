import React from 'react';
import {FaSearch} from "react-icons/fa";

import "./SearchForm.css";

const SearchForm = () => {
    return (
        <div className='search-form'> 
        <div className='container'>
         <div className='search-form-content'>
            <form className='search-form'>
                <div className='search-form-elem flex flex-sb bg-white'>
                    <input type="text" className='form-control' placeholder='SEARCH' />
                    <button type='submit' className='flex felx-c'>
                        <FaSearch className='text-purple' size= {40} />
                    </button>

                 </div>
              </form>
            </div>
        </div>

        </div>
    )
}
export default SearchForm