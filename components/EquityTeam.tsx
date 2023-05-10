const people = [
    {
        name: 'Jordan Black',
        role: 'President',
        imageUrl:
            'https://media.licdn.com/dms/image/C5603AQGEDMYnsBc4Jg/profile-displayphoto-shrink_800_800/0/1620838366058?e=1689206400&v=beta&t=iln0KdvhOYk8YtLREfbFETDRqe48ER1ggoV1Nr0eSSI',
        bio: 'Degen Retard turned fincance bro.',
    },
    // More people...
]

export default function EquityTeam() {
    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Equity Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                >
                    {people.map((person) => (
                        <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                            <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
                            <div className="flex-auto">
                                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
