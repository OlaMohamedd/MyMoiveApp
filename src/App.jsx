import Header from './Component/Navbar/navbar.jsx'
import Login from './Component/Login/login.jsx'
import Signup from './Component/Sign-up/signup.jsx'
import TodoList from './Component/Todo/todo.jsx'
import Home from './Component/Home/home.jsx'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './Component/AppLayout/AppLayout.jsx'
import Details from './Component/Movies/Details.jsx'
import Notfound from './Component/Notfound/Notfound.jsx'
import Movies from './Component/Movies/Movies.jsx'
import Favorite from './Component/Favorite/Favorite.jsx'
import ListMovies from './Component/Movies/ListMovies.jsx'
import AddMovie from './Component/Movies/AddMovie.jsx'
import EditMovies from './Component/Movies/EditMovies.jsx'
import { Provider } from 'react-redux'
import store from './Store/Store'
import { LanguageProvider } from './Context/Language';
import { useState } from 'react'

const router = createBrowserRouter([
  {
   
    element: <AppLayout />,
    children: [
      { index: true, element: <Home/>},
      { path: '/home', element: <Home />},
      { path: '/login', element: <Login />},
      { path: "/signUp", element: <Signup />},
      { path: "/todo", element: <TodoList />},
      { path: "/details/:id", element: <Details/>},
      { path: "/movies",
       element: <Movies/>,
      children:[
        {index:true ,element:<ListMovies/>},
        {path:'add',element:<AddMovie/>},
        {path:'edit',element:<EditMovies />},
      ]
    },
      { path: "/favorite", element: <Favorite/>},
      { path: "*", element: <Notfound />},
    ]

  }
])
export default function App() {

const[changeLang,setChangeLang]=useState('English')


  return (
    <>
    <LanguageProvider  value={{changeLang,setChangeLang}}>
    <Provider store={store}><RouterProvider router={router} /></Provider>
    </LanguageProvider>
     
    </>
  )
}
