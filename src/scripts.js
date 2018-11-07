const cardMaker = (props) => {
  let employeeCard = document.createElement("article")
  employeeCard.classList.add("employee")
  employeeCard.innerHTML = `
    <header class="employee_name">
      <h1>${props.name}</h1>
    </header>
    <section class="employee_department">
      <p>"Department"</p>
    </section>
    <section class="employee__computer">
      <p>"Computer"</p>
    </section>
  `
  let outputContainer = document.querySelector(".output")
  outputContainer.appendChild(employeeCard)
}


fetch("http://localhost:8088/employees/")
.then (data => data.json())
.then(jsdata => {
  jsdata.forEach(employee => {
    cardMaker(employee)
  })
})