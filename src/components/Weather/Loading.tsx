import spinner from "../../assets/animations/spinner.gif";

const Loading = () => {
  return (
    <div>
      <img className="loading" src={spinner} alt="logo" />
    </div>
  );
};

export default Loading;
