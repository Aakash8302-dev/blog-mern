import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import WriteScreen from './screens/WriteScreen'
import RegisterScreen from './screens/RegisterScreen'
import BlogScreen from './screens/BlogScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/login' component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/write" component={WriteScreen} />
        <Route path="/" component={HomeScreen}  exact/>
        <Route path="/api/blogs/:id" component={BlogScreen} />
      </main>
    </Router>
  );
}

export default App;
