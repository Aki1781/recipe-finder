import React from 'react'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen">

            <div className="mb-20">
                <h1 className="italic">Find Your <span className="text-purple-300">Recipe</span> Today</h1>
                <p className="text-lg mt-4">Discover delicious recipes tailored to your taste and dietary preferences. Start your culinary adventure now!</p>
            </div>

            <div>
                <SearchBar />
            </div>

        </div>
    </div>
  )
}

export default Home