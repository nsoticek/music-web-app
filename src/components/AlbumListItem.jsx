import React from 'react';
import './style/AlbumListItem.css';
import SongsList from './SongsList';

export default class AlbumListItem extends React.Component {
    render() {
        const album = this.props.album;
        var openedAlbum = this.props.openedAlbum;
        return (
            <div>
                <div className="album-list-container">
                    <div className="img-container">
                        <img src={album.url}></img>
                    </div>
                    <div className="info-container">
                        <h3>{album.title}</h3>
                        <p>Hier könnte deine Beschreibung stehen!</p>
                    </div>
                    <div className="button-container">
                        <button onClick={() => openedAlbum(album.title)}>Songs zum Album</button>
                    </div>
                </div>
                {album.isOpened && <div><SongsList album={album} /></div>}
            </div>
        );
    }
}