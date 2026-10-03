import type { EmployeeType } from "@/types/employee";

type EmployeeItemProps = {
  employee: EmployeeType;
};

function EmployeeItem({ employee }: EmployeeItemProps) {
  const { Department, FullName, Email, EntranceDate } = employee;

  return (
    <li className="space-y-2 bg-white rounded-xl p-4">
      <div>
        <span className="py-1 px-2 bg-gray-600 text-gray-50 rounded-xl text-xs">
          {Department}
        </span>
      </div>

      <article>
        <h6 className="text-bold text-gray-800 text-xl">{FullName}</h6>
      </article>

      <footer className="text-sm flex justify-between items-center gap-2">
        <p>{Email}</p>
        <time dateTime={EntranceDate} className="text-xs text-gray-400">
          {EntranceDate}
        </time>
      </footer>
    </li>
  );
}

export default EmployeeItem;
