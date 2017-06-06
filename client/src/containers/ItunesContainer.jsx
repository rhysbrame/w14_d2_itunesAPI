import React from 'react';
import SongSelector from '../components/SongSelector';
// import CountryDetail from '../components/CountryDetail';

class ItunesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null
    };
    this.setSelectedSong = this.setSelectedSong.bind(this);
  }

  render(){
    return (
      <div>
        <h2>iTunes Container</h2>
        <SongSelector songs={this.state.songs} onSelectSong={this.setSelectedSong}/>
      </div>
    );
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener('load', () => {
      if (request.status !== 200) return;

      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      console.log('got data!!',data.feed.entry)
      this.setState({
        songs: data.feed.entry
      });
    });
    request.send();
  }

  setSelectedSong(song) {
    this.setState({selectedSong: song})
  };

}

export default ItunesContainer;