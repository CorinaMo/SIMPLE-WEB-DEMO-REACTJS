import { conicGradient } from "../../styles";

export const ConicGradientButton = ({ action, children }) => {
    return (
        <button onClick={action} className={`${conicGradient} rounded-full p-2 hover:shadow-lg hover:scale-110 shadow-sm shadow-black`}>
            {children}
        </button>
    )
};