import { graphql } from '@apollo/client/react/hoc';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'
import { useState } from 'react'
import * as compose from 'lodash.flowright';

function AddBook(props) { 
    
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, genre, authorId)
        props.addBookMutation({
            variables: {
                name,
                genre,
                authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        });
    
    }
    return ( 
        <form id="add-book" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Book name:</label>
                    <input 
                        type="text" 
                        onChange={(e) => {
                            setName(e.target.value);
                            
                        }}    
                    />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input 
                        type="text"
                        onChange={(e) => {
                            setGenre(e.target.value);
                        }}    
                    />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select           
                        onChange={(e) => {
                            setAuthorId(e.target.value);
                        }}   
                    >
                        <option>Select author</option>
                        <DisplayAuthors {...props}/>
                    </select>
                </div>
                <button>+</button>

        </form>
    )
}

function DisplayAuthors(props){
    var data = props.getAuthorsQuery;
    console.log(props.getAuthorsQuery)
    if (data.loading){
        return (<option disabled>Loading Authors</option>)
    } else {
        return data.authors.map(author => {
            return (<option key={author.id} value= {author.id}> {author.name} </option>)
        })
    }
}






export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);