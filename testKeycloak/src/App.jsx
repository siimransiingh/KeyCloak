
import LoggedIn from './component/LoggedIn';
import NotLoggedIn from './component/NotLoggedIn';
import useAuth from './hooks/useAuth';


function App() {
 const isLogin  = useAuth();
  return isLogin ? <LoggedIn /> : <NotLoggedIn />;
}

export default App
