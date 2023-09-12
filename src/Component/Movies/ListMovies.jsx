import React, { useEffect, useState } from 'react'
import Config from '../../Config/instance'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../Store/slices/favorite';

export default function ListMovies() {

    var [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        MoviesPage(currentPage);
    }, [currentPage]);

    const MoviesPage = (page) => {
        Config.get(`/movie/popular?page=${page}`)
            .then((res) => {
                setMovies(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favorites);
    const isFavorite = (movieId) => favorites.some(movie => movie.id === movieId);

    const toggleFavorite = (movie) => {
        if (isFavorite(movie.id)) {
            dispatch(removeFavorite(movie.id));
        } else {
            dispatch(addFavorite(movie));
        }
    };



    return (
        <>
            <div className="container d-flex justify-content-center ms-5">
                <Row xs={0} md={2} className="g-5">
                    {movies.map((movie) => (
                        <Col key={movie.id} className='g-5'>
                            <Card className='mx-4 mt-3'>
                                <Card.Img variant="top" className='img-fluid h-50' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title> <Link className='movieCard' style={{ color: 'black', fontWeight: 'bold' }} to={`/details/${movie.id}`}>{movie.title}</Link></Card.Title>
                                    <Card.Text>{movie.release_date}</Card.Text>
                                    {/* <FaHeart size={30} color='#b71c1c' className="favorite-icon" onClick={() => addToFavorites(movie)} /> */}
                                    <div onClick={() => toggleFavorite(movie)}>
                                        {isFavorite(movie.id) ? <BsHeartFill color='#b71c1c' size={30} /> : <BsHeart color='#b71c1c' size={30} />}
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="container d-flex justify-content-center m-4">
                <div className="pagination my-4">
                    <button className="btn btn-danger" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                    <button className="btn btn-danger" onClick={() => handlePageChange(1)}>1</button>
                    <button className="btn btn-danger" onClick={() => handlePageChange(2)}>2</button>
                    <button className="btn btn-danger" onClick={() => handlePageChange(3)}>3</button>
                    <button className="btn btn-danger" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= 39752}>Next</button>
                </div>

            </div>
        </>
    )
}
