import React, { useState } from 'react'
import IngredientsList from './IngredientsList'
import ClaudeRecipe from './ClaudeRecipe'
import { getRecipeFromMistral } from '../ai'

const Main = () => {
    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipceShown] = useState(false)
    const [recipe, setRecipe] = useState()
    const handleShowRecipe = () => {
        setRecipceShown(prev => !prev)
    }

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(previousIngredients => [...previousIngredients, newIngredient])
    }

    async function getRecipe () {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }
    console.log(recipe)
    return (
        <main className='font-inter w-full px-24 flex flex-col  justify-center'>
            <form action={handleSubmit} className='flex justify-between items-center pt-8 gap-4 mb-8'>
                <input type="text" name='ingredient' className='shadow-md w-full rounded-md border-gray-300 border-2 py-1 px-2'/>
                <button className='py-2 px-4 bg-gray-900 text-white rounded-md w-4/12 min-w-[150px]'>+Add ingredient</button>
            </form>
            <IngredientsList ingredients={ingredients} getRecipe={getRecipe} handleShowRecipe={handleShowRecipe}/>
            {
                recipe && 
                <ClaudeRecipe recipe={recipe}/>
            }
        </main>
  )
}

export default Main