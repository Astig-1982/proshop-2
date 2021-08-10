import './App.css';

import { BrowserRouter, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Header from './components/header.component';
import Footer from './components/footer.component';
import ProductScreen from './pages/product-page.component';

import HomeScreen from './pages/home-page.component';

function App() {
  return (
    <div className="App"> 
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

// <Route path='/product/:id' component={ProductScreen} /> :id will be the id passed from Product component 

export default App;
