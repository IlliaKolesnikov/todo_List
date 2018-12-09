import axios from 'axios';

const API_URL = 'http://ec2-54-88-87-181.compute-1.amazonaws.com:4000';

export function addTask(projectId, name, time) {
    return dispatch => {
        axios.post(`${API_URL}/${localStorage.userId}/projects/${projectId}/tasks`,
            {
                task_name: name,
                priority_id: 2,
                deadline: time
            }, { headers: { token: localStorage.getItem('token') } })
            .then(json => {console.log(json)
            dispatch({ type: 'ADD_TASK', payload: json.data.task, id: projectId})
            })
            .catch(error => console.log(error.response.data.errors))

    }
}