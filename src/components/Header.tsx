import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
const navigate = useNavigate();

return (
<header className="w-full h-20 bg-white border-b border-gray-200 flex items-center justify-center">
    <div className="w-full max-w-[1440px] px-6 lg:px-[120px] flex items-center justify-between">
        <button
            type="button"
            onClick={() => navigate('/')}
            aria-label="Go to homepage"
            className="p-0 bg-transparent border-0 cursor-pointer"
        >
            <img
                src={logo}
                alt="VideoBelajar Logo"
                className="w-[193px] h-[23.4px] object-contain opacity-100"
            />
        </button>
    </div>
    </header>
);
};

export default Header;
