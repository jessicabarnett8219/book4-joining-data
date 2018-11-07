

const getEmployees= () => {
  return fetch(`http://localhost:8088/employees/`)
  .then(data => data.json())
}


const getComputers = () => {
  return fetch(`http://localhost:8088/computers/`)
  .then(data => data.json())
}

const getDept = () => {
  return fetch(`http://localhost:8088/departments`)
  .then(data => data.json())
}

Promise.all([getEmployees(), getComputers(), getDept()])
.then(response => console.log(response[0]))