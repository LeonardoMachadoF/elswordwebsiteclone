import { createContext, useContext, useState } from "react";

type Context = {
    scale: number;
    setScale: (path: number) => void;
};

type Children = {
    children: React.ReactNode
}

export const Context = createContext<Context>({
    scale: 1,
    setScale: () => { }
});

export const Provider = ({ children }: Children) => {
    const [scale, setScale] = useState(1);
    return (
        <Context.Provider value={{ scale, setScale }}>
            {children}
        </Context.Provider>
    )
}

export const useScaleContext = () => {
    return useContext(Context)
}
