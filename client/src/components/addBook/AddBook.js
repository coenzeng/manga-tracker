import { graphql } from "@apollo/client/react/hoc";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../../queries/queries";
import { useState } from "react";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as compose from "lodash.flowright";

function AddBook(props) {

  const [setaddBookMutation, { data }] = useMutation(addBookMutation);

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, genre, authorId);

    await setaddBookMutation({
      variables: {
        name,
        genre,
        authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });

    //clear form values after submit 
    setName("");
    setGenre("");
    setAuthorId("");
   
  };
  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            
          }}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
      </div>
      <div className="field">
        <label>Author:</label>

        <select
          value={authorId}
          onChange={(e) => {
            setAuthorId(e.target.value);
          }}
        >
          <option>Select author</option>
          <DisplayAuthors {...props} />
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

function DisplayAuthors(props) {
  var data = props.getAuthorsQuery;
  //console.log(props.getAuthorsQuery);
  if (data.loading) {
    return <option disabled>Loading Authors</option>;
  } else {
    return data.authors.map((author) => {
      return (
        <option key={author.id} value={author.id}>
          {" "}
          {author.name}{" "}
        </option>
      );
    });
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" })
  //graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
