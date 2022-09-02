import { createContext, useContext, useState } from "react";

type Context = {
    activeClass: number;
    setActiveClass: (path: number) => void;
};

type Children = {
    children: React.ReactNode
}

export const Context = createContext<Context>({
    activeClass: 1,
    setActiveClass: () => { }
});

export const Provider = ({ children }: Children) => {
    const [activeClass, setActiveClass] = useState(1);
    return (
        <Context.Provider value={{ activeClass, setActiveClass }}>
            {children}
        </Context.Provider>
    )
}

export const useCharacterContext = () => {
    return useContext(Context)
}
