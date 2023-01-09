import React from 'react';
import { Link } from 'react-router-dom';

const SingleJob = ({ job }) => {

 

    return (
        <div>
            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                    <div class="relative">
                        <Link to={job.category} title="" class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-full" src={job.img} alt="" />
                        </Link>

                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> {job.name} </span>
                        </div>
                    </div>
                    <p class="mt-5 text-2xl font-semibold">
                        <Link to={job.category} title="" class="text-black"> {job.content} </Link>
                    </p>
                    <Link to={job.category} title="" class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        See Jobs
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleJob;