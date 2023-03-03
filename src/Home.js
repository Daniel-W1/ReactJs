import { useState, useEffect } from "react";
import IdeaList from "./idea-list";


// so now we are going to learn about how 
// to output a list of data that will change


// for each list item we need to give it a key
// key attribute is any atribute of an object that is unique in nature

// react uses the key attribute to keep track of each rendered list items


const Home = () => {

    const [ideas, setIdeas] = useState([
        {title: 'CP takeaways', body:'lorem ipsum....', id:1, date: new Date().toUTCString()},
        {title: 'New thing I learnt', body:'lorem ipsum....', id:2, date: new Date().toUTCString()},
        {title: 'My feelings', body:'lorem ipsum....', id:3, date: new Date().toUTCString()}
    ])

    const handleDelete = (id)=>{
        const filteredIdeas = ideas.filter((idea)=> idea.id !== id)
        setIdeas(filteredIdeas);
    }

    useEffect(()=>{
        console.log('use effect is running!');
    })



  return (
    <div className="home">
        <IdeaList ideas ={ideas} title = "All Ideas" handleDelete = {handleDelete}/>
        <hr />
        <IdeaList ideas ={ideas.filter((idea)=>{
            // filter by parity yay
            return idea.id % 2 === 1;
        })} title = "Odd ideas" handleDelete = {handleDelete}/>
    </div>
  );
}
 
// props is a method to pass data from one component to another
// even functions can passed to other components as a prop
export default Home;


// now let's learn about useeffect
// it a func that runs when ever the state changes

