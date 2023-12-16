import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useState, useEffect, useRef} from 'react'

function useSearch (){
  const [search, updateSearch] = useState('')
  const [error, setError ] = useState(null)
  const isFirstInput = useRef(true)


useEffect(() => {
  if (isFirstInput.current ) {
    isFirstInput.current = search === ''
    return
  }

  if (search === '') {
    setError('No se puede buscar una pelicula vacia')
    return
  }
  
  setError(null)
}, [search] )

  return { search, updateSearch, error}
}


function App() {
  const { search, updateSearch, error} = useSearch()
  const { movies, getMovies} = useMovies({search})

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
    
  }
  
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix' />
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{ color: 'red'}}>{error}</p>}
      </header>

      <main>
      
          <Movies movies={movies} />
        
      </main>
    </div>
  )
}

export default App
