import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Registering user...");
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex items-center justify-center py-10 px-4">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-1 font-poppins">Pendaftaran Akun</h2>
          <p className="text-gray-500 text-sm mb-8 font-dmsans">Yuk, daftarkan akunmu sekarang juga!</p>

          <RegisterForm 
            onSubmit={handleRegisterSubmit}
            onNavigateToLogin={() => navigate('/login')}
            showPass={showPass}
            setShowPass={setShowPass}
            showConfirmPass={showConfirmPass}
            setShowConfirmPass={setShowConfirmPass}
          />
        </div>
      </main>
    </div>
  );
};

export default Register;