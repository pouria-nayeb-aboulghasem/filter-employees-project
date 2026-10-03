import DepartmentList from "@/components/DepartmentList";
import EmployeeList from "@/components/EmployeeList";
import { getEmployees } from "./services/employeeService";
import type { EmployeeType } from "./types/employee";
import { useState } from "react";

function App() {
  const [employeeList, setEmployeeList] =
    useState<EmployeeType[]>(getEmployees());

  return (
    <>
      <DepartmentList setEmployeeList={setEmployeeList} />
      <EmployeeList employeeList={employeeList} />
    </>
  );
}

export default App;
