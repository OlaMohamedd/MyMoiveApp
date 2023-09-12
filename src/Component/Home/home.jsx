import React, { useContext ,useEffect} from 'react'
import { LanguageContext } from '../../Context/Language';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../../store/slices/movies';
export default function Home() {

  const { changeLang, setChangeLang } = useContext(LanguageContext)
  
      const toggleLanguage= ()=> {
      setChangeLang((changeLang=='English')?'عربي':'English')
      }

      const dispatch=     useDispatch()
      const movies=   useSelector((state)=>state.movies.movies)
      useEffect(()=>{

        dispatch(movieAction())
  
         },[])
         console.log(movies);
         
  return (
    <>
    <h1>Welcome To Netflix </h1>
<p>{changeLang}</p>

    <button className="btn btn-success" onClick={() => {
                toggleLanguage((changeLang=='English')?'عربي':'English')
            }}>Change Language</button>

    </>
  )
}
