export const SectionBase = ({ children }) => {
    return (
        <div className="flex flex-col w-full h-[100vh] bg-white relative">
            <div className="flex absolute w-full h-[100vh] bg-gradient-to-br from-rose-500 via-blue-600 to-sky-700 opacity-10" />
            <div className="flex flex-col w-full h-[100vh] z-[1]">{children}</div>
        </div>
    )
};
