import Header from "./components/Header"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import Project from "./pages/Project"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const client = new ApolloClient({
  uri: "http://localhost:5001/graphql",
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Project />} path="/projects/:id" />
              <Route element={<NotFound />} path="/*" />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  )
}

export default App
