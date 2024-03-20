import { useState } from "react";

export default function useFormInput(initValue) {
  const [value, setValue] = useState(initValue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return [value, handleChange];
}
