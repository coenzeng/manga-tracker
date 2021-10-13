import { graphql } from "@apollo/client/react/hoc";
import { getBookQuery } from "../../queries/queries";
import { useSelector, useDispatch } from "react-redux";

function BookDetails() {
  //console.log(props)
  const bookDetails = useSelector((state) => state.bookDetails.value);

  if (bookDetails && bookDetails.data) {
    const { book } = bookDetails.data;
    return (
      <div id="book-details">
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All books by this author:</p>
        <ul className="other-books">
          {book.author.books.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return <div id="book-details">No book selected...</div>;
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId,
      },
    };
  },
})(BookDetails);
