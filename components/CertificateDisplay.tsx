
import React from 'react';
import { CertificateData } from '../types';
import { MedalIcon } from './icons/MedalIcon';

interface CertificateDisplayProps {
  data: CertificateData;
}

const CertificateDisplay: React.FC<CertificateDisplayProps> = ({ data }) => {
  const renderDetailRow = (label: string, value: string) => (
    <div className="grid grid-cols-3 gap-2 items-start text-sm font-semibold">
      <span className="col-span-1 text-gray-800">{label}</span>
      <span className="col-span-2 text-gray-600 whitespace-pre-wrap">: {value}</span>
    </div>
  );

  return (
    <div className="bg-white shadow-2xl rounded-lg aspect-[1/1.414] w-full p-4 relative overflow-hidden bg-gradient-to-br from-[#fffdf5] to-[#f9f3e5]">
      {/* Watermark */}
      <div className="absolute inset-0 z-0 grid grid-cols-3 gap-16 text-[#f2eee3] font-devanagari text-2xl font-bold opacity-80 select-none overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <span key={i} className="transform -rotate-12">प्राथमिक चिकित्सा सेवा संघ</span>
        ))}
      </div>

      <div className="relative z-10 w-full h-full border-[10px] border-[#c5a153] p-1">
        <div className="w-full h-full border-2 border-[#c5a153] p-2">
          <div className="w-full h-full border border-dashed border-[#d3b880] p-4 flex flex-col">
            
            {/* Header */}
            <header className="relative flex flex-col items-center text-center">
              <div className="absolute top-0 left-0 w-24 h-48 bg-[#c5a153]">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[96px] border-t-transparent border-b-[96px] border-b-transparent border-r-[48px] border-r-white"></div>
              </div>
              <div className="absolute -top-4 -left-4">
                  <div className="w-0 h-0 border-t-[60px] border-t-[#002060] border-r-[60px] border-r-transparent"></div>
              </div>
              <div className="absolute -top-4 left-[20px]">
                 <div className="w-0 h-0 border-t-[60px] border-t-[#cb0000] border-l-[60px] border-l-transparent"></div>
              </div>

              <div className="absolute -top-4 left-0">
                  <MedalIcon />
                  <p className="font-devanagari text-xs text-center w-24 -mt-2">संगठित परिवार कभी<br/>असफल नहीं होते</p>
              </div>

              <h1 className="font-devanagari text-4xl font-bold text-[#002060] tracking-wider mt-4">
                प्राथमिक <span className="text-[#cb0000]">चिकित्सा</span> सेवा संघ
              </h1>
              <p className="text-xs font-semibold text-gray-700 mt-2">Office No. 306 B, Ganpati Plaza, Mi Road, Jaipur (Rajasthan)</p>
              <p className="text-xs font-bold text-gray-800">An Autonomous Council Regd. Under Section-8, Govt. of India</p>
              <p className="text-sm font-bold text-gray-800 tracking-widest mt-1">ISO 9001:2015 CERTIFIED COMPANY</p>
            </header>
            
            {/* Certificate Title */}
            <div className="relative my-6 flex flex-col items-center justify-center h-20">
              <div className="absolute w-full h-12 bg-[#b22222] skew-y-[-2deg] shadow-lg"></div>
              <div className="absolute w-full h-12 bg-[#dc2626] skew-y-[2deg] shadow-lg"></div>
              <div className="absolute w-[105%] h-14 bg-[#c52828] shadow-2xl">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[28px] border-y-transparent border-r-[28px] border-r-white"></div>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[28px] border-y-transparent border-l-[28px] border-l-white"></div>
              </div>
              <p className="relative text-white text-sm tracking-widest z-20">MEMBERSHIP REGISTRATION</p>
              <h2 className="relative text-white text-3xl font-bold tracking-wider z-20">CERTIFICATE</h2>
            </div>
            
            {/* Main Content */}
            <main className="flex-grow flex items-center">
              <div className="w-full flex justify-between gap-4">
                <div className="w-3/4 space-y-3">
                  {renderDetailRow('Registration No.', data.registrationNo)}
                  {renderDetailRow('Name of Candidated', data.name)}
                  {renderDetailRow('Gender', data.gender)}
                  {renderDetailRow('Address', data.address)}
                  {renderDetailRow('Course', data.course)}
                  {renderDetailRow('Training Center', data.trainingCenter)}
                  {renderDetailRow('Name of Job', data.job)}
                </div>
                <div className="w-1/4 flex items-start justify-center">
                   {data.photoUrl && (
                    <img
                      src={data.photoUrl}
                      alt="Candidate"
                      className="w-28 h-36 object-cover border-4 border-gray-300 shadow-md rounded-md"
                    />
                  )}
                </div>
              </div>
            </main>
            
            {/* Footer */}
            <footer className="mt-auto pt-4">
              <div className="flex justify-between items-center text-xs font-bold text-gray-800">
                <div className="w-1/3 text-center">
                  <div className="border-t border-gray-600 w-3/4 mx-auto mb-1"></div>
                  <p>National Co-ordinator</p>
                </div>
                 <div className="w-1/3 text-center">
                  <div className="border-t border-gray-600 w-3/4 mx-auto mb-1">{data.date}</div>
                  <p>Date</p>
                </div>
                <div className="w-1/3 text-center">
                  <div className="border-t border-gray-600 w-3/4 mx-auto mb-1"></div>
                  <p>State Co-ordinator</p>
                </div>
              </div>
              <p className="text-center text-[10px] text-gray-600 mt-4">
                NOTE : THIS MEMBERSHIP CERTIFICATE WILL BE RENEWED AFTER TWO YEARS.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDisplay;
