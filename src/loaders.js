import { baseUrl } from "./base_url";

export const entriesLoader = async () => {
    // make a call to backend index route
    const response = await fetch(`${baseUrl}/travel`)
    // convert the ersponse into a js object
    const entries = await response.json()
    // return the entries
    return entries
};

export const entryLoader = async ({params}) => {
    // get the id param from the params object
    const id = params.id
    // make a call to backend show route
    const response = await fetch(`${baseUrl}/travel/${id}`)
    // convert the resposne into a js object
    const entry = await response.json()
    // return the entry
    return entry
};