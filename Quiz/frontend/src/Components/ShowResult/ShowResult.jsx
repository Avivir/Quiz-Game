import { Button } from "antd";
import "./ShowResult.css";
import { useNavigate } from "react-router-dom";
import { useGameInformationContext } from "../../CustomHooks/GameInformation.jsx";

export default function ShowResult() {
  const { information, getInformationAsJson } = useGameInformationContext();
  const navigate = useNavigate();


  const handlePassDataToBackend = (endpoint) => {
   addPlayerScore()

    navigate(endpoint);
  };

  const addPlayerScore = () => {
      fetch(
          "http://localhost:8080/api/players/add",
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: getInformationAsJson()
          }
      ).then(r => {
          console.log("Your record added")
      }).catch(reason => {
          console.log("There was a problem while add user record to db" , reason)
      });
  }

  return (
    <div className="relative h-auto flex items-center justify-center bg-gray-100">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center blur-bg">
        <div className="w-3/4 h-2/3 border-8 bg-color p-4 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-2xl font-bold mb-4">
              Congratulations: {information["playerName"]}
            </h1>
            <p className="text-lg mb-4">
              Your score: {information["totalPoints"]}
            </p>
            <div>
              <Button
                onClick={() => handlePassDataToBackend("/setup")}
                className="m-2"
                type="primary"
              >
                Play Again
              </Button>
              <Button
                onClick={() => handlePassDataToBackend("/")}
                className="m-2"
                type="default"
              >
                Back to main menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
