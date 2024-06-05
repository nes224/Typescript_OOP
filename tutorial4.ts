type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;
function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is an manager in the ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
}

const alice: Employee = { id: 1, name: "alice", department: "Sales" };
const steve: Employee = { id: 2, name: "steve", department: "HR" };
const bob: Manager = { id: 1, name: "bobo", employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(steve);
printStaffDetails(bob)