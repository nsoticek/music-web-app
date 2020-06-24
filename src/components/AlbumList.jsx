import React from 'react';
import AlbumListItem from './AlbumListItem';

export default class AlbumList extends React.Component {
    render() {
        const albums = this.props.albums;
        var openedAlbum = this.props.openedAlbum;
        return (
            <div>
                {albums.map((album, key) => {
                    return <div key={"albumList" + key}><AlbumListItem album={album} openedAlbum={openedAlbum} /></div>
                })}
            </div>
        );
    }
}