import { createContext, useContext, useState } from "react";

type Context = {
    activeClass: number;
    setActiveClass: (path: number) => void;
    scale: number;
    setScale: (path: number) => void;
};

type Children = {
    children: React.ReactNode
}

export const Context = createContext<Context>({
    activeClass: 1,
    setActiveClass: () => { },
    scale: 1,
    setScale: () => { }
});

export const Provider = ({ children }: Children) => {
    const [activeClass, setActiveClass] = useState(1);
    const [scale, setScale] = useState(1);

    return (
        <Context.Provider value={{ activeClass, setActiveClass, scale, setScale }}>
            {children}
        </Context.Provider>
    )
}

export const useCharacterContext = () => {
    return useContext(Context)
}
