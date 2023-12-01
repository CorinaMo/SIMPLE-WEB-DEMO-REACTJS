export const handleScroll = (nextSectionRef) => {
    if (nextSectionRef) {
        nextSectionRef.scrollIntoView({ behavior: "smooth" });
      }
};

export const handleScrollPostList = (targetRef, next) => {
  if (targetRef?.current) {
    const targetElement = targetRef.current;
    const visibleWidth = targetElement.clientWidth;
    if (next) targetElement.scrollLeft += visibleWidth;
    else targetElement.scrollLeft -= visibleWidth;
  }
};