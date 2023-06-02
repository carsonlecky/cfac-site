const posts = [
    {
        id: 1,
        title: 'First Industrial Realty Trust, Inc. (NYSE: FR)',
        href: '/FIRT.pdf',
        description:
            'Short blub about the pitch goes here Short blub about the pitch goes here Short blub about the pitch goes here Short blub about the pitch goes here Short blub about the pitch goes here Short blub about the pitch goes here ',
        date: 'April 2, 2023',
        datetime: '2023-04-02',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'By: Taeyeon Lee, Abdulaziz Umiryayev, Edison Huang, Ben Brownlie, Kai Smart',
            role: '',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'NextEra Energy Partners (NYSE: NEP)',
        href: '/NEP.pdf',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        date: 'Jan 26, 2022',
        datetime: '2022-01-26',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'By: Taeyeon Lee, Miguel Li, Malia Bryson, Jack Hallion',
            role: '',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Taiwan Semiconductor Manufacturing Company (NYSE: TSM)',
        href: '/TSMC.pdf',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        date: '',
        datetime: '',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'By: Jordan, Avram, Malia, and Ethan',
            role: '',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

export default function Pitcher() {
    return (
        <div className="bg-white py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <div className="space-y-16 border-t border-gray-200">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs mt-4">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>

                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href} target="_blank">
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    {/* <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>*/}
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    {/*<img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />*/}
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{post.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
