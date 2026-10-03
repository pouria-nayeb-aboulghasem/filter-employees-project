import departmentList from "@/data/departments.json";

function getDepartments() {
  return [{ Id: 0, Name: "All" }, ...departmentList];
}

export { getDepartments };
