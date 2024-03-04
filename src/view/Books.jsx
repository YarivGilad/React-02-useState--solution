import { useState } from "react";

export default function Books() {
  const [booksCount, setBooksCount] = useState(2);

  return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">Book counter: {booksCount}</h3>
        <button className="button" onClick={() => setBooksCount(booksCount + 1)}>
          add Book
        </button>
      </div>
  );
}
