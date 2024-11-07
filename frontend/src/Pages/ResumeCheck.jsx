import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResumeCheck = () => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [fileLoading, setFileLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleDrop = (acceptedFiles) => {
    setFileLoading(true);
    setError(null);
    // Simulate file upload delay
    setTimeout(() => {
      setResume(acceptedFiles[0]);
      setFileLoading(false);
    }, 1000);
  };

  const handleSubmit = async () => {
    if (!resume || !jobDescription) {
      setError('Please upload a resume and enter a job description');
      return;
    }
  
    setLoading(true);
    setError(null);
  
    const formData = new FormData();
    formData.append('pdf_file', resume);
  
    try {
      const encodedJobDescription = encodeURIComponent(jobDescription);
      const response = await axios.post(
        `https://resume-screening-2.onrender.com/upload_pdf?keywords=${encodedJobDescription}`, 
        formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      localStorage.setItem('result', JSON.stringify(response.data));
      
      // Navigate to the result page with the response data
      navigate('/resumecheckresult', { state: { result: response.data } });

    } catch (error) {
      console.error('Error submitting the form:', error);
      setError('There was an error processing your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Resume Fit Checker</h2>
      
      <div className="flex justify-between items-start space-x-6">
        {/* Job Description Box */}
        <div className="w-1/2 bg-gray-100 p-4 rounded-lg shadow">
          <label className="block text-lg font-medium mb-2">Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here"
            className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        {/* Resume Upload Box */}
        <div className="w-1/2 bg-gray-100 p-4 rounded-lg shadow">
          <label className="block text-lg font-medium mb-2">Upload Resume</label>
          <Dropzone onDrop={handleDrop} accept=".pdf,.doc,.docx" multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className={`flex justify-center items-center h-48 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer 
                ${fileLoading ? 'bg-gray-200' : 'bg-white'}`}
              >
                <input {...getInputProps()} />
                {fileLoading ? (
                  <ClipLoader color="#3B82F6" size={50} />
                ) : resume ? (
                  <div className="text-center">
                    <p className="text-lg text-green-600 font-semibold">
                      {resume.name} uploaded!
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500">Drag & drop or click to upload a resume</p>
                )}
              </div>
            )}
          </Dropzone>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? <ClipLoader color="#ffffff" size={24} /> : 'Check Fit'}
        </button>
      </div>
    </div>
  );
};

export default ResumeCheck;
