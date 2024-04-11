'use client';
import { Dialog } from '@/components/molecules';
import { Form } from '@/components/organisms';
import { useState } from 'react';

const ModalBlock = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <button
        onClick={handleToggleModal}
        className='py-4 px-14 rounded-[6px] bg-activeYellow text-btnText font-semibold'
      >
        Взяти участь
      </button>
      {showModal ? (
        <Dialog onClose={handleClose}>
          <Form onClose={handleClose}/>
        </Dialog>
      ) : null}
    </>
  );
};

export default ModalBlock;
