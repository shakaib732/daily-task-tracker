import axios from "axios";
import { createContext } from "react";

const ApiContext = createContext();

function ApiProvider({ children }) {

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
        } catch (err) {
            return error;
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
            return err
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
            return err
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
            return err
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