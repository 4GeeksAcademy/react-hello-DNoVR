import React from "react";

const Digit = ({ value }) => {
  // aqui mis dudas, al no usar hooks, mire que puedo llamrarlo o con "key" o la otra opcion, la que ves acontinuacion.
  const count = String(value).padStart(6, "0");

  // extraemos digitos 6 veces (tal y como pide JD)
  const d1 = count[0];
  const d2 = count[1];
  const d3 = count[2];
  const d4 = count[3];
  const d5 = count[4];
  const d6 = count[5];
// ahora aqui, en lugar de span, si lo hacia con .map? pero creo que no habiamos 
// llegado a ese punto aun en esa clase, o si pero probalbmente mi cerebro no quiso escucharlo 
  return (
    <div className="d-flex">
      <span className="mx-1 fs-2">{d1}</span>
      <span className="mx-1 fs-2">{d2}</span>
      <span className="mx-1 fs-2">{d3}</span>
      <span className="mx-1 fs-2">{d4}</span>
      <span className="mx-1 fs-2">{d5}</span>
      <span className="mx-1 fs-2">{d6}</span>
    </div>
  );
};

export default Digit;