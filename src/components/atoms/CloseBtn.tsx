'use client';
import Image from 'next/image';

interface Props {
  onClick: () => void;
}

const CloseBtn = ({ onClick }: Props) => {
  return (
    <button onClick={onClick}>
      <Image
        src='/icons/close.svg'
        alt='Close icon'
        width={14}
        height={14}
        className='cursor-pointer'
      />
    </button>
  );
};

export default CloseBtn;
