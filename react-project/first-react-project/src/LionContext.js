import { createContext } from "react";

const virtualData = [
    {
        id: 1,
        name: "오성훈",
        text: "FrontEnd",
        age: 25,
    },
    {
        id: 2,
        name: "홀란드",
        text: "backEnd",
        age: 23,
    },
    {
        id: 3,
        name: "이강인",
        text: "react",
        age: 24,
    },
    {
        id: 4,
        name: "그리즈만",
        text: "server",
        age: 22,
    },
    {
        id: 5,
        name: "손흥민",
        text: "soccer",
        age: 26,
    },
];

export const LionContext = createContext();

export const LionProvider = ({ children }) => {
    const sharedValue = virtualData;

    return(
        <LionContext.Provider value={{data: sharedValue}}>
            {children}
        </LionContext.Provider>
    );
};