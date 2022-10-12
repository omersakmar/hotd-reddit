import React from "react";
import axios from "axios";
import useSWR from "swr";
import "./Home.css";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const image_url = "https://image.tmdb.org/t/p/original";

const Home = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/tv/94997?api_key=${process.env.REACT_APP_API_KEY}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  let { name, last_episode_to_air, vote_average } = data;

  console.log(name);

  return (
    <div className="home">
      <div className="rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
        <img
          className="w-full bg-cover"
          src={image_url + last_episode_to_air.still_path}
          alt="house-of-the-dragon"
        />
        <div className="px-3 pb-2">
          <div className="pt-1">
            <div className="mb-2 mt-2 text-sm flex justify-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                LAST EPISODE
              </h5>
            </div>
          </div>
          <ol>
            <li key={last_episode_to_air.name} className="mb-2">
              <strong>Title: </strong>
              {last_episode_to_air.name}
            </li>
            <li key={last_episode_to_air.episode_number} className="mb-2">
              <strong>Episode No: </strong>
              {last_episode_to_air.episode_number}
            </li>
            <li key={last_episode_to_air.overview} className="mb-2">
              <strong>Summary: </strong>
              {last_episode_to_air.overview}
            </li>
            <li
              key={vote_average}
              className="
              mb-2"
            >
              <strong>Vote average:</strong>
              <span className="text-blue-800 text-md font-semibold mr-2 px-2.5 py-0.5 rounded dark:text-blue-800">
                {vote_average.toFixed(2)}
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
