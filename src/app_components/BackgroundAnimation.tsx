import { useState, useEffect, useRef } from "react";
import "./BackgroundAnimation.css";

const BALL_SIZE = 10;
const CONTAINER_HEIGHT_PERCENT = 100;
const SPEED = 0.1;

const BackgroundAnimation = () => {
  const [ballY, setBallY] = useState(0);
  const [ballY2, setBallY2] = useState(100);
  const directionRef = useRef(1);

  useEffect(() => {
    let animationFrameId1: number;
    let animationFrameId2: number;

    const animateBall = () => {
      setBallY((prevY) => {
        let newY = prevY + directionRef.current * SPEED;

        if (newY >= CONTAINER_HEIGHT_PERCENT) {
          directionRef.current = -1;
          newY = CONTAINER_HEIGHT_PERCENT;
        } else if (newY <= 0) {
          directionRef.current = 1;
          newY = 0;
        }
        return newY;
      });

      animationFrameId1 = requestAnimationFrame(animateBall);
    };

    const animateBall2 = () => {
      setBallY2((prevY) => {
        let newY = prevY - directionRef.current * SPEED;

        if (newY >= CONTAINER_HEIGHT_PERCENT) {
          directionRef.current = 1;
          newY = 0;
        } else if (newY <= 0) {
          directionRef.current = -1;
          newY = CONTAINER_HEIGHT_PERCENT;
        }
        return newY;
      });

      animationFrameId2 = requestAnimationFrame(animateBall2);
    };

    animationFrameId1 = requestAnimationFrame(animateBall);
    animationFrameId2 = requestAnimationFrame(animateBall2);

    return () => {
      cancelAnimationFrame(animationFrameId1);
      cancelAnimationFrame(animationFrameId2);
    };
  }, []);

  const ballStyle = {
    top: `${ballY}%`,
    width: `${BALL_SIZE}px`,
    height: `${BALL_SIZE}px`,
  };

  const ballStyle2 = {
    top: `${ballY2}%`,
    width: `${BALL_SIZE}px`,
    height: `${BALL_SIZE}px`,
  };

  return (
    <div className="animation-container">
      <div className="dotted-line"></div>
      <div className="moving-ball" style={ballStyle}></div>
      <div className="dotted-line2"></div>
      <div className="moving-ball2" style={ballStyle2}></div>
      <div className="dotted-line3"></div>
      <div className="moving-ball3" style={ballStyle}></div>
      <div className="dotted-line4"></div>
      <div className="moving-ball4" style={ballStyle2}></div>
    </div>
  );
};

export default BackgroundAnimation;
