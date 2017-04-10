import React, { Component } from 'react';

class VideoListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    const title = this.props.video.snippet.title;

    return (
      <li className="list-group-item" 
        onClick={() => this.props.clickVideoItem(this.props.video)}>
          <div className="video-item media">
            <div className="media-left">
              <img className="media-object" src={imageUrl}/>
            </div>
            <div className="media-body">
              <div className="media-heading">{title}</div>
            </div>
          </div>
      </li>
    );
  }
}

export default VideoListItem;