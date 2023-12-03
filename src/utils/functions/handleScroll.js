// Handle scroll between sections at Home
export const handleScroll = (nextSectionRef) => {
    if (nextSectionRef) {
        nextSectionRef.scrollIntoView({ behavior: "smooth" });
      }
};

// Handle scroll between posts in the row of posts
export const handleScrollPostList = (targetRef, next) => {
  if (targetRef?.current) {
    const targetElement = targetRef.current;
    const visibleWidth = targetElement.clientWidth;
    if (next) targetElement.scrollLeft += visibleWidth;
    else targetElement.scrollLeft -= visibleWidth;
  }
};