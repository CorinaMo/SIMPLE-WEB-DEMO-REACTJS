export const ProfilePicture = ({ size }) => {
    return (
        <div className={`w-${size} h-${size} flex flex-col p-2 -mt-10 relative rounded-full self-center border-blue-50 border-2 border-opacity-70 bg-white bg-opacity-30`}>
            <div className="flex flex-col w-full h-full absolute left-0 top-0 rounded-full bg-gray-100 bg-opacity-10 shadow-inner blur-sm shadow-gray-100 self-center" />
            <img
                src="https://media.licdn.com/dms/image/D4D03AQG7934uEHZAGw/profile-displayphoto-shrink_400_400/0/1678875703583?e=1704931200&v=beta&t=8radDBA-wJHUBXl3mc5MayFtJ2sCeImap8NrjKLTRuc"
                alt="profile-pic"
                className={`w-${size} h-${size} rounded-full border-gray-600 border-2 border-opacity-20 z-[2]`} />
        </div>
    )
};

