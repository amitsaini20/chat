
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Join from './component/join/join';
import Chat from './component/Chat/Chat';



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Join />}></Route>
          <Route path="/chat" element={<Chat/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
