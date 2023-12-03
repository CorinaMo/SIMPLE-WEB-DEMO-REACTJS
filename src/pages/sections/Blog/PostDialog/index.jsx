import { UserIcon } from '@heroicons/react/24/outline';
import { DefaultDialog } from '../../../../components/Dialog';
import { conicGradient } from '../../../../components/conicGradients';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";
import { ProfilePicture } from '../../../../components/ProfileCard/profilePicture';

export const PostDialog = ({ post, close, open }) => {
    const Text = ({ children },) => <><p className="pt-2 font-mont break-after-auto text-base first-line:indent-2 first-letter:font-ephesis first-letter:font-extrabold first-letter:pr-2 first-letter:uppercase first-letter:text-4xl">{children}</p> </>;
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return <Text>{children}</Text>
            }
        },
    };

    return (
        <>
            <DefaultDialog open={open} close={close}>
                <div className="flex flex-col w-screen md:w-[85vw] h-screen bg-white items-start overflow-y-scroll ">
                    <div>
                        <div className="flex relative max-w-full h-[38vh] md:w-full sm:h-[45%] md:h-[70h] lg:h-[95vh] overflow-hidden items-center">
                            {post?.picture
                                ? <img src={'https:' + post?.picture} alt={post?.alt} className="min-h-full min-w-full" />
                                : <div className="w-max h-full bg-rainbow" />}
                            <div className={`flex flex-col absolute bottom-4 w-full h-fit`}>
                                <div className={conicGradient}>
                                <h3 className="text-xl font-quicksand font-bold leading-tight py-2 px-4 z-10 uppercase w-full h-fit text-white">
                                    {post?.title ?? ''}
                                </h3>
                                </div>
                                <span className="text-xs py-1 px-4 uppercase bg-black sm:bg-opacity-40 text-white leading-tight">{post?.alt}</span>

                            </div>

                        </div>
                        <div className="max-w-full pt-6 px-6 sm:pt-10 md:pt-16 sm:px-12 md:px-28">
                            <h3 className="flex text-6xl font-ephesis text-center font-bold leading-[0.8] sm:leading-[1] md:leading-tight text-gray-800">
                                {post?.title ?? ''}
                            </h3>
                            {post?.contentNode ? <div className="flex flex-row gap-4 sm:gap-10 py-6 md:py-12" >
                                <div className="flex flex-col gap-2 w-full h-max justify-center items-center">
                                    <div className="rounded-full w-fit h-fit mt-10">
                                        <ProfilePicture size={40} />
                                    </div>
                                    <span className="text-sm font-medium font-mont text-center">Corina Morera</span>
                                </div>
                                <div >
                                    {documentToReactComponents(post.contentNode, options)}
                                </div>
                            </div> : null}
                        </div>
                    </div>
                </div>
            </DefaultDialog >
        </>
    );
};
