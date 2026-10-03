import { getDepartments } from "@/services/departmentService";
import { useState } from "react";
import DepartmentItem from "./DepartmentItem";
import type { DepartmentType } from "@/types/department";
import type { EmployeeType } from "@/types/employee";
import {
  filterEmployeesByDepartment,
  getEmployees,
} from "@/services/employeeService";

type DepartmentListProps = {
  setEmployeeList: React.Dispatch<React.SetStateAction<EmployeeType[]>>;
};

function DepartmentList({ setEmployeeList }: DepartmentListProps) {
  const [departmentList] = useState<DepartmentType[]>(getDepartments());
  const [activeDepartment, setActiveDepartment] = useState<string>("All");

  function handleFilterEmployees(departmentName: string) {
    if (departmentName === "All") {
      setEmployeeList(getEmployees());
      setActiveDepartment("All");

      return;
    }

    setEmployeeList(filterEmployeesByDepartment(departmentName));
    setActiveDepartment(departmentName);
  }

  return (
    <div className="container mx-auto px-4 my-4">
      <ul className="flex flex-nowrap gap-4 overflow-auto scrollbar-none">
        {departmentList.map((departmentItem) => (
          <DepartmentItem
            key={departmentItem.Id}
            departmentItem={departmentItem}
            isActive={activeDepartment === departmentItem.Name}
            handleIsActiveDepartment={() =>
              handleFilterEmployees(departmentItem.Name)
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default DepartmentList;
