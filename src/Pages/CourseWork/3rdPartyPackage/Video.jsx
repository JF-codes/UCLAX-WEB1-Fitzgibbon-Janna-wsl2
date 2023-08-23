import styled from "styled-components";

// 3rd Party Library React YouTube
import React from "react";
import YouTube from "react-youtube";
// youtube video link https://www.youtube.com/watch?v=6skcgBvorDk
const Video = () => {
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return <YouTube videoId="6skcgBvorDk" opt={opts} />;
};
export default Video;

//6skcgBvorDk
