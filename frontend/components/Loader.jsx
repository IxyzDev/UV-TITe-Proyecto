import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className="flex justify-center m-20">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
