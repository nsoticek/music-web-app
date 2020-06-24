import React from 'react';
import './App.css';
import Header from './components/Header';
import Album from './components/Album';
import AlbumList from './components/AlbumList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: false,
      albums: [
        { title: "Album 2", url: "./images/album2.jpg", isOpened: false, songs: [{ title: "New Song 1" }, { title: "New Song 2" }, { title: "New Song 3" }, { title: "New Song 4" }] },
        { title: "Album 3", url: "./images/album3.jpg", isOpened: false, songs: [{ title: "New Song 1" }, { title: "New Song 2" }, { title: "New Song 3" }] },
        { title: "Album 4", url: "./images/album4.jpg", isOpened: false, songs: [{ title: "New Song 1" }, { title: "New Song 2" }, { title: "New Song 3" }] },
        { title: "Album 5", url: "./images/album5.jpg", isOpened: false, songs: [{ title: "New Song 1" }, { title: "New Song 2" }, { title: "New Song 3" }] },
        { title: "Album 6", url: "./images/album6.jpg", isOpened: false, songs: [{ title: "New Song 1" }, { title: "New Song 2" }, { title: "New Song 3" }] },
      ]
    }
  }

  changeToListView = (title) => {
    this.toggle();
    this.openedAlbum(title);
  }

  toggle = () => {
    if (this.state.listView) {
      this.setState({ listView: false });
    } else {
      this.setState({ listView: true });
    }
  }

  openedAlbum = (title) => {
    console.log(title);
    for (let i = 0; i < this.state.albums.length; i++) {
      if (title == this.state.albums[i].title) {
        const album = this.state.albums[i];
        if (album.isOpened) {
          album.isOpened = false;
        } else {
          album.isOpened = true;
        }
        this.setState({ albums: [...this.state.albums] });
      }
    }
  }

  render() {
    const albums = this.state.albums;
    return (
      <div className="App">
        <Header toggle={this.toggle} />
        {!this.state.listView && <div><Album albums={albums} changeToListView={this.changeToListView} /></div>}
        {this.state.listView && <div><AlbumList albums={albums} openedAlbum={this.openedAlbum} /></div>}
      </div>
    );
  }
}