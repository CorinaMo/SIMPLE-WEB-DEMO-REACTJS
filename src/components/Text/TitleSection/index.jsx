import { conicGradientPink } from "../../conicGradients";

export const TitleSection = ({ children }) => {
    return (
        <div className="flex flex-col justify-center">
            <h1 className={conicGradientPink + " bg-clip-text text-2xl md:text-4xl px-4 font-extrabold text-transparent font-ephesis"}>{children}</h1>
        </div>
    )
};