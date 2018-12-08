import axios from 'axios';

const API_URL = 'http://ec2-54-88-87-181.compute-1.amazonaws.com:4000';
export const configToGet = () => ({
    headers: {
        token: localStorage.token,
        user_id: localStorage.userId
    }
});

export const configToPost = {
    headers: { token: localStorage.getItem('token') }
};

export function addProject() {
    return dispatch => {
        axios.post(`${API_URL}/${localStorage.userId}/projects`, {
            project_name: "secondTrasfy",
            color: "#005000",
        }, {headers: { token: localStorage.getItem('token') } })
        dispatch({ type: 'ADD_PROJECT', payload: {
            project_name: "secondTrasfy",
            color: "#005000",
        } })
        
    }
}

export function getProjects() {
    return dispatch => {
        axios.get(`${API_URL}/`, {headers: {
        token: localStorage.token,
        user_id: localStorage.userId
    } })
            .then(json => dispatch({ type: 'LOAD_PROJECTS_SUCCESS', payload: json.data.projects }))
            .catch(error => { console.log(error.response.data.errors)
                dispatch({ type: 'LOAD_PROJECTS_FAILED', payload: error.response.data.errors[0] })}
            )
    }
}
