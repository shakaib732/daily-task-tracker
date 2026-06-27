import { createContext, useState } from "react";
import ErrorModal from "./ErrorModal";
const ErrorContext = createContext();

function ErrorProvider({ children }) {

    const [error, setError] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const showError = (message) => {
        setError(message);
        setIsOpen(true);
    };

    const closeError = () => {
        setError("");
        setIsOpen(false);
    };

    const modal = {
        showError,
        closeError
    };

    return (
        <ErrorContext.Provider value={modal}>

            {children}

            {
                isOpen &&
                <ErrorModal
                    message={error}
                    closeModal={closeError}
                />
            }

        </ErrorContext.Provider>
    );
}

export { ErrorContext, ErrorProvider };