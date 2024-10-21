
// import './App.css';
// import AddEmp from './Component/AddEmp';
// import Navbar from './Component/Navbar';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
 
// } from "react-router-dom";
// import Home from './Component/Home';
// import EditEmp from './Component/EditEmp';

// function App() {
//   return (
//     <div >
//       <Navbar/>
//       <Router>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/addEmp" element={<AddEmp />}></Route>
//         <Route path="/editEmp/:id" element={<EditEmp />}></Route>
//       </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import './App.css';
import AddEmp from './Component/AddEmp';
import Navbar from './Component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home';
import EditEmp from './Component/EditEmp';

function App() {
  return (
    <div >
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addEmp" element={<AddEmp />}></Route>
          <Route path="/editEmp/:id" element={<EditEmp />}></Route>
        </Routes>
      
    </div>
  );
}

export default App;

