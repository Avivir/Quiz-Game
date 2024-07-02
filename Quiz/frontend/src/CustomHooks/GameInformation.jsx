import { useState, createContext, useContext } from "react";

export const GameInformationContext = createContext();

export const useGameInformationContext = () => {
  return useContext(GameInformationContext);
};

export const GameInformationProvider = ({ children }) => {
  const [information, setNewInformation] = useState({
    playerName: "Player",
    questionsAmount: 1,
    categoryId: 9,
    categoryName: "General Knowledge",
    difficulty: "easy",
    totalPoints: 0,
  });

  const setNewInfo = (key, value) => {
    setNewInformation((prevInfo) => ({
      ...prevInfo,
      [key]: value,
    }));
  };

  const getInformationAsJson = () => {
    return JSON.stringify(information);
  };

  return (
    <GameInformationContext.Provider
      value={{ information, getInformationAsJson, setNewInfo }}
    >
      {children}
    </GameInformationContext.Provider>
  );
};
