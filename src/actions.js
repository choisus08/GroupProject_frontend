import { baseUrl } from "./base_url";
import { redirect } from "react-router-dom";

export const createAction = async ({request}) => {
    // get the data from the form in the request
    const formData = await request.formData()
    const newEntry = {
        location: formData.get('location'),
        landmark: formData.get('landmark'),
        image: formData.get('image'),
        dates: formData.get('dates')
    }
    // send the new entry to our backend API 
    await fetch (`${baseUrl}/travel`, {
        // tell fetch to make a post request
        method: "POST",
        credentials: 'include',
        headers: {
            // tells our backend the data is json
            "Content-Type": "application/json"
        },
        // send the json string of the newEntry object
        body: JSON.stringify(newEntry)
    })
    // redirect the user back to the frontend index route
    return redirect('/dashboard')
};

export const updateAction = async ({request, params}) => {
    // grab the id from the params
    const id = params.id
    // grab the form data from the form
    const formData = await request.formData()
    // build out the updated person
    const updatedEntry = {
        location: formData.get('location'),
        landmark: formData.get('landmark'),
        image: formData.get('image'),
        dates: formData.get('dates')
    }
    // send the updated person to our backend API
    await fetch (`${baseUrl}/travel/${id}`, {
        // tell fetch to make a put request
        method: "PUT",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        // send the json string of the updatedEntry object
        body: JSON.stringify(updatedEntry)
    })
    // redirect back to show page fronend route
    return redirect(`/${id}`)
};

export const deleteAction = async ({params}) => {
    // grab the id from the params
    const id = params.id
    // send the delete request to backend API
    await fetch (`${baseUrl}/travel/${id}`, {
        // tell fetch to make a delete request
        method: "DELETE",
        credentials: 'include'
        //no headers or body required 
    })
    // redirect back to the frontend index route
    return redirect('/dashboard')
};

export const signupAction = async ({request}) => {
    // get the form data
    const formData = await request.formData()
    // build out the new user
    const newUser = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    // send the new user to our backend API
    const response = await fetch (`${baseUrl}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newUser)
    })

    // check if status is 400 or more
    if (response.status >= 400) {
        // alert the details of the error
        alert(response.statusText)
        // redirect back to the frontend signup route
        return redirect('/signup')
    }
    // redirect back to the frontend login route
    return redirect('/login')
};

export const loginAction = async ({request}) => {
    const formData = await request.formData()
    const user = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    if (response.status >= 400) {
        alert(response.statusText)
        return redirect('/login')
    }
    localStorage.setItem('loggedIn', JSON.stringify({status: true}))
    return redirect('/dashboard')
};