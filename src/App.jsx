import { Component } from "react"
import {Container, Row, Col} from "react-bootstrap"
import Books from "./components/Books"
import BookForm from "./components/BookForm"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      books:[
        {
          title:"Man vs Woman",
          author: "Philys",
          genre: "Tragedy",
          summary: "Na waa ooo"
        },
        {
          title:"Codetrain Mistries",
          author: "Father Ben",
          genre: "Comedy",
          summary: "100DaysPfCode"
        },
        {
          title:"A day",
          author: "Robert",
          genre: "Science Fic",
          summary: "Too much"
        },
      ]
    }
  }

  getBooks = (data) =>{
    this.setState({
      books: [...this.state.books, data],
    });
  }

  render(){
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col md="3">
              <BookForm getbooks={this.getBooks} />
            </Col>
            <Col>
              <Books books={this.state.books} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App
