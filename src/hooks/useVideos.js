import { useState, useEffect } from "react";
import youtube, { baseParams } from "../apis/youtube";

const useVideos = (dafaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(dafaultSearchTerm);
  }, [dafaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: term,
      },
    });

    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideos;
