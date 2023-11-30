const Img = ({ src, func }) => {
  return (
    <div className="md:w-[500px]" onClick={func}>
      <img src={src} className="w-full" />
    </div>
  );
};
export default Img;
