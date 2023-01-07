import React from 'react';
import { Link } from 'react-router-dom';

const OurCompany = () => {
    return (
        <div>
            <section class="py-10 bg-white sm:py-16 lg:py-24">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="mx-auto text-left  md:text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                            I am building a product that can
                            <span class="relative inline-block">
                                <span class="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
                                <span class="relative"> solve developer’s pain </span>
                            </span>
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
                        <div>
                            <img class="w-full mx-auto sm:max-w-xs" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg" alt="" />
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">Hey! I am John, founder of Celebration.</h3>
                            <p class="mt-4 text-lg text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <p class="mt-4 text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <h3 class="mt-8 text-lg font-semibold text-gray-900">How do I do this without any investment?</h3>
                            <p class="mt-4 text-lg text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-10 bg-white sm:py-16 lg:py-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-2xl mx-auto text-center">
                        <div class="flex items-center justify-center">
                            <div class="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
                                <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg" alt="" />
                            </div>

                            <div class="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
                                <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg" alt="" />
                            </div>

                            <div class="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
                                <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg" alt="" />
                            </div>
                        </div>

                        <h2 class="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl">Join <span class="border-b-8 border-yellow-300">5,482</span> other developers</h2>
                        <p class="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>

                        <Link to= "/" title="" class="inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:mt-12 hover:bg-blue-700 focus:bg-blue-700" role="button">
                            <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Get instant access
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default OurCompany;