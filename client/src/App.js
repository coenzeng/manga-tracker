
//components
import Header from "./components/header/Header";
import BookList from "./components/bookList/BookList";
import AuthorList from "./components/authorList/AuthorList";
import AddBook from "./components/addBook/AddBook";
import Counter from "./components/counter/Counter";
import AddBookModal from "./components/addBook/AddBookModal";

import { store } from "./state/store";
import { Provider } from "react-redux";
import { ChakraProvider } from '@chakra-ui/react'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ChakraProvider>
        <div className="App">
          <Header/>
          <BookList />
          <AuthorList/>
          <AddBookModal/>
          <Counter></Counter>
        </div>
        </ChakraProvider>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
