import { BriefcaseIcon, GlobeAltIcon, AcademicCapIcon } from '@heroicons/react/20/solid'

export default function Mission() {
    return (
        <div className="relative bg-white">
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                    <div className="relative px-12 h-80 lg:h-auto lg:grow xl:ml-24">
                        <img
                            className="absolute rounded-2xl inset-0 h-full w-full bg-gray-50 object-cover"
                            src=""
                            alt="Photo goes here"
                        />
                    </div>
                </div>
                <div className="px-6 lg:contents">
                    <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                        <p className="text-base font-semibold leading-7 text-indigo-600"></p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h1>
                        {/*<p className="mt-6 text-xl leading-8 text-gray-700">
                            Provided Text Goes Here. Provided Text Goes Here. Provided Text Goes Here. Provided Text Goes Here. Provided Text Goes Here. Provided Text Goes Here.
    </p>*/}
                        <div className="mt-10 max-w-xl text-xl leading-7 text-gray-700 lg:max-w-none">
                            <p>

                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <GlobeAltIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Philanthropy.</strong> CFAC Portfolio Management was founded in 2016 with a philanthropic purpose of raising awareness and money for ALS research. CFAC continues this mission by organizing fundraisers and sharing information in the UBC community about the fight against ALS.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <AcademicCapIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Education.</strong> Our intense training program is designed to teach our members the essential skills and fundamentals to excel in the world of finance. From the basics of valuations, to creating pitch decks and making investment decisions, CFAC Portfolio Management is proud of the wide range of transferable skills taught through the program. We provide our members with the hands-on experience and knowledge that one cannot learn in the classroom.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <BriefcaseIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Mentorship.</strong> CFAC Portfolio Management’s greatest asset is its members and its culture. We pride ourselves in offering a positive community of ambitious like-minded individuals who are always willing to provide invaluable 1 on 1 mentorship. Our experienced upper-year members, and our distinguished alumni, consistently guide our younger students through their career journey and rigorous recruiting process.
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
