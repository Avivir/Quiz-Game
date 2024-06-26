import { useState, createContext, useContext } from "react";

export const GameInformationContext = createContext();

export const useGameINformationContext = () => {
  return useContext(GameInformationContext);
};

export const GameInforamtionProvider = ({ children }) => {
  const [information, setNewInformation] = useState({
    playerName: "Player",
    gameMode: "Single",
    category: "",
    difficulty: "",
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
