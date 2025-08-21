
import React from 'react';

export const MedalIcon: React.FC = () => (
    <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg">
        </div>
        <div className="absolute w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 11c-2 0-3.03.4-4.5 1.5-1.47 1.1-1.5 2.5-1.5 2.5S7 18 12 18s6-3 6-3-0.03-1.4-1.5-2.5C15.03 11.4 14 11 12 11Z" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#f472b6" />
                <path d="M12.5 10.5c-1.63 0-2.68.52-3.82 1.44-1.14.92-1.18 2.06-1.18 2.06S8.5 16 12.5 16s5-2 5-2-.04-1.14-1.18-2.06C15.18 11.02 14.13 10.5 12.5 10.5Z" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#a855f7"/>
                <path d="M11.5 10c-1.25 0-2.05.6-2.9 1.44-0.85 0.84-0.85 1.81-0.85 1.81s1 2 3.25 2.5" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#ef4444" />
                <path d="M12.5 10c1.25 0 2.05.6 2.9 1.44 0.85 0.84 0.85 1.81 0.85 1.81s-1 2-3.25 2.5" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#3b82f6" />
                <path d="m10.5 9.5 1-2.5 1 2.5" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#22c55e" />
                <path d="M13.5 9.5 15 7l-1.5 2.5" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#f97316" />
                <path d="m14 11.5-3-1-3 1" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    </div>
);
