import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-[#F7F5E5] to-[#f7f7f7]">
                <section className="py-10 sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            <div>
                                <img className="lg:w-[70%]" src="https://adventz.radiantthemes.com/wp-content/uploads/2022/06/freelance-girl.png" alt="" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-medium leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-4xl">
                                    Get Support To Grow Your Online Business

                                </h1>

                                <p className="mt-8 text-base text-black sm:text-xl">Egestas dictum lectus diam commodo. Et tristique nunc faucibus sit tortor commodo aliquet commodo quam. Id suspendisse vel in non arcu, interdum quis placerat accumsan.</p>

                                <div className="mt-10  sm:flex sm:items-center sm:space-x-8">
                                    <Link to="/" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#FB5850] hover:bg-orange-600 focus:bg-orange-600" role="button"> Start exploring </Link>

                                    <Link to="/" title="" className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                                        <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path fill="#FB5850" stroke="#FB5850" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Watch video
                                    </Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Feature;