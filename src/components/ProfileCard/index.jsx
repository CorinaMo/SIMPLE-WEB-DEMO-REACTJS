import { TypingEffect } from "../TypingEffect";
//import { ProfilePicture } from "./profilePicture";
import { SocialBar } from "./socialBar";

export const ProfileCard = () => {
	return (
		<div className="flex flex-col w-[90vw] h-fit sm:w-8/12 md:w-2/3 py-10 relative bg-gray-100 border-blue-50 border-2 border-opacity-5 bg-opacity-10 rounded-full backdrop-blur-md">
			<div className="flex flex-col w-full h-full self-center absolute left-0 top-0 border-gray-100 border-4 shadow-white blur-2xl" />
			<div className="flex w-[40vw] h-[40vw] sm:w-[18vw] sm:h-[18vw] self-end absolute -right-10 -bottom-10 sm:-right-20 sm:-bottom-20 bg-gradient-to-tl from-rose-800 via-transparent to-pink-600 rounded-full blur-sm" />
			<div className="flex w-[40vw] h-[40vw] sm:w-[18vw] sm:h-[18vw] self-end absolute -left-10 -top-10 sm:-left-20 sm:-top-20 bg-gradient-to-tl from-sky-500 via-transparent to-sky-800 rounded-full blur-sm" />
			{/*<ProfilePicture size={64} />*/}

			<ruby >
				<TypingEffect text="CORINA MORERA" customStyle="font-truculenta font-extrabold text-white text-5xl" />
				<rt className="font-mono text-white text-sm text-center sm:text-left">Developer & more.</rt>
			</ruby>
			<SocialBar />
			<div className="flex relative self-center w-fit h-fit">
				<div className="flex flex-row gap-2 z-[5] items-center w-fit max-h-full" >
					<p className="bg-rainbow bg-clip-text text-transparent text-medium self-center leading-tight text-sm [text-shadow:_1px_0_0_rgba(255_255_255_/_40%)]">
						#ActuallyAutistic
					</p>
					<span className="bg-rainbow bg-clip-text text-2xl text-transparent [text-shadow:_1px_0_0_rgba(255_255_255_/_40%)]">∞</span>
				</div>
			</div>
		</div>
	)
};