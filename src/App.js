import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Header from './components/Header/Header';
import Main from './layout/Main';
import Contacts from './components/Contacts/Contacts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        {path: '/contacts', element: <Contacts></Contacts>},
        { path: '/products', element: <Products></Products> }
      ]},
      { path: '/about', element: <About></About> },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
