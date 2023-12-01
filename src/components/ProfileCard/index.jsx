import { ProfilePicture } from "./profilePicture";
import { SocialBar } from "./socialBar";

export const ProfileCard = () => {
    return (
        <div className="flex flex-col w-[84%] h-fit pb-10 relative sm:w-8/12 md:w-1/3 bg-gray-100 border-blue-50 border-2 border-opacity-5 bg-opacity-10 rounded-lg backdrop-blur-md">
            <div className="flex flex-col w-full h-full self-center absolute left-0 top-0 border-gray-100 border-4 shadow-white blur-2xl" />
            <div className="flex w-[40vw] h-[40vw] sm:w-[18vw] sm:h-[18vw] self-end absolute -right-10 -bottom-10 sm:-right-20 sm:-bottom-20 bg-gradient-to-tl from-rose-800 via-transparent to-pink-600 rounded-full blur-sm" />
            <div className="flex w-[40vw] h-[40vw] sm:w-[18vw] sm:h-[18vw] self-end absolute -left-10 -top-10 sm:-left-20 sm:-top-20 bg-gradient-to-tl from-sky-500 via-transparent to-sky-800 rounded-full blur-sm" />
            <ProfilePicture size={64} />

            <span className="font-quicksand font-extrabold mt-4 text-white text-opacity-80 text-md">
                CORINA MORERA
            </span>
            <p className="text-gray-200 max-w-[20rem] self-center leading-tight text-sm">
                Full stack developer / AI / Data Science
            </p>
            <div className="flex relative self-center w-fit h-fit">
                <div className="flex flex-row gap-2 z-[5] items-center w-fit max-h-full" >
                    <p className="bg-rainbow bg-clip-text text-transparent text-medium self-center leading-tight text-sm [text-shadow:_1px_0_0_rgba(255_255_255_/_40%)]">
                        #ActuallyAutistic
                    </p>
                    <span className="bg-rainbow bg-clip-text text-2xl text-transparent [text-shadow:_1px_0_0_rgba(255_255_255_/_40%)]">∞</span>
                </div>
            </div>
            <SocialBar />
        </div>
    )
};