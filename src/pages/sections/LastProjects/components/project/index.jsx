import { conicGradientPink } from '../../../../../components/styles';

export const Project = ({ logo, title, subtitle, href, tasks }) => {
    return (
        <div className="flex flex-row px-2 h-fit mt-4 md:items-center justify-between md:justify-center md:gap-10">
            <div className={`flex w-fit h-fit p-5 md:p-10 rounded-r-full items-center justify-center ${conicGradientPink}`}>
                <img src={logo} alt={`${title} Logo`} className="w-14 md:w-16 md:h-16" />
            </div>
            <div className="flex w-full md:w-[50%] h-fit px-2 items-center text-start justify-center">
                <div >
                    <h1 className={`${conicGradientPink} bg-clip-text text-xl font-bold text-transparent`}>{title}</h1>
                    <h2 className={`${conicGradientPink} bg-clip-text text-sm md:text-lg font-medium text-transparent leading-tight`}>{subtitle}</h2>
                    <a className={`${conicGradientPink} bg-clip-text font-medium text-xs md:text-sm text-transparent`} href={`https://${href}`}>{href}</a>
                    <p className={`${conicGradientPink} bg-clip-text text-[0.65rem] md:text-xs text-transparent uppercase mt-4 md:mt-6 leading-tight"`}>{tasks}</p>
                </div>
            </div>
        </div>
    )
};
