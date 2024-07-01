import { useState, createContext, useContext } from "react";

export const QuestionsContext = createContext();

export const useQuestionsContext = () => {
    return useContext(QuestionsContext);
};

export const QuestionsProvider = ({ children }) => {
    const [questions, setQuestions] = useState(null);

    const setQuestionsFromApi = (data) =>{
        setQuestions(data);
    }

    return (
        <QuestionsContext.Provider value={{ setQuestionsFromApi, questions}}>
            {children}
        </QuestionsContext.Provider>
    );
};
