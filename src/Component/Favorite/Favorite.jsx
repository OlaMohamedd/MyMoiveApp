import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { REMOVE_ITEM } from '../../Store/slices/favorite';
import './favorite.css'
import { useDispatch} from 'react-redux';
import { FaHeart } from "react-icons/fa";


function Favorite() {
 
  const favorites = useSelector(state => state.favorites.favorites);
  return (
    <>
    
    <div className="container">
            <h2>❤ Wish list ❤</h2>
            <div  className="result-card">
                {favorites.map((movie) => (
                    <div key={movie.id}>
                        <div className='mx-1 mt-5 poster-wrapper'>
                           
                                <Card.Img
                                    variant="top"
                                    className='img-fluid'
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                />
                        
                            <Card.Body>
                               
                                <Card.Title className='titell' style={{color:'black',fontWeight:'bold'}} to={`/details/${movie.id}`}>{movie.title}</Card.Title>
                               
                                <Card.Text className='release-date'>{movie.release_date}</Card.Text>

                                {/* <div onClick={() => handleRemove(movie)}>  <FaHeart size={30} color='#b71c1c' /></div> */}
                            </Card.Body>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    
    
    </>
  )
}

export default Favorite