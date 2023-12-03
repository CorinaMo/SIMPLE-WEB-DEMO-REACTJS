import { conicGradientPink } from "../../conicGradients";

export const TitleSection = ({ children }) => {
    return (
        <div className="flex flex-col justify-center">
            <h1 className={conicGradientPink + " bg-clip-text text-2xl md:text-3xl font-extrabold text-transparent"}>{children}</h1>
        </div>
    )
};