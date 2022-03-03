import React from "react";
import BandInput from "./BandInput";

import { bandAdded } from "./bandsSlice";
import { useSelector, useDispatch } from "react-redux";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);

  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
  }

  const bandList = bands.map((band) => <li key={band}>{band}</li>);

  return (
    <div>
      <p>Bands Container</p>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>{bandList}</ul>
    </div>
  );
}

export default BandsContainer;
