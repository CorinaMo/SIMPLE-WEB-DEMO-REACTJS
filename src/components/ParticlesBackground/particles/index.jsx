import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./options";

export const ParticlesContainer = () => {
    const options = particlesOptions;

    const init = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <Particles id="tsparticles" init={init} options={options} className="flex flex-col absolute w-full h-[60%]" />
    )
};

