import { TypingEffect } from "../TypingEffect";
import { SocialBar } from "./socialBar";

export const ProfileCard = () => {
	return (
		<div className="flex flex-col w-[90vw] h-fit sm:w-8/12 md:w-2/3 py-10 relative bg-black border-black border-r-2 border-b-2 border-opacity-20 bg-opacity-30 rounded-3xl sm:rounded-full backdrop-blur-md">
			<div className="flex flex-col w-full h-full self-center absolute left-0 top-0 border-gray-100 border-2 shadow-white blur-2xl" />
			<ruby >
				<TypingEffect text="CORINA MORERA" customStyle="font-truculenta font-extrabold text-white text-5xl" />
				<rt className="font-mono text-white text-sm text-center sm:text-left">Developer & more.</rt>
			</ruby>
			<SocialBar />
			<div className="flex relative self-center w-fit h-fit">
				<div className="flex flex-row gap-2 z-[5] items-center w-fit max-h-full  rounded-full px-2 mt-2" >
					<p className="bg-rainbow bg-clip-text text-transparent text-medium self-center leading-tight text-sm [text-shadow:_1px_0_0_rgba(255_255_255_/_60%)]">
						#ActuallyAutistic
					</p>
					<span className="bg-rainbow bg-clip-text text-2xl text-transparent [text-shadow:_1px_0_0_rgba(255_255_255_/_40%)]">∞</span>
				</div>
			</div>
		</div>
	)
};