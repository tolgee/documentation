import React, { FC, useState } from "react";
import Modal from "react-modal";
import "./VideoPlaceholder.css";

const thumbnail1000 = "/img/video-placeholder-1000.png";
const thumbnail1920 = "/img/video-placeholder-1920.png";

export const VideoPlaceholder: FC<{ src: string }> = ({ src }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="video-placeholder__button"
      >
        <div className="video-placeholder__button_play">
          <img src="/play-triangle.svg" alt="Play video" />
        </div>
        <img
          srcSet={`
          ${thumbnail1000} 1000w,
          ${thumbnail1920} 1920w
        `}
          alt="Play video"
          width={1920}
          height={1080}
        />
      </button>
      <Modal
        isOpen={open}
        contentLabel="Example Modal"
        onRequestClose={() => setOpen(false)}
        style={{
          overlay: {
            padding: 50,
            zIndex: 9999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: 'var(--overlay-background)'
          },
          content: {
            display: "flex",
            padding: 0,
            top: 150,
            inset: "initial",
            position: "relative",
            border: "none",
            boxShadow:
              "0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)",
          },
        }}
      >
        <video controls className="video-placeholder__video" autoPlay>
          <source src={src} type="video/mp4" />
        </video>
      </Modal>
    </>
  );
};
