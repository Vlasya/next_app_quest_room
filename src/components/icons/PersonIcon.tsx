import type { SVGProps } from 'react';

interface CloseSidePanelIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const PersonIcon = ({ color = '#FFFFFF' }: CloseSidePanelIconProps) => {
  return (
    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_6962_909)">
    <path d="M7.52438 8.92424H8.36076C9.30235 8.92424 10.2225 9.63432 10.0659 10.5477L9.8954 11.4134C9.66111 12.4212 9.13183 13.0368 8.19025 13.125H2.82071C1.87912 13.0368 1.37184 12.2695 1.11555 11.4134L0.945037 10.5477C0.73752 9.66159 1.70861 8.92424 2.65019 8.92424H3.46355M2.61183 3.80836C2.41915 3.80836 2.22664 3.97265 2.22664 4.17509V4.90839C2.22664 5.11067 2.3992 5.27528 2.61183 5.27528C2.61183 5.27528 3.18954 6.74172 3.57456 7.2919C3.81311 7.63281 4.15227 8.45118 5.5002 8.45118C6.84812 8.45118 7.18711 7.63281 7.42583 7.2919C7.81102 6.74172 8.38856 5.27528 8.38856 5.27528C8.60102 5.27528 8.77375 5.11067 8.77375 4.90839V4.17509C8.77375 3.97265 8.60102 3.80836 8.38856 3.80836V3.25834C8.38856 1.97503 7.62601 0.875 5.5002 0.875C3.38188 0.875 2.61183 1.97487 2.61183 3.25834V3.80836Z" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_6962_909">
    <rect width="11" height="14" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
  );
};

export default PersonIcon;
