import Card from "./Card";

const CardGrid = ({ movies }) => {
  return (
    <div className="grid">
      {movies.map((movie) =><Card key={movie.episode_id} film={movie} />)}
    </div>
  );
};

export default CardGrid;
