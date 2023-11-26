import { BugAntIcon, CakeIcon, FaceSmileIcon, HeartIcon, MoonIcon, StarIcon } from "@heroicons/react/24/outline";

const contentStyle = 'w-12 h-12 md:h-16 md:w-16 text-white';
const contentArray = [
    { name: 'HeartIcon', element: <HeartIcon className={contentStyle} /> },
    { name: 'FaceSmileIcon', element: <FaceSmileIcon className={contentStyle} /> },
    { name: 'MoonIcon', element: <MoonIcon className={contentStyle} /> },
    { name: 'StarIcon', element: <StarIcon className={contentStyle} /> },
    { name: 'CakeIcon', element: <CakeIcon className={contentStyle} /> },
    { name: 'BugAntIcon', element: <BugAntIcon className={contentStyle} /> },

];
export const setNewTable = () => {
    const array = [...contentArray, ...contentArray];
    const table = [...array].sort(() => Math.random() - 0.5);
    return table;
};