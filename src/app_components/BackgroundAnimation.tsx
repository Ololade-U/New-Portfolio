import { useState, useEffect } from "react";
import "./BackgroundAnimation.css";

const BALL_SIZE = 10;
const CONTAINER_HEIGHT_PERCENT = 100;
const SPEED = 0.1;

const BackgroundAnimation = () => {
  const [ballY, setBallY] = useState(0);
  const [ballY2, setBallY2] = useState(100);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    let animationFrameId: number;

    const animateBall2 = () => {
      setBallY2((prevY) => {
        let newY = prevY - direction * SPEED;

        const maxPosition = CONTAINER_HEIGHT_PERCENT - BALL_SIZE / 10;

        if (newY >= maxPosition) {
          setDirection(1);
          newY = 0;
        } else if (newY <= 0) {
          setDirection(-1);
          newY = maxPosition;
        }
        return newY;
      });

      animationFrameId = requestAnimationFrame(animateBall2);
    };
    animationFrameId = requestAnimationFrame(animateBall2);

    

    const animateBall = () => {
      setBallY((prevY) => {
        let newY = prevY + direction * SPEED;

        const maxPosition = CONTAINER_HEIGHT_PERCENT - BALL_SIZE / 10;

        if (newY >= maxPosition) {
          setDirection(1);
          newY = 0;
        } else if (newY <= 0) {
          setDirection(1);
          newY = maxPosition;
        }
        return newY;
      });

      animationFrameId = requestAnimationFrame(animateBall);
    };

    animationFrameId = requestAnimationFrame(animateBall);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };

  }, [direction]);

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
