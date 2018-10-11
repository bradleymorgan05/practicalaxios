import React from "react";
import axios from "axios";

class Youtube extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      videos: []
    };
    this.searchYoutube = this.searchYoutube.bind(this);
  }

  searchYoutube(search) {
    console.log("axios GET " + search);
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          key: "AIzaSyDkve5_pyCw-Q98xKUnVdHLFZpUH1IopbY",
          part: "snippet",
          q: search,
          maxResults: 5,
          type: "video",
          videoEmbeddable: "true"
        }
      })
      .then(({ data }) => {
        this.setState({ videos: data.items });
      });
  }

  render() {
    return (
      <div>
        <div>Search (Open console)</div>
        <input
          type="text"
          name="name"
          value={this.state.search}
          onChange={event => {
            this.setState({ search: event.target.value }, () => {
              this.searchYoutube(this.state.search);
            });
          }}
        />
        {this.state.videos.map(video => {
          return (
            <div key={video.id.videoId}>
              <img src={video.snippet.thumbnails.default.url} />
              {video.snippet.title}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Youtube;
