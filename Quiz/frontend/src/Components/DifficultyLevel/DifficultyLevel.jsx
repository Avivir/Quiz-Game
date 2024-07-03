import { Button } from "antd";
import { useState } from "react";
import { useGameInformationContext } from "../../CustomHooks/GameInformation";
import { useStepContext } from "../../CustomHooks/StepContext";
import { useNavigate } from "react-router-dom";
import { useQuestionsContext } from "../../CustomHooks/QuestionsContext.jsx";
import { useTimeContext } from "../../CustomHooks/TimeContext.jsx";

export default function DifficultyLevel() {
  const [selectedButton, setSelectedButton] = useState("easy");
  const { getInformationAsJson, setNewInfo } = useGameInformationContext();
  const { decrementStep } = useStepContext();
  const { setQuestionsFromApi } = useQuestionsContext();
  const { setNewQuestionService } = useTimeContext();
  const navigate = useNavigate();
  const [loadings, setLoadings] = useState(false);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const startHandle = async (selectedButton) => {
    setLoadings(true);
    setNewInfo("difficulty", selectedButton);

    await wait(100);

    let questions = null;
    try {
      const response = await fetch(
        "http://localhost:8080/api/questions/get/filter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: getInformationAsJson(),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log(getInformationAsJson());
      questions = await response.json();

      console.log("Pobrano pytania:", questions);
    } catch (error) {
      console.error("Błąd podczas pobierania pytań:", error);
    }

    setQuestionsFromApi(questions);
    setNewQuestionService();

    setLoadings(false);
    navigate("/game");
  };

  return (
    <div className="flex h-auto flex-col w-auto justify-center items-center">
      <div>
        <div className="flex flex-col gap-4 w-48">
          <Button
            type={selectedButton === "easy" ? "primary" : "default"}
            onClick={() => setSelectedButton("easy")}
            size="large"
          >
            Easy
          </Button>
          <Button
            type={selectedButton === "medium" ? "primary" : "default"}
            onClick={() => setSelectedButton("medium")}
            size="large"
          >
            Medium
          </Button>
          <Button
            type={selectedButton === "hard" ? "primary" : "default"}
            onClick={() => setSelectedButton("hard")}
            size="large"
          >
            Hard
          </Button>
        </div>
        <div className="mt-8 flex justify-center w-auto gap-4 mb-5">
          <Button type="default" onClick={() => decrementStep()}>
            Back
          </Button>
          <Button
            loading={loadings}
            type="primary"
            onClick={() => startHandle(selectedButton)}
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  );
}
