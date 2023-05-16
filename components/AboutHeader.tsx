

export default function AboutHeader() {
    return (
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20">
            <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                aria-hidden="true"
            />
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                        The Santa Ono Investment Program
                    </h1>
                    <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <p className="text-xl leading-8 text-gray-600">
                            CFAC Portfolio Management is a UBC student-run investment club which started its endowment with a donation from UBC's 15th President, Santa Ono.
                        </p>
                        <p className="text-xl mt-5 leading-8 text-gray-600">
                            CFAC's goal is to educate members on the fundamentals of Capital Markets, while providing first-hand experience in managing a fund. The club holds an active virtual portfolio consisting of various equities. The investments team undergoes an extensive training program where they learn the fundamental skills of pitching a company through equity research, valuation and financial modelling.
                        </p>
                        <p className="text-xl mt-5 leading-8 text-gray-600">
                            Throughout the year, members pitch both stock initiations and holding reviews to the investment committee. Members gain invaluable experience and mentorship from upper-year students and industry professionals that provide them with the essential skills, network, and preparation to break into the world of finance.
                        </p>
                    </div>
                    <img
                        src="sauder.jpeg"
                        alt=""
                        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                    />
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
    )
}