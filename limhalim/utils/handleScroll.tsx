const HandleScroll = ({
  threshold,
  setScroll,
}: {
  threshold: number;
  setScroll: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (window.scrollY >= threshold) return setScroll(true);

  setScroll(false);
};

export default HandleScroll;
