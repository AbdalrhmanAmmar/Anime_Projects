import { useEffect } from "react";
import Auth from "./Pages/authentication/Auth";

function App() {
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b6396ca23a4cec6bb3a48bec4942b25b"
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Auth />
      <h2>jello</h2>
    </>
  );
}

export default App;
