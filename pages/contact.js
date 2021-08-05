import { useState } from "react";

export default function contact() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <head>
        <title>A Contact Page</title>
      </head>

      <div className="container">
        <main>
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
          <div>
            This is the counter: {count}
            <p>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                Add
              </button>
              <button
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                Subtract
              </button>
            </p>
            <form name="contact" action="/success" method="POST" data-netlify="true">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" autoComplete="name" required />
              <button type="submit">Register</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
