//Service que contém todos os métodos para tratar informações. 

export const getLocalTasks = (date) => {   
    const localResponse = localStorage.getItem(generateDateKey(date));

    if (localResponse)
        return JSON.parse(localResponse);

    return undefined;
}

function generateDateKey(date) { 
    const dateSplited = date.toString().split(" ");
    const key = dateSplited[1] + dateSplited[2];
    return key;
}

export const insertValue = (date, taskValue, hourValue) => {
    const key = generateDateKey(date);
    const localResponse = localStorage.getItem(key);
    let tasksValues;

    if (localResponse) {
        localStorage.removeItem(key);
        tasksValues = JSON.parse(localResponse);
        tasksValues.push({ taskValue, hourValue });
    }
    else {
        tasksValues = [{
            taskValue,
            hourValue
        }]
    }

    if (tasksValues)
        localStorage.setItem(key, JSON.stringify(tasksValues))
}

export const updateValues = (date, tasks) => {
    const key = generateDateKey(date);

    if (tasks.length > 0)
        localStorage.setItem(key, JSON.stringify(tasks));
    else
        localStorage.removeItem(key);
}