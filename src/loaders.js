import { baseUrl } from "./base_url";
import { redirect } from "react-router-dom";

const authCheck = () => {
    const loggedIn = localStorage.getItem('loggedIn')
    if (!loggedIn) {
        return false
    }
    return true
};

export const entriesLoader = async () => {
    if (!authCheck()) {
        return redirect('/login')
    };
    // make a call to backend index route
    const response = await fetch(`${baseUrl}/travel`, {
        credentials: 'include'
    })
    // convert the ersponse into a js object
    const entries = await response.json()
    // return the entries
    return entries
};

export const entryLoader = async ({params}) => {
    if (!authCheck()) {
        return redirect('/login')
    };
    // get the id param from the params object
    const id = params.id
    // make a call to backend show route
    const response = await fetch(`${baseUrl}/travel/${id}`, {
        credentials: 'include'
    })
    // convert the resposne into a js object
    const entry = await response.json()
    // return the entry
    return entry
};

export const mainLoader = async () => {
    if (authCheck()) {
        return redirect('/dashboard')
    }
    return {}
};