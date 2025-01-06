import Markdown from 'react-markdown'

export default function ClaudeRecipe(props) {
    const markdown = props.recipe
    return (
        <section className='my-8'>
            
            <Markdown>
                {markdown}
            </Markdown>
        </section>
    )
}