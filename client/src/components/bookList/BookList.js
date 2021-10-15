import { graphql } from "@apollo/client/react/hoc";
import { getBooksQuery, getBookQuery } from "../../queries/queries";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBookDetails } from "../bookDetails/bookDetailsSlice";
import { setBookList } from "./bookListSlice";

//components
import BookDetails from "../bookDetails/BookDetails";
import BookCard from "../bookCard/BookCard";

//css
import { Box, Image, Badge, Text, Stack, 
  useColorMode, Button, Flex, Spacer } 
  from "@chakra-ui/react";

function BookList() {
  const dispatch = useDispatch();
  const { data } = useQuery(getBooksQuery);
  console.log(data);

  useEffect(() => {
    dispatch(setBookList(data));
  });

  return (
    <div>
      <ul id="book-list">
        <DisplayBooks />
      </ul>
      <BookDetails />
    </div>
  );
}

function DisplayBooks() {
  const dispatch = useDispatch();
  const [getBookDetails, bookDetails] = useLazyQuery(getBookQuery);

  useEffect(() => {
    dispatch(setBookDetails(bookDetails));
  });

  //get bookList from redux state
  const bookListData = useSelector((state) => state.bookList.value);

  if (!bookListData) {
    return <div>Loading books...</div>;
  } else {
    return bookListData.books.map((book) => {
      return (
        <li
          key={book.id}
          onClick={() => {
            getBookDetails({ variables: { id: book.id } });
          }}
        >
          <BookCard name={book.name}/>
        </li>
      );
    });
  }
}

//export default graphql(getBooksQuery)(BookList);
export default BookList;
