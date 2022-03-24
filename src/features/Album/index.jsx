import React from "react";
import PropTypes from "prop-types";
import AlbumList from './components/AlbumList/index';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
      {
        id: 1,
        name: "Mùa Thu Năm Ấy",
        singer: "Erik, Thái Vũ",
        thumbnailURL:
          "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/6/c/2/2/6c2257860cc1ede24d5b43bfd372447a.jpg",
      },
      {
        id: 2,
        name: "Bước Qua Mùa Hạ",
        singer: "Vũ, Quân AP, Hoàng Yến",
        thumbnailURL:
          "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/b/b/e/2/bbe2a342a8f4f870cd7d9b2dc9fd29ca.jpg",
      },
      {
        id: 3,
        name: "V-Indie Lofi",
        singer: "Nguyễn Trọng Tài, NIT",
        thumbnailURL:
          "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/7/0/4/0/7040a8613d0709a759960a5b0889e9de.jpg",
      },
      {
        id: 4,
        name: "V-Indie Lofi",
        singer: "Nguyễn Trọng Tài, NIT",
        thumbnailURL:
          "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/7/0/4/0/7040a8613d0709a759960a5b0889e9de.jpg",
      },
    ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
