import { Link } from 'react-router-dom';

export function Header({menuOpen, innerRef, setMenuOpen}) {

    const handleChooseSection = () => {
        setMenuOpen(prev => !prev);
    }

    return (
        <header ref={innerRef} className={`headerBackgroud absolute right-0 w-1/3 flex flex-col items-center justify-center h-screen z-30 text-2xl space-y-4`}>
            <div className="w-full text-center mx-8 text-white">
                <Link onClick={handleChooseSection} to="/">Organizers</Link>
            </div>
            <div className="w-full text-center mx-8 text-white">
                <Link onClick={handleChooseSection} to="/festivals">Festivals</Link>
            </div>
            <div className="w-full text-center  mx-8 text-white">
               <Link onClick={handleChooseSection} to="/login">Login</Link>
            </div>
            <div className="w-full text-center mx-8 text-white">
               <Link onClick={handleChooseSection} to="/admin">Admin</Link>
            </div>
            <div className="w-full text-center mx-8 text-white">
                <Link onClick={handleChooseSection} to="/adminUser">Manage users</Link>
            </div>
        </header>
    )
}


