"use client"
import Image from "next/image"
const people = [
    { name: 'Miguel Leon Li', role: 'Vice President, Investments', imageUrl: 'mimi.jpg' },
    { name: 'Grace Lee', role: 'Sector Head, TMT', imageUrl: 'grace.jpg' },
    { name: 'Taeyeon Lee', role: 'Sector Head, Real Estate', imageUrl: 'https://scontent.fcxh3-1.fna.fbcdn.net/v/t1.15752-9/350959201_3607077346232076_5472042396314888985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=hhzLToZb-vQAX8JUCrL&_nc_ht=scontent.fcxh3-1.fna&oh=03_AdSvYB2YgWX_-z91bGhR3NQ5AOzR6WQW8d-xLNV4tqEfdg&oe=64A71F4D' },
    { name: 'Malia Bryson', role: 'Sector Head, Consumer Discretionary', imageUrl: 'malia.jpeg' },
    { name: 'John McKenzie', role: 'Sector Head, Natural Resources', imageUrl: 'johnmck.jpg' },
    { name: 'Jordan Black', role: 'Associate, TMT', imageUrl: 'https://media.licdn.com/dms/image/C5603AQGEDMYnsBc4Jg/profile-displayphoto-shrink_800_800/0/1620838366058?e=1690416000&v=beta&t=2msKAfpMiX2ElxT7F7zNHvMLa5WgnRNoLLcJOMPHxG8' },
    { name: 'Aziz Umiryayev', role: 'Associate, Real Estate', imageUrl: 'abdul.jpg' },
    { name: 'Kevin Li', role: 'Associate, Consumer Discretionary', imageUrl: 'kev.jpg' },
    { name: 'Lachlan Pedersen', role: 'Associate, Energy', imageUrl: 'lachlan.jpg' },
    { name: 'Ben Brownlie', role: 'Analyst', imageUrl: 'brownlie.jpg' },
    { name: 'Alex Hachey', role: 'Analyst', imageUrl: 'Alex.jpeg' },
    { name: 'Jack Hallion', role: 'Analyst', imageUrl: 'hallion.jpg' },
    { name: 'Ethan Harvey', role: 'Analyst', imageUrl: 'harvey.jpg' },
    { name: 'Edison Huang', role: 'Analyst', imageUrl: 'edi.jpg' },
    { name: 'Ethan Penny', role: 'Analyst', imageUrl: 'penny.jpg' },
    { name: 'Avram Prljincevic', role: 'Analyst', imageUrl: 'Avram.jpeg' },
    { name: 'Sebastian Romero-Wong', role: 'Analyst', imageUrl: 'seb.jpg' },
    { name: 'Kai Smart', role: 'Analyst', imageUrl: 'kai.jpg' }
]


export default function EquityTeam() {
    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Investment Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-3 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                >
                    {people.map((person) => (
                        <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                            <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
                            <div className="flex-auto">
                                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>

                                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                                {/*<a href={person.linkedin}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>

                    <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>*/}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
