import { Button } from "antd";
import "./ShowResult.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ShowResult() {
  const [showResult, setShowResult] = useState(true);

  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-100">
      {showResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center blur-bg">
          <div className="w-3/4 h-2/3 border-8 bg-color p-4 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-2xl font-bold mb-4">
                Congratulations Player
              </h1>
              <p className="text-lg mb-4">Your score: 10</p>
              <div>
                <Link to="/setup">
                  <Button className="m-2" type="primary">
                    Play Again
                  </Button>
                </Link>

                <Link to="/index">
                  <Button className="m-2" type="default">
                    Back to main menu
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
