import type { EmployeeType } from "@/types/employee";
import EmployeeItem from "./EmployeeItem";

type EmployeeListProps = {
  employeeList: EmployeeType[];
};

function EmployeeList({ employeeList }: EmployeeListProps) {
  return (
    <div className="container mx-auto px-4 my-4">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between items-center">
        {employeeList.map((employee) => (
          <EmployeeItem key={employee.Id} employee={employee} />
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
