const IdeaList = ({ideas, title, handleDelete}) => {
    // console.log(handleDelete);
    // const ideas = props.ideas;
    //instead of assigning later we can use destructuring
    return ( 
        <div className="idea-list">
            <h1>{title}</h1>
            {
            ideas.map((idea) => (
                <div className="idea-preview" key={idea.id}>
                    <h1>{idea.title}</h1>
                    <p>{idea.body}</p>
                    <p>{idea.date}</p>

                    <button className = "delete-btn" onClick={()=>{
                        handleDelete(idea.id)
                    }}>Delete</button>
                </div>
            ))
        }
        </div>
     );
}
 
export default IdeaList;

// one other use of creating components like this
// the code can be reused and reused !