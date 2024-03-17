import React from 'react';

interface Props {
  className?: string;
}

const TwitterIcon = ({ className }: Props) => {
  return (
    <svg
      width='20'
      height='17'
      viewBox='0 0 20 17'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M19.999 2.01809C19.25 2.36447 18.4556 2.59196 17.6423 2.69302C18.4996 2.157 19.1412 1.31342 19.4476 0.319466C18.6431 0.820025 17.761 1.17083 16.8416 1.36059C16.2241 0.669836 15.4056 0.211726 14.5133 0.0574769C13.621 -0.0967717 12.705 0.0614838 11.9076 0.50764C11.1103 0.953797 10.4762 1.66286 10.1041 2.52459C9.73199 3.38632 9.64261 4.35244 9.84988 5.27275C8.21832 5.18726 6.62219 4.74401 5.16512 3.97177C3.70805 3.19953 2.42261 2.11558 1.39227 0.790279C1.02756 1.44516 0.835906 2.18962 0.836931 2.9474C0.836931 4.43472 1.56103 5.74869 2.66189 6.51799C2.01041 6.49655 1.37327 6.31262 0.803571 5.98153V6.03487C0.803768 7.02542 1.13164 7.98543 1.7316 8.75211C2.33156 9.51879 3.16668 10.045 4.09537 10.2414C3.4906 10.4128 2.85646 10.438 2.24097 10.3153C2.50281 11.1679 3.01315 11.9136 3.70054 12.4479C4.38793 12.9822 5.21794 13.2784 6.07437 13.295C5.2232 13.9939 4.2486 14.5105 3.20632 14.8154C2.16403 15.1202 1.0745 15.2073 0 15.0716C1.87568 16.3327 4.05916 17.0022 6.28925 17C13.8373 17 17.9651 10.463 17.9651 4.79373C17.9651 4.6091 17.9602 4.42241 17.9523 4.23983C18.7558 3.63277 19.4492 2.88075 20 2.01911L19.999 2.01809Z' />
    </svg>
  );
};

export default TwitterIcon;
