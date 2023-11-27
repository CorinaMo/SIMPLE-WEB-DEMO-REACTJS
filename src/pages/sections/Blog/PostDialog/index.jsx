import { UserIcon } from '@heroicons/react/24/outline';
import { DefaultDialog } from '../../../../components/Dialog';
import { conicGradient } from '../../../../components/styles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";

export const PostDialog = ({ post, close, open }) => {
    const Text = ({ children }) => <><p className="pt-2 font-mont break-after-auto text-base first-line:indent-2 first-letter:font-ephesis first-letter:font-extrabold first-letter:pr-4 first-letter:uppercase first-letter:text-6xl">{children}</p> </>;
    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
      },
    };

    return (
        <>
            <DefaultDialog open={open} close={close}>
                <div className="flex flex-col w-screen md:w-[85vw] h-screen bg-white items-start overflow-y-scroll ">
                    <div>
                    <div className="flex relative w-full h-[30%] md:w-full sm:h-[45%] md:h-[70h] lg:h-[95vh] overflow-hidden items-center">
                        {post?.picture
                            ? <img src={'https:' + post?.picture} alt={post?.alt} className="w-max h-auto" />
                            : <div className="w-full h-2/5 md:h-4/5 bg-rainbow" />}
                        <div className={`flex absolute bottom-4 w-full h-fit items-end ${conicGradient}`}>
                            <h3 className="text-xl font-quicksand font-bold leading-tight py-2 px-4 z-10 uppercase w-full h-fit text-white">
                                {post?.title ?? ''}
                            </h3>
                        </div>
                    </div>
                    <div className="max-w-full pt-6 px-6 sm:pt-10 md:pt-16 sm:px-12 md:px-28">
                        <h3 className="flex text-6xl font-ephesis text-center font-bold leading-[0.8] sm:leading-[1] md:leading-tight text-gray-800">
                            {post?.title ?? ''}
                        </h3>
                        {post?.contentNode ? <div className="flex flex-row gap-4 sm:gap-10 py-6 md:py-12" >
                            <div className="flex flex-col gap-2">
                                <div className="rounded-full w-10 h-10 sm:w-12 sm:h-12">
                                    <UserIcon className="w-full h-full" />
                                </div>
                                <span className="text-sm">Corina Morera</span>
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
