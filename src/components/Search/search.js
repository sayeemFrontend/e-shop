import React from 'react'
import classes from './search.module.css'
const Search = ({ placeholder, icon }) => {
   return (
      <div className={classes.searchBar + " d-flex align-items-center"}>
         <input type="text" placeholder={placeholder && placeholder} />
         {icon && <i class="fas fa-search fa-xs"></i>}
      </div>
   )
}

export default Search
