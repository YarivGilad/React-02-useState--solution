import { useState } from "react";

export default function Name_input() {
  const [name, setName] = useState("???");

  return (
    <div className="vbox mt20">
      <div className="hbox space-between">
        <h1 className="paragraph">What is your name?</h1>
        <input
          type="text"
          className="input cap"
          placeholder="Your name here..."
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <br />
      <h3 className="paragraph text-left white-text cap">
        Your answer: {name}
      </h3>
    </div>
  );
}
