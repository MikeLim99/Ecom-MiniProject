import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi"
import LoginForm from "../forms/LoginForm"
import RegisterForm from "../forms/RegisterForm"
import { useAuthUser } from "../../hooks/useAuthUser";
import { useAuthContext } from "../../hooks/Auth/useAuthContext";
import { Link } from "react-router";

const TopBar = () => {
    const { handleLogout } = useAuthUser();
    const [showForm, setShowForm] = useState(null); // null, 'login', or 'register'
    const { user } = useAuthContext();
    return (
        <div className="h-[205px] w-full">
            <div className="h-[42px] w-full bg-highlight flex flex-row items-center justify-evenly text-sm px-4">
                <p>Quezon City, Philippines</p>
                <p>Long Span Warranty</p>
                <p>Quality Products</p>
                <p>Contact #: +639 485 860 507</p>
            </div>
            <div className="h-[120px] w-full bg-highlight-200 flex flex-row items-center justify-center">
                <h1 className="text-[30px] font-bold basis-1/4 text-center"><span className="text-contrast">iTech</span> <span className="text-highlight">Store</span></h1>
                <div className="relative flex justify-center items-center basis-2/4">
                    <input type="text" className="w-full p-4 border border-gray-300 rounded-md" placeholder="Search products..." />
                    <select name="category" id="category" className="absolute right-[150px] border-l px-10 border-gray-400">
                        <option value="">All Categories</option>
                        <option value="desktop">Desktop</option>
                        <option value="laptop">Laptop</option>
                        <option value="accessories">Accessories</option>
                    </select>
                    <button className="absolute right-0 bg-contrast-200 text-white py-4 px-10 rounded-r-md">Search</button>
                </div>
                <div className="basis-1/4 flex justify-center items-center gap-15">
                    <Link
                        to={user ? "/MyCart" : "#"}
                        onClick={!user ? (event) => {
                            event.preventDefault();
                            setShowForm('login');
                        } : undefined}
                        className="relative flex gap-5 items-center"
                    >
                        <FiShoppingCart className="text-4xl" />
                        <span className="absolute right-18 top-[-5px] bg-contrast-200 text-white rounded-full w-6 h-6 flex justify-center items-center">1</span>
                        <div className="flex flex-col">
                            <span>Your Cart</span>
                            <span>$20.00</span>
                        </div>
                    </Link>
                    {user && (
                    <div>
                    <div className="hover:cursor-pointer" onClick={handleLogout}>
                        Logout
                    </div>
                    <p>{user.email}</p>
                    </div>
                    )}
                    {!user && (
                    <div className="hover:cursor-pointer" onClick={() => setShowForm('login')}>Sign in</div>
                    )}
                </div>
            </div>
            <div className="h-[40px] w-full flex flex-row items-center justify-evenly text-sm">
                <Link to="/" className="hover:bg-contrast-200 h-[40px] w-[90px] flex justify-center items-center rounded-md hover:text-highlight">Home</Link>
                <Link to="/desktop" className="hover:bg-contrast-200 h-[40px] w-[90px] flex justify-center items-center rounded-md hover:text-highlight">Desktop</Link>
                <Link to="/laptop" className="hover:bg-contrast-200 h-[40px] w-[90px] flex justify-center items-center rounded-md hover:text-highlight">Laptop</Link>
                <Link to="/accessories" className="hover:bg-contrast-200 h-[40px] w-[90px] flex justify-center items-center rounded-md hover:text-highlight">Accessories</Link>
                <Link to="/mobile" className="hover:bg-contrast-200 h-[40px] px-2 flex justify-center items-center rounded-md hover:text-highlight">Mobile Devices</Link>
            </div>
            {showForm === 'login' && (
              <LoginForm 
                onClose={() => setShowForm(null)}
                onSwitchToRegister={() => setShowForm('register')}
              />
            )}
            {showForm === 'register' && (
              <RegisterForm 
                onClose={() => setShowForm(null)}
                onSwitchToLogin={() => setShowForm('login')}
              />
            )}
        </div>
    )
}

export default TopBar