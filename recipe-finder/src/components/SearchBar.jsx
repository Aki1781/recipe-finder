import React from 'react'
import { useState } from 'react'

const SearchBar = () => {
    const [inputRecipe, setInputRecipe] = useState("")
  return (
    <div>
        <input className="bg-red-500 px-100 py-4 rounded-4xl"></input>
    </div>
  )
}

export default SearchBar