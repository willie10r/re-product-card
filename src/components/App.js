
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import '../App.css';

// components
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const App = () => (

    <div className='grid-container'>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
    


);



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Edit  and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }

export default App;
