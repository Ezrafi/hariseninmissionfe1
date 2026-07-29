import Input from './Input';
import Button from './Button';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import type { LoginFormProps } from '../types';

const LoginForm = ({ onSubmit, onNavigateToRegister, showPassword, setShowPassword, email, onEmailChange, password, onPasswordChange, loading }: LoginFormProps) => {
return (
    <form className="flex flex-col gap-[16px] font-dmsans" onSubmit={onSubmit}>
    <Input 
        label="E-Mail" 
        type="email" 
        placeholder="john.doe@gmail.com" 
        required
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
    />

    <div className="relative font-dmsans">
        <Input 
        label="Kata Sandi" 
        type={showPassword ? "text" : "password"}
        placeholder="**********" 
        required
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        icon={showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />} 
        onIconClick={() => setShowPassword(!showPassword)}
        />
        <div className="text-right mt-1">
        <a href="#" className="text-[14px] text-gray-500 hover:text-green-600 transition-colors">
            Lupa Password?
        </a>
        </div>
    </div>

    <div className="flex flex-col gap-3 mt-[8px]">
        <Button variant="primary" type="submit" className="w-full" disabled={loading}>
        {loading ? 'Memuat...' : 'Masuk'}
        </Button>
        <Button variant="secondary" className="w-full" onClick={onNavigateToRegister} disabled={loading}>
        Daftar
        </Button>
    </div>

    <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t border-gray-200"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-white px-2 text-gray-400 font-bold font-sans">atau</span>
        </div>
    </div>

    <Button variant="outline" className="w-full flex items-center justify-center gap-2" disabled={loading}>
        <img 
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
        alt="google" 
        className="w-5 h-5" 
        />
        Masuk dengan Google
    </Button>
    </form>
);
};

export default LoginForm;
