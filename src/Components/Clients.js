import React from 'react'

const Clients = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 mb-32">
                <div className="container mx-auto px-6 pt-28">
                    <div className="mt-6 md:flex md:items-center md:justify-between">
                        <div>
                            <h1 className="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">What our clients are saying</h1>

                            <div className="mx-auto mt-6 flex">
                                <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                                <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                                <span className="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
                            </div>
                        </div>
                    </div>

                    <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-12 xl:grid-cols-3">
                        <div className="rounded-lg border p-8 dark:border-gray-700">
                            <p className="leading-loose text-gray-500 dark:text-gray-400">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.</p>

                            <div className="-mx-2 mt-8 flex items-center">
                                <img className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                <div className="mx-2">
                                    <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-transparent bg-blue-500 p-8 dark:bg-blue-600">
                            <p className="leading-loose text-white">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.</p>

                            <div className="-mx-2 mt-8 flex items-center">
                                <img className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-blue-200" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                <div className="mx-2">
                                    <h1 className="font-semibold text-white">Jeny Doe</h1>
                                    <span className="text-sm text-blue-200">CEO, Jeny Consultency</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border p-8 dark:border-gray-700">
                            <p className="leading-loose text-gray-500 dark:text-gray-400">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.</p>

                            <div className="-mx-2 mt-8 flex items-center">
                                <img className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div className="mx-2">
                                    <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson</h1>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager at Stech</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Clients
