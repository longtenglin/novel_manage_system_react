import Home from "./home/Home";
import Header from "./header/Header";
import Footer from "./footer/footer";
import './App.css';
import { Route, Link, Routes} from "react-router-dom";
import Novel from "./novel/novel";

function App() {
  return (
      <>
          <div className="App">
              <Header/>
              <Routes>
                      <Route exact path="/" element={<Home/>}/>
                      <Route path="novel" element={<Novel/>}/>
              </Routes>
              <Footer/>
          </div>
      </>
  )
}
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
