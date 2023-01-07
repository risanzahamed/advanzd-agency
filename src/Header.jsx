import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';

const Header = () => {
    
    const {user, UserlogOut} = useContext(AuthContext)

    const handleUserLogout = () => {
        UserlogOut()
            .then(alert('User logged out!'))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="py-4 md:py-6">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <Link to="/" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                <img className="w-auto h-8" src="https://adventz.radiantthemes.com/wp-content/uploads/2022/06/donen1logo.svg" alt="" />
                            </Link>
                        </div>

                        <div className="flex lg:hidden">
                            <button type="button" className="text-gray-900">
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                            <Link to="/" title="" className="text-base font-medium text-gray-900 transition-all duration-200  font-pj hover:text-opacity-50 "> Home </Link>
                            <Link to="/our-company" title="" className="text-base font-medium text-gray-900 transition-all duration-200  font-pj hover:text-opacity-50 "> Our Company </Link>

                            <Link to="/our-experts" title="" className="text-base font-medium text-gray-900 transition-all duration-200  font-pj hover:text-opacity-50 "> Our Experts</Link>

                            <Link to="/pricing-plans" title="" className="text-base font-medium text-gray-900 transition-all duration-200  font-pj hover:text-opacity-50 "> Pricing Plans </Link>
                            {
                                user?.uid ?  <Link to="/jobs" title="" className="text-base font-medium text-gray-900 transition-all duration-200  font-pj hover:text-opacity-50 "> Our Jobs </Link> : <>
                                
                                </>
                            }
                        </div>

                        {
                            user?.uid ? <button onClick={handleUserLogout} cursor-pointer className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">LogOut</button> : <>
                                <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                                    <Link to="/login" title="" className="text-base font-medium text-gray-900 transition-all duration-200  font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Sign in</Link>
                                    <Link to="/register" className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Create free account</Link>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;