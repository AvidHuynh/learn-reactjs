import React from "react";
import PropTypes from "prop-types";
import "./styles.scss"

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div className="album-item">
      <div>
        <img
          className="album-item__thumbnail"
          src={album.thumbnailURL}
          alt={album.name}
        ></img>
      </div>
      <p>{album.name}</p>
      <h3>{album.singer}</h3>
    </div>
  );
}

export default Album;
