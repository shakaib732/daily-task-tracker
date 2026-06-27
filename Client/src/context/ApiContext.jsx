import axios from "axios";
import { createContext,useContext } from "react";
import {ErrorContext} from '../errorProvider/errorContext'

const ApiContext = createContext();

function ApiProvider({ children }) {
    const {showError} = useContext(ErrorContext)

    const baseUrl = "http://localhost:8080";
    const apiKey = "j8ys5hdsogj90-jdgdn&9fkkshdsd";

    const fetch = async (path) => {
        try {
            const res = await axios.get(`${baseUrl + path}`, {
                headers: {
                    "x-api-key": apiKey
                }
            });

            return res.data;
        } catch (error) {
            showError(error.response?.data?.message)
            throw error;
        }
    };

    const post = async (path, formData) => {
        try {
            const res = await axios.post(
                `${baseUrl + path}`,
                formData,
                {
                    headers: {
                        'x-api-key': apiKey
                    }
                }
            )
            return res.data;
        }
        catch(err){
            showError(error.response?.data?.message)
            throw error;
        }
    }

    const put = async (path, formData) => {
        try {
            const res = await axios.put(
                `${baseUrl + path}`,
                formData,
                {
                    headers: {
                        'x-api-key': apiKey
                    }
                }
            )
            return res.data;
        }
        catch(err){
            showError(error.response?.data?.message)
            throw error;
        }
    }

    const deleteTask = async (path) => {
        try {
            const res = await axios.delete(
                `${baseUrl + path}`,
                {
                    headers: {
                        'x-api-key': apiKey
                    }
                }
            )
            return res.data;
        }
        catch(err){
            showError(error.response?.data?.message)
            throw error;
        }
    }

    const api = {
        baseUrl,
        apiKey,
        fetch,
        post,
        put,
        deleteTask
    };


    return (
        <ApiContext.Provider value={api}>
            {children}
        </ApiContext.Provider>
    );
}

export { ApiContext, ApiProvider };