import React from 'react';

const Home2 = () => {
  return (
    <section className="bg-gray-800 dark:bg-gray-800">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Mental Health Resources</h2>
            <p className="font-light sm:text-xl text-white">Learn about common mental health conditions from trusted sources</p>
        </div> 
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://nimhwebstorage.blob.core.windows.net/nimhassets/icons/adhd-icon.svg" alt="ADHD Icon" />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    ADHD
                </h3>
                <a className="cursor-pointer text-blue-400 hover:underline" href="https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://nimhwebstorage.blob.core.windows.net/nimhassets/icons/depression-icon.svg" alt="Depression Icon" />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    Depression
                </h3>
                <a className="cursor-pointer text-blue-400 hover:underline" href="https://www.nimh.nih.gov/health/topics/depression" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://nimhwebstorage.blob.core.windows.net/nimhassets/icons/bipolar-icon.svg" alt="Bipolar Disorder Icon" />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    Bipolar Disorder
                </h3>
                <a className="cursor-pointer text-blue-400 hover:underline" href="https://www.nimh.nih.gov/health/topics/bipolar-disorder" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://nimhwebstorage.blob.core.windows.net/nimhassets/icons/ptsd-icon.svg" alt="PTSD Icon" />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    PTSD
                </h3>
                <a className="cursor-pointer text-blue-400 hover:underline" href="https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://nimhwebstorage.blob.core.windows.net/nimhassets/icons/schizophrenia-icon.svg" alt="Schizophrenia Icon" />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    Schizophrenia
                </h3>
                <a className="cursor-pointer text-blue-400 hover:underline" href="https://www.nimh.nih.gov/health/topics/schizophrenia" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://nimhwebstorage.blob.core.windows.net/nimhassets/icons/anxiety-icon.svg" alt="Anxiety Icon" />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    Anxiety
                </h3>
                <a className="cursor-pointer text-blue-400 hover:underline" href="https://www.nimh.nih.gov/health/topics/anxiety-disorders" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://nimhwebstorage.blob.core.windows.net/nimhassets/icons/eating-disorders-icon.svg" alt="Eating Disorders Icon" />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    Eating Disorders
                </h3>
                <a className="cursor-pointer text-blue-400 hover:underline" href="https://www.nimh.nih.gov/health/topics/eating-disorders" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://nimhwebstorage.blob.core.windows.net/nimhassets/icons/ocd-icon.svg" alt="OCD Icon" />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                    OCD
                </h3>
                <a className="cursor-pointer text-blue-400 hover:underline" href="https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>  
    </div>
  </section>
  )
}

export default Home2;