export default function createIteratorObject(report) {
  const employee = [];
  const employeesInDepts = report.allEmployees;
  Object.entries(employeesInDepts).forEach((department) => {
    employee.push(...department[1]);
  });
  return employee;
}
