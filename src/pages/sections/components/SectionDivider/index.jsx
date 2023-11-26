import { conicGradient } from "../../../../components";

export const SectionDivider = () => {
    return (
        <div className="relative top-0 w-screen h-20 overflow-hidden rounded-br-full">
            <div className={conicGradient + " absolute top-0 w-full h-full"} />
        </div>
    )
};