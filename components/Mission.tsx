import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Mission() {
    return (
        <div className="relative bg-white">
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                    <div className="relative px-12 h-80 lg:h-auto lg:grow xl:ml-24">
                        <img
                            className="absolute rounded-2xl inset-0 h-full w-full bg-gray-50 object-cover"
                            alt=""
                        />
                    </div>
                </div>
                <div className="px-6 lg:contents">
                    <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                        <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
                            egestas fringilla sapien.
                        </p>
                        <div className="mt-10 max-w-xl text-xl leading-7 text-gray-700 lg:max-w-none">
                            <p>
                                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                                semper sed amet vitae sed turpis id.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Philanthropy.</strong> CFAC Portfolio Management was founded in 2016 with a philanthropic purpose of raising awareness and money for ALS research. CFAC continues this mission by organizing fundraisers and sharing information in the UBC community about the fight against ALS.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Education.</strong> Provided Text has to go here
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Experience.</strong> Provided Text has to go here
                                    </span>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
