import { Html, useProgress } from "@react-three/drei";
import LoaderSvg from "../images/Loader/loader.svg"

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
    <img src={LoaderSvg} alt="loader" />
      <p
        style={{
          fontSize: 14,
          fontWeight: 800,
        }}
        className="text-ternary-dark dark:text-ternary-light mt-1"
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
