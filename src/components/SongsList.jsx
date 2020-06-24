import React from 'react';
import SongsListItem from './SongsListItem';

export default class SongsList extends React.Component {
    render() {
        const album = this.props.album;
        return(
            <div>
                {album.songs.map((song, key) => {
                    return <div key={"song" + key}><SongsListItem song={song} /></div>
                })}
            </div>
        );
    }
}