import React from 'react';
import './style/AlbumItem.css';

export default class AlbumItem extends React.Component {
    render() {
        var album = this.props.album;
        var  changeToListView = this.props. changeToListView;
        return (
            <div className="item_container">
                <div>
                    <img src={album.url} onClick={() => changeToListView(album.title)} alt="hallo" width="100%"></img>
                </div>
                <div className="title-container">
                    <h5>{album.title}</h5>
                </div>
            </div>
        );
    }
}