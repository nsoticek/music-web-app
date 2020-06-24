import React from 'react';

export default class SongsListItem extends React.Component {
    render() {
        const song = this.props.song;
        return(
            <div>
                <p>{song.title}</p>
            </div>
        );
    }
}
