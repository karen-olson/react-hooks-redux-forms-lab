import { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onBandSubmit(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label name="name">
        name
        <input name="band-name" onChange={handleChange} value={name} />
      </label>
      <button type="submit">Add Band</button>
    </form>
  );
}

export default BandInput;
