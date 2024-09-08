import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./pages/Layout"
import { Menu } from "./pages/Menu"
import { Login } from "./pages/Login"
import { ContactUs } from "./pages/ContactUs"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    // <div className="App">

    //   <header className="App-header">
        
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <Quotes />
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://reselect.js.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Reselect
    //       </a>
    //     </span>
    //   </header>
    // </div>
  )
}

export default App
