import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJobCategoryData from './SingleJobCategoryData';

const SingleJobPost = () => {
    const joblist = useLoaderData()


    return (
        <div>

            <div class="bg-gradient-to-b pt-36   from-[#101212] relative to-[#08201D]">
                <section class="relative lg:min-h-[500px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">


                    <div class="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 relative z-20">
                        <div class=": mx-auto text-center">
                            <h1 class="text-4xl font-bold sm:text-6xl">
                                <span class="text-transparent leading-relaxed bg-clip-text bg-gradient-to-r from-green-300 to-white"> Apply on your favorite job. </span>
                            </h1>
                            <p class="mt-5 text-base text-white sm:text-xl">No more hassle for applying jobs. Apply and easy hire. Good for job seekers and hiring managers</p>
                        </div>
                    </div>
                </section>
            </div>

           
            {
                joblist.map(jobitem => <SingleJobCategoryData
                    key={jobitem}
                    jobitem={jobitem}
                >
                </SingleJobCategoryData>)
            }

        </div>
    );
};

export default SingleJobPost;