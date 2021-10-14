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

//css imports
import { Button, ButtonGroup } from "@chakra-ui/react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
} from "@chakra-ui/react"

function AddBook(props) {

  const [setaddBookMutation, { data }] = useMutation(addBookMutation);

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const handleSubmit = async () => {
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
   
      <FormControl isRequired id="book" onSubmit={handleSubmit}>
        <FormLabel >Book name: </FormLabel>
        <Input 
                placeholder="One Piece"
                value={name}
                 onChange={(e) => {
                  setName(e.target.value);
                }}/>
        <FormHelperText>The name of the book.</FormHelperText>

        <FormLabel>Genre: </FormLabel>
        <Input 
              placeholder="Shonen" 
                  value={genre}
                 onChange={(e) => {
                  setGenre(e.target.value);
                }}/>
        <FormHelperText>The genre.</FormHelperText>
        <FormLabel>Author:</FormLabel>
            <Select 
                placeholder="Select author"
                value={authorId}
                onChange={(e) => {
                  setAuthorId(e.target.value);
                }}
            >
    
              <DisplayAuthors {...props} />
            </Select>
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              onClick={() => {
                handleSubmit();
              }}
          >
            Submit
          </Button>
       </FormControl>
  );
}

function DisplayAuthors() {
  const authorListData = useSelector((state) => state.authorList.value);

  if (authorListData && authorListData.authors)  {
    return authorListData.authors.map((author) => {
      return (
        <option key={author.id} value={author.id}>
          {" "}
          {author.name}{" "}
        </option>
      );
    });

  } else {
    return <option disabled>Loading Authors...</option>;
  }
  
}

export default AddBook;
//export default compose(
  //graphql(getAuthorsQuery, { name: "getAuthorsQuery" })
  //graphql(addBookMutation, { name: "addBookMutation" })
//)(AddBook);
