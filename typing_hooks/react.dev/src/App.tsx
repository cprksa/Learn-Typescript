import { useMemo, useState } from "react";

function joinWithoutComma<T>(arr: T[]) {
  return arr.join("");
}

export default function MyApp() {
  const [data, _] = useState<number[]>([1, 9, 3]);
  const derivedData: string = useMemo(() => joinWithoutComma(data), [data]);

  return (
    <div>
      <p>Derived data as a string: {derivedData}</p>
    </div>
  );
}
