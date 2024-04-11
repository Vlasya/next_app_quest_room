import Image from 'next/image';

interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
  borderHeight?: number;
  isGrey?: boolean;
}

const InfoBlock = ({
  children,
  icon,
  borderHeight = 10,
  isGrey,
}: Readonly<Props>) => {
  return (
    <div
      className={`flex items-center h-${borderHeight} pr-5 mr-5 border-r-[1px] ${
        isGrey ? 'border-lightText' : 'border-activeYellow'
      }  last:border-r-0 last:pr-0 last:mr-0`}
    >
      {icon}
      <span
        className={`${
          isGrey ? 'text-lightText' : 'text-activeYellow'
        } ml-[8px]`}
      >
        {children}
      </span>
    </div>
  );
};

export default InfoBlock;
