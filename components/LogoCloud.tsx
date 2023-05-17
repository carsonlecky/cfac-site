import { url } from "inspector"

const URLs: string[] = [
    "https://mma.prnewswire.com/media/2010443/Canaccord_Genuity_Group_Inc__CANACCORD_GENUITY_GROUP_INC__SPECIA.jpg?p=publish",
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/440px-EY_logo_2019.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg',
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/National_Bank_Of_Canada.svg/1200px-National_Bank_Of_Canada.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/BMO_Capital_Markets_logo.svg/2560px-BMO_Capital_Markets_logo.svg.png"

]

export default function LogoCloud() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Placements                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {URLs.map((url) => (
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={url}
                            alt="Company Logo"
                            width={158}
                            height={48}
                            key={url}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
