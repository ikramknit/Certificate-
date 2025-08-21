import React, { useState, useCallback, useRef } from 'react';
import { CertificateData } from './types';
import CertificateForm from './components/CertificateForm';
import CertificateDisplay from './components/CertificateDisplay';

declare const html2canvas: any;

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

  const [isSubmitted, setIsSubmitted] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

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

  const handleSubmit = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsSubmitted(true);
  }, []);

  const handleCreateNew = useCallback(() => {
    setIsSubmitted(false);
  }, []);

  const handleDownload = useCallback(async () => {
    if (!certificateRef.current) return;

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 3, // Higher resolution for print quality
        useCORS: true,
      });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `certificate-${certificateData.name.replace(/\s+/g, '-').toLowerCase()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading certificate:", error);
      alert("Sorry, there was an error downloading your certificate. Please try again.");
    }
  }, [certificateData.name]);

  return (
    <div className="min-h-screen bg-gray-200 p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Certificate Generator</h1>
        <p className="text-lg text-gray-600 mt-2">
          {isSubmitted
            ? 'Your certificate is ready to download.'
            : 'Fill in the details below to see your certificate generated in real-time.'}
        </p>
      </header>
      <main className="container mx-auto">
        {isSubmitted ? (
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <button
                onClick={handleDownload}
                className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Download Certificate as PNG"
              >
                Download as PNG
              </button>
              <button
                onClick={handleCreateNew}
                className="bg-gray-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label="Create a new certificate"
              >
                Create New
              </button>
            </div>
            <div className="w-full max-w-4xl">
              <CertificateDisplay ref={certificateRef} data={certificateData} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
              <CertificateForm
                data={certificateData}
                onInputChange={handleInputChange}
                onPhotoChange={handlePhotoChange}
                onSubmit={handleSubmit}
              />
            </div>
            <div className="lg:col-span-3">
              <CertificateDisplay data={certificateData} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;