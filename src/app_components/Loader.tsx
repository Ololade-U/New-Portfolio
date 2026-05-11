import { useEffect, useState } from "react";
import logo from "../assets/portfolio-logo.png";

type LoaderProps = {
  visible: boolean;
};

const Loader = ({ visible }: LoaderProps) => {
  const [shouldRender, setShouldRender] = useState(visible);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      setIsExiting(false);
      return;
    }

    if (shouldRender) {
      setIsExiting(true);
      const timeoutId = window.setTimeout(() => {
        setShouldRender(false);
        setIsExiting(false);
      }, 500);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }
  }, [visible, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div className={`loader-overlay${isExiting ? " loader-exit" : ""}`}>
      <div className="loader-frame">
        <div className="loader-ring" />
        <img src={logo} alt="Portfolio logo" className="loader-logo" />
      </div>
    </div>
  );
};

export default Loader;
