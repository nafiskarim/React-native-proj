import React, {Component} from 'react'
import { View ,Text } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  // how to handle state in 3 steps
  // 1. set default state
  // 2. tell compo to update by setState method
  // 3. make use of state
  state = { albums: [] }

  // anytime the app is rendered or loaded componentWillMount will execute.
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums : response.data }) )
  }

  renderAlbum() {
    return this.state.albums.map((album) => <AlbumDetail key={ album.title } album= {album} /> )
  }

  render() {
    console.log(this.state);
    return(
      <View >
        {this.renderAlbum()}
      </View>
    )
  }
}

export default AlbumList
