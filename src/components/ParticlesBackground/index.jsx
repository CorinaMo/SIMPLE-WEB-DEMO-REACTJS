import { conicGradient } from "../conicGradients";
import { ParticlesContainer } from "./particles";
export const ParticlesBackground = ({ children }) => {
	return (
		<div className={`${conicGradient} flex w-[100vw] h-[100vh] items-center`}>
			<div
				className="flex flex-col w-full h-full items-center justify-center bg-unsplash2 bg-cover bg-center relative"
			>
				<div className="absolute inset-0 bg-pink-200 opacity-30" />
				<div className="flex absolute w-full h-full items-center" >
					<ParticlesContainer />
				</div>
				{children}
			</div>
		</div>
	)
};
