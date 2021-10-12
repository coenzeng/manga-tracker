import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import Counter from "./components/counter/Counter"
import { store } from './state/store'
import { Provider } from 'react-redux'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Coen's Reading List</h1>
          <BookList/>
          <AddBook/>
          <Counter></Counter>
        </div>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
