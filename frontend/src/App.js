import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/Login';
import NewsDetails from './components/NewsDetails';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/About';
import NewsList from './components/NewsList';
import NewsForm from './components/NewsForm';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Clubs from './components/Clubs';
import Education from './components/Education';
import Compus from './components/Compus';

function App() {
  return (
   <>
   <Router>
  <Header/>
 <Routes>

<Route exact path="/" element={<NewsList/> }></Route>
<Route  path='/news/:id' element={<NewsDetails/>}></Route>
<Route exact path='/contact' element={<Contact/>}></Route>
<Route exact path='/login' element={<Login/> }></Route>
<Route exact path='/About' element={<About/> }></Route>
<Route path="/add" element={<NewsForm/>}></Route> 
<Route path="/edit" element={<Edit/>}></Route>
<Route path="/delete" element={<Delete/>}></Route>
<Route path="/Clubs" element={<Clubs/>}></Route>
<Route path="/Education" element={<Education/>}></Route>
<Route path="/Compus" element={<Compus/>}></Route>
</Routes>
   <p>   </p>

   <Footer/>
   
   </Router>
  
   </>
  );
}

export default App;
