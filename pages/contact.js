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
            <form name="contact" netlify>
              <p>
                <label>
                  Name <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Email <input type="email" name="email" />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
