// const cardMaker = (props) => {
//   let employeeCard = document.createElement("article")
//   employeeCard.classList.add("employee")
//   employeeCard.innerHTML = `
//     <header class="employee_name">
//       <h1>${props.name}</h1>
//     </header>
//     <section class="employee_department">
//       <p>"Department"</p>
//     </section>
//     <section class="employee__computer">
//       <p>"Computer"</p>
//     </section>
//   `
//   let outputContainer = document.querySelector(".output")
//   outputContainer.appendChild(employeeCard)
// }



const getEmployee= () => {
  return fetch(`http://localhost:8088/employees/`)
  .then(data => data.json())
  .then(employeeData => {
    employeeData.forEach(employee => {
      let name = employee.name
      let computer = getComputer(employee)
      let dept = getDept(employee)
      console.log(`${name} works in ${dept} and uses a ${computer}`)
    })
  })
}


const getComputer = (employee) => {
  return fetch(`http://localhost:8088/computers/${employee.computer}`)
  .then(data => data.json())
  .then(computerObject => computerObject.type)
  .then(computerType => computerType)
}


const getDept = (employee) => {
  return fetch(`http://localhost:8088/computers/${employee.department}`)
  .then(data => data.json())
  .then(deptObject => deptObject.name)
  .then(deptObject => deptObject)
}



getEmployee()