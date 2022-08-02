import React, { FC, useState } from 'react';
import Modal from 'react-modal';
import './Video.css';

export const Video: FC<{ src: string }> = ({ src }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="video__button">
        <img src="/img/play-icon.svg" alt="Play video" />️
      </button>
      <Modal
        isOpen={open}
        contentLabel="Example Modal"
        onRequestClose={() => setOpen(false)}
        style={{
          overlay: {
            padding: 50,
            zIndex: 9999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            display: 'flex',
            padding: 0,
            top: 150,
            inset: 'initial',
            position: 'relative',
            border: 'none',
            boxShadow:
              '0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)',
          },
        }}
      >
        <video controls className="video__video" autoPlay>
          <source src={src} type="video/mp4" />
        </video>
      </Modal>
    </>
  );
};
