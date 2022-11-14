import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './layout/Main';
import Contacts from './components/Contacts/Contacts';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/contacts', element: <Contacts></Contacts> },
        { path: '/products', element: <Products></Products> },
        { path: '/users', loader: () => fetch('https://jsonplaceholder.typicode.com/users'), element: <Users></Users> },
        {
          path: '/user/:userId',
          loader: async ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          element: <UserDetails></UserDetails>
        }
      ]
    },
    { path: '/about', element: <About></About> },
    { path: '*', element: <h1>This route doesn't exists</h1> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
