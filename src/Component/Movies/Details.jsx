import React from 'react';
import { useEffect, useState } from 'react';
import Config from '../../Config/instance';
import { Link, useParams } from 'react-router-dom';

export default function Details() {
	var { id } = useParams();
	const [movie, setMovie] = useState({});

	useEffect(function () {
		Config.get(`/movie/${id}`, { params: { limit: 6 } })
			.then((res) => {
				// console.log(res.data);
				setMovie(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	});
	return (
		<>
			<div className="container d-flex justify-content-center ">
				<div className="card mb-3 mt-5 ms-3" style={{ maxWidth: '1300px' }}>
					<div className="row">
						<div className="col-md-4 ">
							<img
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								className="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title fs-5">{movie.title}</h5>
								<p className="card-text ">{movie.overview}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button className="btn btn-dark text-white bg-danger  ">
				<Link to="/movies" style={{ textDecoration: 'none' ,color:'white' ,fontWeight:'bold'}}>
					Back To Movies
				</Link>
			</button>
		</>
	);
}
