import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    const baseStyle = "px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300";
    const activeStyle = "bg-sky-200 text-sky-900 shadow-sm";
    const inactiveStyle = "text-slate-600 hover:bg-sky-50 hover:text-sky-700";

    return (
        <nav className="w-full bg-gradient-to-r from-sky-50 via-white to-sky-100/80 backdrop-blur-md shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
            <Link to="/" className="text-2xl font-extrabold text-sky-700 tracking-tight hover:opacity-80 transition">
                EchoVision
            </Link>

            <div className="flex items-center space-x-2">
                <Link to="/" className={`${baseStyle} ${location.pathname === '/' || location.pathname === '' ? activeStyle : inactiveStyle}`}>Home</Link>
                <Link to="/project" className={`${baseStyle} ${location.pathname === '/project' ? activeStyle : inactiveStyle}`}>Project</Link>
                <Link to="/demo" className={`${baseStyle} ${location.pathname === '/demo' ? activeStyle : inactiveStyle}`}>View Demo</Link>
            </div>
        </nav>
    );
};

export default NavBar;