import React, { useState } from "react";
import anime from "animejs";

export default function RocketAnimation() {
  const [runCount, setRunCount] = useState(0);

  const handleRun = () => {
    setRunCount((prev) => prev + 1);

    anime({
      targets: ".rocket",
      translateX: [0, 500], // 火箭沿著軌道從左到右移動
      easing: "easeInOutSine",
      duration: 2000,
      complete: () => {
        anime.set(".rocket", { translateX: 0 }); // 動畫結束後重置位置
      }
    });
  };

  return (
    <div className="container">
      <div className="track">
        <div className="rocket">🚀</div>
      </div>
      <button onClick={handleRun}>RUN</button>
      <p>恭喜你跑了 {runCount} 次,你還剩下 {runCount+1}次</p>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: black;
          color: white;
        }
        .track {
          width: 500px;
          height: 2px;
          border-top: 2px dashed white;
          position: relative;
          margin-bottom: 20px;
        }
        .rocket {
          position: absolute;
          top: -20px;
          font-size: 30px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          background-color: white;
          color: black;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #ddd;
        }
      `}</style>
    </div>
  );
}
