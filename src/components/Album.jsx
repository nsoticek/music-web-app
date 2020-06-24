import React from 'react';
import AlbumItem from './AlbumItem'
import './style/Album.css';

export default class Album extends React.Component {
    render(){
        const albums = this.props.albums;
        var changeToListView = this.props. changeToListView;
        return(
            <div className="album_container">
                {albums.map((album, key) => {
                    return <div key={"album" + key}><AlbumItem album={album} changeToListView={changeToListView} /></div>
                })}
            </div>
        );
    }
}