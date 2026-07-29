import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import useAuthStore from '../store/authStore';

const Login = () => {
  const navigate = useNavigate();
  const { login, loading, error, clearError, isAuthenticated } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) navigate('/', { replace: true });
  }, [isAuthenticated, navigate]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    if (useAuthStore.getState().isAuthenticated) {
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-[590px] min-h-[617px] p-[36px] bg-white rounded-[4px] border border-gray-100 shadow-sm flex flex-col justify-center">
          <div className="text-center mb-[36px]">
            <h2 className="text-[24px] font-bold text-[#111111] font-poppins">Masuk ke Akun</h2>
            <p className="text-[#545454] text-[16px] font-dmsans mt-2">
              Yuk, lanjutin belajarmu di videobelajar!
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <LoginForm
            onSubmit={handleLoginSubmit}
            onNavigateToRegister={() => navigate('/register')}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            email={email}
            onEmailChange={setEmail}
            password={password}
            onPasswordChange={setPassword}
            loading={loading}
          />
        </div>
      </main>
    </div>
  );
};

export default Login;
