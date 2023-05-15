
const Card = ({film}) =>{
    return(
        <div className='film-wrapper'>
        <div className='film-top'>
          <div className='film' key={film.id}>
            <h2 className='title'>{film.title}</h2>
            <p className='date'>
            {new Date(film.release_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="truncate">{film.opening_crawl}</p>
          </div>
        </div>
        <div className='link'> <a href="#" target="_blank">More Info</a></div>
      </div>
    )
}

export default Card;