import { graphql } from '@apollo/client/react/hoc';
import { getBooksQuery, getBookQuery } from '../queries/queries'
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeBookDetails } from './bookDetails/bookDetailsSlice';
import * as compose from 'lodash.flowright';
//componets
import BookDetails from './bookDetails/BookDetails';

function BookList(props) {
    const [selected, setSelected] = useState(null)
    return (
      <div>
          <ul id="book-list">
            <DisplayBooks {...props} setSelected={setSelected}/>
        </ul>
        <BookDetails/>
      </div>
    );
  }
  
function DisplayBooks (props) {
    const dispatch = useDispatch()
    const [ getBookDetails, bookDetails] = useLazyQuery(getBookQuery)
  
    useEffect(() => {
        dispatch(changeBookDetails(bookDetails))
    })

    var data = props.data;
    if(data.loading){
        return(<div>Loading books...</div>);
    } else {
        return data.books.map(book => {
            return(
                <li key={book.id} 
                    onClick={() => {
                        props.setSelected(book.id)
                        getBookDetails({variables: {id: book.id}})
                    }}>{ book.name }</li>
            )
        })
    }
}
  
//export default graphql(getBooksQuery)(BookList);
export default compose(
    graphql(getBooksQuery),
)(BookList);