

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
.then(response => {
  let employees = response[0]
  let computers = response[1]
  let departments = response[2]
  employees.forEach(employee => {
    departments.forEach(department => {
      if(employee.department === department.id) {
        console.log(`${employee.name} works for ${department.name}`)
      }
    })
    computers.forEach(computer => {
      if(employee.computer === computer.id) {
        console.log(`${employee.name} uses a ${computer.type} `)
      }
    })
  })

  }
)
