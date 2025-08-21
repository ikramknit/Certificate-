import React from 'react';
import { CertificateData } from '../types';

interface CertificateFormProps {
  data: CertificateData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onPhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const CertificateForm: React.FC<CertificateFormProps> = ({ data, onInputChange, onPhotoChange, onSubmit }) => {
  const renderInput = (name: keyof CertificateData, label: string, type: string = 'text') => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={data[name] as string}
        onChange={onInputChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );

  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">Enter Your Details</h2>
      {renderInput('registrationNo', 'Registration No.')}
      {renderInput('name', 'Name of Candidate')}
      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
        <select
          id="gender"
          name="gender"
          value={data.gender}
          onChange={onInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option>MALE</option>
          <option>FEMALE</option>
          <option>OTHER</option>
        </select>
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
        <textarea
          id="address"
          name="address"
          value={data.address}
          onChange={onInputChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      {renderInput('course', 'Course')}
      <div>
        <label htmlFor="trainingCenter" className="block text-sm font-medium text-gray-700 mb-1">Training Center</label>
        <textarea
          id="trainingCenter"
          name="trainingCenter"
          value={data.trainingCenter}
          onChange={onInputChange}
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      {renderInput('job', 'Name of Job')}
      {renderInput('date', 'Date')}
      <div>
        <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700 mb-1">Candidate's Photo</label>
        <input
          type="file"
          id="photoUrl"
          name="photoUrl"
          accept="image/*"
          onChange={onPhotoChange}
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </div>
       <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
      >
        Generate Certificate
      </button>
    </form>
  );
};

export default CertificateForm;