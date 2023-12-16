function ListofMovies ({ movies }) {
    return  (
        <ul className='movies'>
        {
          movies.map(movie => (
            <li className='movie' key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.image} alt={movie.Title} />
              </li>
          ))
        }
        </ul>
       )
}

function NoMoviesResults () {
    return (
        <p>no se encontraron peliculas para esta busqueda</p>
      )
}

export function Movies ({ movies }){
    const hasMovies =movies?.length > 0

    return (
        hasMovies
        ? <ListofMovies movies={movies} />
        : <NoMoviesResults />
    )
}