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
                        CFAC Portfolio Management operates with two distinct teams, each playing a vital role in our organization. The Management team is responsible for overseeing events, philanthropic initiatives, community representation, and the overall growth of the club. On the other hand, the Investment team takes charge of managing investments within our virtual portfolio. Together, these teams contribute to the success and effectiveness of CFAC Portfolio Management.
                    </p>
                </div>
            </div>

            <ExecTeam />
            <EquityTeam />
        </>
    )
}

