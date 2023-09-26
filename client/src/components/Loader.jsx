import { Html, useProgress } from "@react-three/drei";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

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
      <CircularProgress />
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
