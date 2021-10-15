//import { graphql } from "@apollo/client/react/hoc";
import { getAuthorsQuery } from "../../queries/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuthorList } from "./authorListSlice";

function AuthorList() {
  const dispatch = useDispatch();
  const { data } = useQuery(getAuthorsQuery);
  console.log(data);

  useEffect(() => {
    dispatch(setAuthorList(data));
  });

  return (
    <div>
      <ul>
        <DisplayAuthors />
      </ul>
    </div>
  );
}

function DisplayAuthors() {
  //const dispatch = useDispatch();
  //const [getBookDetails, bookDetails] = useLazyQuery(getBookQuery);

  //useEffect(() => {
  //    dispatch(setBookDetails(bookDetails));
  //});

  //get bookList from redux state
  const authorListData = useSelector((state) => state.authorList.value);

  if (!authorListData) {
    return <div>Loading books...</div>;
  } else {
    return authorListData.authors.map((book) => {
      return (
        <li
          key={book.id}
          onClick={() => {
            //getBookDetails({ variables: { id: book.id } });
          }}
        >
          {book.name}
        </li>
      );
    });
  }
}

export default AuthorList;

//export default compose(
//graphql(getAuthorsQuery, { name: "getAuthorsQuery" })
//graphql(addBookMutation, { name: "addBookMutation" })
//)(AddBook);
