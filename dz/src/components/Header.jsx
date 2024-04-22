import { Link } from 'react-router-dom';

export function Header() {

    

    return (
        <header className="
        flex 
        items-center
        justify-between
        h-24
        z-20
        relative
        mb-8
        ">
            <div className="w-full text-xl mx-8 text-white/80">
                <Link to="/">Organizers</Link>
            </div>
            <div className="w-full text-xl text-center mx-8 text-white/80">
                <Link to="/festivals">Festivals</Link>
            </div>
            <div className="w-full text-xl text-right mx-8 text-white/80">
               <Link to="/login">Login</Link>
            </div>
            <div className="w-full text-xl text-right mx-8 text-white/80">
               <Link to="/admin">Admin</Link>
            </div>
            <div className="w-full text-xl text-right mx-8 text-white/80">
                <Link to="/adminUser">Manage users</Link>
            </div>
            <span className="bg-white absolute left-8 right-8 bottom-0 h-[1px]"></span>
        </header>
    )
}