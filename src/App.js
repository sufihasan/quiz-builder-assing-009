import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Compenents/Home/Home';
import Main from './Compenents/Main/Main';
import Topics from './Compenents/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/topics',
          element: <Topics></Topics>
        }
      ]
    }

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
