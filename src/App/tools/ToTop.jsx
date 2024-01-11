const ToTop = () => {
  return (
    <div className="top">
      <img
        src="/arrow-icon.svg"
        alt="arrow"
        onClick={() => window.scrollTo(0, 0)}
      />
    </div>
  );
};

export default ToTop;
