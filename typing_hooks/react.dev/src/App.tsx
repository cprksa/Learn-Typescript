import { useState, useCallback } from "react";

export default function Form() {
  const [valueA, setValueA] = useState("Start typing...");
  const [valueB, setValueB] = useState("Start typing...");

  const handleChangeA = useCallback<
    (e: React.ChangeEvent<HTMLInputElement>, t: number) => void
  >(
    (event, times) => {
      const newValue = event.target.value.repeat(times);
      setValueA(newValue);
    },
    [setValueA],
  );

  const handleChangeB = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, times: number) => {
      const newValue = event.target.value + times;
      setValueB(newValue);
    },
    [setValueB],
  );

  return (
    <>
      <h1>Form</h1>
      <Part n={10} v={valueA} onChange={handleChangeA} />
      <Part n={5} v={valueB} onChange={handleChangeB} />
    </>
  );
}

type PartProps = {
  n: number;
  v: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, t: number) => void;
};

function Part({ n, v, onChange }: PartProps) {
  return (
    <>
      <input onChange={(e) => onChange(e, n)} />
      <p>Value: {v}</p>
    </>
  );
}
