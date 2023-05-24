import EquityTeam from "@/components/EquityTeam";
import ExecTeam from "@/components/ExecTeam";


export default function Team() {
    return (
        <>
            <h1></h1>
            <div className="bg-white px-6 pt-12 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        CFAC Portfolio Management is split into two distinct teams: The Management team oversees the events, philanthropy, community representation and growth of the club. The Investment team manages the virtual portfolio’s investments.
                    </p>
                </div>
            </div>

            <ExecTeam />
            <EquityTeam />
        </>
    )
}

