import React, { useEffect, useState } from 'react';
import JobPost from './JobPost';

const JobCategory = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('https://advanzd-agency-server.vercel.app/jobs-category')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])
   
    return (
        <div>
            {
                jobs.map(jobs => <JobPost
                    key={jobs._id}
                    job={jobs}
                ></JobPost>)
            }
        </div>
    );
};

export default JobCategory;