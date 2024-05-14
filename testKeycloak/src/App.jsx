
import LoggedIn from './component/LoggedIn';
import NotLoggedIn from './component/NotLoggedIn';
import useAuth from './hooks/useAuth';


function App() {
  const [isLogin, token] = useAuth();
  return isLogin ? <LoggedIn token={token} /> : <NotLoggedIn />;
}

export default App
