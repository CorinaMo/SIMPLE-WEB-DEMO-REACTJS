export const ActionRound = ({ action, children }) => {
    const handleClick = () => {
        action();
    };
    return (
        <button
            onClick={handleClick}
            className="flex flex-col w-16 h-16 p-2 bg-gradient-to-tr from-transparent to-white rounded-full backdrop-filter backdrop-blur-sm place-center items-center justify-center hover:scale-110"
            >
                <div className="flex border-blue-50 border-2 border-opacity-5 w-full h-full absolute left-0 top-0 rounded-full shadow-inner blur-sm shadow-gray-300" />
                <div className="flex w-full h-full absolute left-0 top-0 rounded-full shadow-md shadow-gray-600 blur-sm" />
        {children}
        </button>
    )
};