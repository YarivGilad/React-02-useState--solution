import { useState } from "react";

export default function Employees() {
  const [employeesCount, setEmployeesCount] = useState(2);

  return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">Employee counter: {employeesCount}</h3>
        <button className="button" onClick={() => setEmployeesCount(employeesCount + 1)}>
          add Employee
        </button>
      </div>
  );
}
