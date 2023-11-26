export const handleScroll = (nextSectionRef) => {
    if (nextSectionRef) {
        nextSectionRef.scrollIntoView({ behavior: "smooth" });
      }
};