import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <img src={movie.medium_cover_image} alt="" />
      <h1>{movie.title}</h1>
      <p>{movie.description_full}</p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
export default Detail;
