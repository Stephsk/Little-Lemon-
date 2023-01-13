import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <body>
    <Header>
      <logo></logo>
<Nav>   </Nav>
    </Header>
    <Main>
      <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem...</p>
        </article>
        <article>
        <h1>Specials</h1>
        <h3>Greek Salad</h3>
        <h3>Bruchetta</h3>
        <h3>Lemon Desert</h3>
        </article>
        <article>
        <h2>Testimonials</h2>
        <h3>Rating</h3>
        <h3>Rating</h3>
        <h3>Rating</h3>
        <h3>Rating</h3>
        </article>
        <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Amet...</p>
        </article>
        <Footer>

        </Footer>

    </Main>
    <footer>

    </footer>
    </body>
  );
}

export default App;
