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

const employeeElementMaker = (employee) => {
let employeeArticle = document.createElement("article")
employeeArticle.classList.add("employee")
employeeArticle.innerHTML = `
  <header class="employee__name">
    <h1>${employee.name}</h1>
  </header>
  <section class="employee__department">
    <p>Works in the ${employee.department} department</p>
  </section>
  <section class="employee__computer">
    <p>Currently using a ${employee.computer}</p>
  </section>
`
return employeeArticle
}

const domInjector = (element) => {
  const output = document.querySelector(".output")
  output.appendChild(element)
}



Promise.all([getEmployees(), getComputers(), getDept()])
.then(response => {
  let employees = response[0]
  let computers = response[1]
  let departments = response[2]
  employees.forEach(employee => {
    departments.forEach(department => {
      if(employee.department === department.id) {
        employee.department = department.name
      }
    })
    computers.forEach(computer => {
      if(employee.computer === computer.id) {
        employee.computer = computer.type
      }
    })
    domInjector(employeeElementMaker(employee))
    })
  }
)
