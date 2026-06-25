import { createContext } from "react";;

export const ApiContext = createContext();

export function ApiProvider({ children }) {

    const config = {
        baseUrl: 'http://localhost:8080',
        apiKey: 'j8ys5hdsogj90-jdgdn&9fkkshdsd'
    };

    return (
        <ApiContext.Provider value={config}>
            {children}
        </ApiContext.Provider>
    )
} 
