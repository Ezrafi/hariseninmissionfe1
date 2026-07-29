import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';
import useAuthStore from '../store/authStore';

const Register = () => {
  const navigate = useNavigate();
  const { register, loading, error, clearError } = useAuthStore();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState('');

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    clearError();

    if (password !== confirmPassword) {
      setLocalError('Konfirmasi kata sandi tidak cocok');
      return;
    }
    if (password.length < 6) {
      setLocalError('Kata sandi minimal 6 karakter');
      return;
    }

    await register({ name, email, password, phone: phone || undefined });
    if (useAuthStore.getState().isAuthenticated) {
      navigate('/', { replace: true });
    } else if (!useAuthStore.getState().error) {
      navigate('/login', { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex items-center justify-center py-10 px-4">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-1 font-poppins">Pendaftaran Akun</h2>
          <p className="text-gray-500 text-sm mb-8 font-dmsans">Yuk, daftarkan akunmu sekarang juga!</p>

          {(localError || error) && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
              {localError || error}
            </div>
          )}

          <RegisterForm 
            onSubmit={handleRegisterSubmit}
            onNavigateToLogin={() => navigate('/login')}
            showPass={showPass}
            setShowPass={setShowPass}
            showConfirmPass={showConfirmPass}
            setShowConfirmPass={setShowConfirmPass}
            name={name}
            onNameChange={setName}
            email={email}
            onEmailChange={setEmail}
            phone={phone}
            onPhoneChange={setPhone}
            password={password}
            onPasswordChange={setPassword}
            confirmPassword={confirmPassword}
            onConfirmPasswordChange={setConfirmPassword}
            loading={loading}
          />
        </div>
      </main>
    </div>
  );
};

export default Register;
