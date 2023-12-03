import { useNavigate } from "react-router-dom";
import { TitleSection } from "../../../../components";
import { TableCards } from "./components/table";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { SectionBase } from "../../components/SectionBase";
import { SectionDivider } from "../../components/SectionDivider";

export const GamePairs = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    };
    return (
        <SectionBase>
            <SectionDivider />
            <div className="flex w-full h-full justify-center">
                <div className="flex flex-col h-full justify-center md:py-10 lg:py-0 ">
                    <div className="flex flex-row gap-6 w-full h-20 items-center text-start">
                        <button onClick={handleBack} className="flex p-2 ring-0 hover:ring-0 hover:bg-white hover:bg-opacity-20 rounded-full z-[2]">
                            <ChevronLeftIcon width="40" height="40" className="text-rose-800" />
                        </button>
                        <TitleSection>Playground Demo | Find the Pair!</TitleSection>
                    </div>
                    <div>
                        <TableCards />
                    </div>
                </div>
            </div>
        </SectionBase>
    )
};