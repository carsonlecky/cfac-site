import Header from "@/components/Header";
import LogoCloud from "@/components/LogoCloud";


export default function Alumni() {
    return (
        <>
            <div className="bg-white px-6 py-12 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Placements</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        CFAC Portfolio Management takes great pride in the achievements of our distinguished members, who have successfully secured placements in the following firms and many more:
                    </p>
                </div>
                <LogoCloud />
            </div>
        </>
    )
}