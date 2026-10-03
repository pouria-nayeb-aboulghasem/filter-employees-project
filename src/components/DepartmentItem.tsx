import type { DepartmentType } from "@/types/department";

type DepartmentItemProps = {
  departmentItem: DepartmentType;
  isActive: boolean;
  handleIsActiveDepartment: () => void;
};

function DepartmentItem({
  departmentItem,
  isActive,
  handleIsActiveDepartment,
}: DepartmentItemProps) {
  return (
    <li
      onClick={handleIsActiveDepartment}
      className={`shrink-0 rounded-xl p-2 department cursor-pointer ${isActive ? "active" : ""}`}
    >
      {departmentItem.Name}
    </li>
  );
}

export default DepartmentItem;
