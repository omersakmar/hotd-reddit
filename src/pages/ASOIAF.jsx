import React from "react";
import axios from "axios";
import useSWR from "swr";
import HouseOfTheDragonLogo from "../images/house-of-the-dragon.png";
const reddit_link = "https://www.reddit.com/";
const fetcher = (url) => axios.get(url).then((res) => res.data.data.children);

const ASOIAF = () => {
  const { data, error } = useSWR(
    "https://www.reddit.com/r/asoiaf/hot.json",
    fetcher
  );
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <section className="min-h-screen body-font text-gray-600">
      <div className="container mx-auto px-5 py-10">
        <div className="-m-8 flex flex-wrap">
          {data.map((item) => {
            return (
              <div className="w-full p-4 md:w-1/2 lg:w-1/4">
                <a className="relative block h-48 overflow-hidden rounded">
                  <img
                    alt="post-url"
                    className="block h-full w-full object-contain object-center cursor-pointer"
                    src={
                      item.data.url_overridden_by_dest
                        ? item.data.url_overridden_by_dest
                        : HouseOfTheDragonLogo
                    }
                  />
                </a>
                <div className="mt-4">
                  <span class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    /r/{item.data.subreddit}
                  </span>
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    {item.data.title}
                  </h2>
                  <a
                    href={reddit_link + item.data.permalink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      class="inline-flex items-center px-5 py-2 mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Original post
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ASOIAF;
