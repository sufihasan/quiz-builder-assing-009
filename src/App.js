import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Compenents/Blog/Blog';
import Home from './Compenents/Home/Home';
import Main from './Compenents/Main/Main';
import Quizshow from './Compenents/Quizshow/Quizshow';
import Statistics from './Compenents/Statistics/Statistics';
import Topics from './Compenents/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),

          element: <Topics></Topics>
        },
        {
          path: '/statistics',

          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quizshow/:quizId',
          loader: async ({ params }) => {
            // console.log(params.quizId);

            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <Quizshow></Quizshow>
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
