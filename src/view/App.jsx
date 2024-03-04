/* // 1. starting point
import { useState } from "react";
import TopBar from "./TopBar";
import NameInput from "./NameInput";

export default function App() {
  const [booksCount, setBooksCount] = useState(2);

  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <div className="hbox space-between mt20">
        <h3 className="paragraph">Book counter: {booksCount}</h3>
        <button className="button" onClick={() => setBooksCount(booksCount + 1)}>
          add Book
        </button>
      </div>
      <br />
      <hr />
      <NameInput />
    </div>
  );
} */

/* // 2. Using the Books component instances
import TopBar from "./TopBar";
import NameInput from "./NameInput";
import Books from "./Books";

export default function App() {
  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <Books/>
      <Books/>
      <Books/>
      <br />
      <hr />
      <NameInput />
    </div>
  );
} */

/* // 3. Using the 3 different components
import TopBar from "./TopBar";
import NameInput from "./NameInput";
import Books from "./Books";
import Customers from "./Customers";
import Employees from "./Employees";

export default function App() {
  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <Books/>
      <Customers/>
      <Employees/>
      <br />
      <hr />
      <NameInput />
    </div>
  );
} */

// 4. Using the 3 Counter instances with props
import TopBar from "./TopBar";
import NameInput from "./NameInput";
import Counter from "./Counter";

export default function App() {
  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <Counter item={"Book"}/>
      <Counter item={"Customer"}/>
      <Counter item={"Employee"}/>
      <br />
      <hr />
      <NameInput />
    </div>
  );
}

