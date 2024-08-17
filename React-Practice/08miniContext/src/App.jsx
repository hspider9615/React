import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <h1>
        "React with Codex || Spider Last's Play: The Ultimate Spider's Gaming"
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
