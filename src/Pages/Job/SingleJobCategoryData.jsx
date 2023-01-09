import React from 'react';
import { Link } from 'react-router-dom';

const SingleJobCategoryData = ({ jobitem }) => {
    const { description, job_title, job_type,category_id,job_apply, location, postDate, total_time, salary, _id } = jobitem
    

    const content = description.slice(0,100)

    return (
        <div>
            <div className="px-4 lg:mt-12 text-left mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
                <div className="mb-10 border-t border-b divide-y">
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    Post Date
                                </a>
                                <p className="text-gray-600">{postDate}</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        {job_title}
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                {content}...
                            </p>

                            <Link
                                to={`/job/${_id}`}
                                Linkria-label=""
                                className="inline-flex mt-6 items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                See full details
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleJobCategoryData;