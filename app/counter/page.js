"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>

      <p>Nilai: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Tambah
      </button>

      <button onClick={() => setCount(count - 1)}>
        Kurang
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}