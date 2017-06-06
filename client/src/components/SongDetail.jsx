import React from 'react';

class SongDetail extends React.Component {
  render(){
console.log(this.props.song)
    if (!this.props.song) return null;
    return (
      <div>
        <h3>Song: {this.props.song.title.label}</h3>
        <h3>Genre: {this.props.song.category.attributes.label}</h3>
        <h3>tryout: {this.props.song.category.attributes['im:id']}</h3>
      </div>
    );
  }
}

export default SongDetail;
