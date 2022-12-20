export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: (employeeArray) => Object.keys(employeeArray).length,
  };
}
