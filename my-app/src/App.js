import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/Textform'
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<TextForm/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
        </Routes>
      </BrowserRouter>
{/*  
      React router
      <TextForm header="Edit the text..." />
      <About /> */}





    </>
  );
}
export default App;
