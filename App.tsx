
import React, { useState, useCallback } from 'react';
import { CertificateData } from './types';
import CertificateForm from './components/CertificateForm';
import CertificateDisplay from './components/CertificateDisplay';

const App: React.FC = () => {
  const [certificateData, setCertificateData] = useState<CertificateData>({
    registrationNo: '2021587',
    name: 'MOHD SHOAIB',
    gender: 'MALE',
    address: 'BEHAT ROAD, RIRHI MOHIUDDINPUR\nTAJPURA, SAHARANPUR (UP)',
    course: 'CMS&ED',
    trainingCenter: 'Self Employment Institute Of\nSkill Development',
    job: 'Self Employment',
    photoUrl: 'https://i.imgur.com/O6sfG3y.png', // Placeholder image
    date: new Date().toLocaleDateString('en-GB'),
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCertificateData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handlePhotoChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCertificateData(prev => ({ ...prev, photoUrl: event.target?.result as string }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Certificate Generator</h1>
        <p className="text-lg text-gray-600 mt-2">Fill in the details below to see your certificate generated in real-time.</p>
      </header>
      <main className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
          <CertificateForm
            data={certificateData}
            onInputChange={handleInputChange}
            onPhotoChange={handlePhotoChange}
          />
        </div>
        <div className="lg:col-span-3">
          <CertificateDisplay data={certificateData} />
        </div>
      </main>
    </div>
  );
};

export default App;
