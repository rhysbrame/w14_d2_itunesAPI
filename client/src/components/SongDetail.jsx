import React from 'react';

class SongDetail extends React.Component {
  render(){
console.log(this.props.song)
    if (!this.props.song) return null;
console.log("details", this.props.song['im:artist'].label);
    return (
      <div>
        <h2>Artist: {this.props.song['im:artist'].label}</h2>
        <h2>Title: {this.props.song['im:name'].label}</h2>
        <h3>Genre: {this.props.song.category.attributes.label}</h3>
        <img src={this.props.song['im:image'][2].label} ></img>
        <h3>Song: {this.props.song.title.label}</h3>
        <audio controls="controls"
          source src={this.props.song.link[1].attributes.href} type="audio/mp4">
        </audio>
      </div>
    );
  }
}

export default SongDetail;
