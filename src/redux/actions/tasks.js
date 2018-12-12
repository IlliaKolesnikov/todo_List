import axios from 'axios';

const API_URL = 'http://ec2-54-88-87-181.compute-1.amazonaws.com:4000';

export function addTask(projectId, name, time, length) {
    return dispatch => {
        axios.post(`${API_URL}/${localStorage.userId}/projects/${projectId}/tasks`,
            {
                task_name: name,
                priority_id: length,
                deadline: time
            }, { headers: { token: localStorage.getItem('token') } })
            .then(json => {console.log(json)
            dispatch({ type: 'ADD_TASK', payload: json.data.task})
            })
            .catch(error => console.log(error.response.data.errors))

    }
}

export function deleteTask(projectId, taskId) {
    return dispatch => {
        axios.delete(`${API_URL}/${localStorage.userId}/projects/${projectId}/tasks/${taskId}`,
            { headers: { token: localStorage.getItem('token') } })
            .then(json => {console.log(json)
            dispatch({ type: 'DELETE_TASK', payload: json.data.task, taskId: taskId})
            })
            .catch(error => console.log(error.response.data.errors))

    }
}

export function updateTask(projectId, taskId, editedTask) {
    return dispatch => {
        axios.put(`${API_URL}/${localStorage.userId}/projects/${projectId}/tasks/${taskId}`,
            { task_name: editedTask.task_name, deadline: editedTask.deadline,
              priority_id: 2, is_done: true, },
            { headers: { token: localStorage.getItem('token') } })
            .then(json => {console.log(json)
           dispatch({ type: 'UPDATE_TASK', payload: json.data.task, taskId: taskId})
            })
            .catch(error => console.log(error.response.data.errors))

    }
}