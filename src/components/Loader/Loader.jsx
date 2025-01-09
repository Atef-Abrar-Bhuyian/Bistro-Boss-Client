import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <CircleLoader
        visible={true}
        height="280"
        width="280"
        color="#D1A054"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
