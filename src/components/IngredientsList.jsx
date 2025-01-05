export default function IngredientsList(props) {

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list mb-7" aria-live="polite">
                {
                    props.ingredients.map((ingredient, index) => {
                        return (
                            <li key={index}>{ingredient}</li>
                        )
                    })
                }
            </ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div className='bg-gray-200 rounded-md w-fit p-10 flex'>
                    <div>
                        <h3 className='text-2xl font-bold pb-4'>Ready for a recipe?</h3>
                        <p className='text-gray-600 text-lg'>Generate a recipe from your list of ingredients.</p>
                    </div>
                <button onClick={props.handleShowRecipe} className='bg-red-400 py-2 px-3 rounded-md text-white h-1/3 w-1/3 self-center mx-auto'>Get a recipe</button>
                </div>
            </div>}
        </section>
    )
}