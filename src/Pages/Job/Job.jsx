import React, { useEffect, useState } from 'react';
import JobPost from './JobPost';
import SingleJob from './SingleJob';

const Job = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/jobs-category')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])

    return (
        <div>
            <section class="py-10 text-left bg-gray-50 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="flex items-end justify-between">
                        <div class="flex-1 text-center lg:text-left">
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Featured Job List</h2>
                        </div>
                    </div>

                    <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        {
                            jobs.map(job => <SingleJob
                                key={job._id}
                                job={job}
                            ></SingleJob>)
                        }
                    </div>
                </div>
            </section>
            <JobPost />
        </div>
    );
};

export default Job;