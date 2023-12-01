import { ScrollButton } from '../../../components/Buttons/ScrollButton';
import { TitleSection } from '../../../components';
import { SectionBase } from '../components/SectionBase';
import { SectionDivider } from '../components/SectionDivider';
import { PostList } from './PostListContentful';

export const Blog = ({ goTo }) => {
  return (
    <SectionBase>
      <SectionDivider />
      <div className="flex flex-col w-full h-full items-center justify-center">
        <TitleSection>Demo Blog Contentful</TitleSection>
        <div className="flex flex-col w-full pt-4">
            <PostList />
        </div>
      </div>
      <ScrollButton color="rgb(157,23,77)" goTo={goTo} />
    </SectionBase>
  );
};
