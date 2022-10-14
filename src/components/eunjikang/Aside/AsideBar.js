const AsideBar = ({ name }) => {
  return (
    <div className="aside_bar">
      <span>{name}</span>
      <button>See All</button>
    </div>
  );
};

export default AsideBar;
