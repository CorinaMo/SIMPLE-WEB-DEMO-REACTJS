import { GithubIcon, LinkedInIcon } from "../../socialcons";
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { goGithub, goLinkedin } from "../../../utils/functions/goTo";

export const SocialBar = () => {
    const linkStyle = 'flex flex-col w-10 h-10 p-2 bg-gray-100 border-blue-50 border-2 border-opacity-5 bg-opacity-10 rounded-full backdrop-filter drop-shadow-xl shadow-slate-200 backdrop-blur-sm place-center hover:bg-opacity-30'

    return (
        <div className="flex flex-row gap-3 pt-8 text-white self-center">
            <button onClick={goLinkedin} className={linkStyle}>
                <LinkedInIcon color="#FFFFFF" />
            </button>
            <button onClick={goGithub} className={linkStyle}>
                <GithubIcon color="#FFFFFF" />
            </button>
            <a href="mailto:crista.majere@gmail.com"  className={linkStyle}>
                <EnvelopeIcon width="24" height="24" color="#FFFFFF" className="flex self-center" />
            </a>
        </div>
    )
};