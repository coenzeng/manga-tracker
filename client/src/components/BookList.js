import { graphql } from '@apollo/client/react/hoc';
import { getBooksQuery } from '../queries/queries'
import { useState } from 'react'

//componets
import BookDetails from './BookDetails';

function BookList(props) {
    const [selected, setSelected] = useState(null)
    return (
      <div>

          <ul id="book-list">
            <DisplayBooks {...props} setSelected={setSelected}/>
        </ul>
        <BookDetails {...props} bookId={selected}/>
      </div>
    );
  }
  
  
function DisplayBooks (props) {
    var data = props.data;
    if(data.loading){
        return(<div>Loading books...</div>);
    } else {
        return data.books.map(book => {
            return(
                <li key={book.id} 
                    onClick={(e) => {
                        props.setSelected(book.id)
                    }}>{ book.name }</li>
                
            )
        })
    }
}
  
  export default graphql(getBooksQuery)(BookList);