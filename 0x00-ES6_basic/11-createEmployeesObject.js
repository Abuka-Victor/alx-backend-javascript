export default function createEmployeesObject(departmentName, employees) {
  const employeeObject = {};
  employeeObject[departmentName] = employees;
  return employeeObject;
}
