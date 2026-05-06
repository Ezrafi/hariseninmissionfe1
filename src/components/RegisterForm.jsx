import React from 'react';
import Input from './Input';
import Button from './Button';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const RegisterForm = ({ onSubmit, onNavigateToLogin, showPass, setShowPass, showConfirmPass, setShowConfirmPass }) => {
  return (
    <form className="flex flex-col gap-[16px] font-dmsans" onSubmit={onSubmit}>
      <Input label="Nama Lengkap" placeholder="John Doe" required />
      <Input label="E-Mail" type="email" placeholder="john.doe@gmail.com" required />
      
      <div className="mb-4 text-left">
        <label className="block text-gray-700 text-sm mb-1.5 font-medium">
          No. Hp <span className="text-orange-500">*</span>
        </label>
        <div className="flex gap-2">
          <div className="flex items-center gap-1 border border-gray-300 rounded-lg px-2 bg-gray-50">
            <img src="https://flagcdn.com/w20/id.png" alt="ID" className="w-5 h-3" />
            <span className="text-sm text-gray-600">+62</span>
          </div>
          <input 
            type="tel" 
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
            placeholder="897774547878" 
          />
        </div>
      </div>

      <Input 
        label="Kata Sandi" 
        type={showPass ? "text" : "password"} 
        placeholder="**********" 
        required 
        icon={showPass ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />} 
        onIconClick={() => setShowPass(!showPass)}
      />
      
      <Input 
        label="Konfirmasi Kata Sandi" 
        type={showConfirmPass ? "text" : "password"} 
        placeholder="**********" 
        required 
        icon={showConfirmPass ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />} 
        onIconClick={() => setShowConfirmPass(!showConfirmPass)}
      />

      <div className="flex flex-col gap-3 mt-4">
        <Button variant="primary" type="submit">Daftar</Button>
        <Button variant="secondary" onClick={onNavigateToLogin}>Masuk</Button>
      </div>

      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-400 font-bold font-sans">atau</span>
        </div>
      </div>

      <Button variant="outline" className="flex items-center justify-center gap-2">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="google" className="w-5 h-5" />
        Daftar dengan Google
      </Button>
    </form>
  );
};

export default RegisterForm;