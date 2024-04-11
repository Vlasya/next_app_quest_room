import CloseBtn from '@/components/atoms/CloseBtn';
interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Dialog = ({ children, onClose }: Props) => {
  return (
    <div className='fixed z-50 top-0 left-0 flex justify-center items-center min-w-full min-h-full bg-black bg-opacity-80'>
      <div className='w-[480px] h-[570px] bg-black flex flex-col p-[32px]'>
        <div className='flex justify-end mb-[10px]'>
          <CloseBtn onClick={onClose} />{' '}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
