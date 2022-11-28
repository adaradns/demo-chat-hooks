import logo from './logo.svg';
import './App.css';
import Chat from './components/chat/Chat';
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import UserDetail from './components/users/UserDetail';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
