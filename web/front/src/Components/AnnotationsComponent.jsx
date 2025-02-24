import { useContext, useState } from "react";
import Card from "./Card";
import { AnnotationContext } from "../Context/AnnotationContext";

function AnnotationsComponent({ name, low, high }) {
  const [lowValue, setLowValue] = useState(low ? low : -1);
  const [highValue, setHighValue] = useState(high ? high : -1);
  const {annotations,setAnnotations} = useContext(AnnotationContext);

  const HandClickLow = (e) => {

    let value = e.target.value >= 0 ? e.target.value : lowValue;
    setLowValue(value);

    if (name) {
      setAnnotations({...annotations, [name]: {low: parseFloat(value), high: highValue}});
    }
  };

  const handleClickHigh = (e) => {
    let value = e.target.value >= 0 ? e.target.value : highValue;
    setHighValue(value);

      if (name) {
        setAnnotations({...annotations, [name]: {low: lowValue, high: parseFloat(value)}});
      }

  };


  return (
    <Card>
      <div className="flex flex-col gap-3">
        <div className="font-semibold ms-3">{name ? name : "Undefined"}</div>
        <div>
          <div className="flex justify-around">
            <div>
              <h3 className="text-center">Low</h3>
              <input
                type="number"
                value={lowValue}
                onChange={HandClickLow}
                className="border border-black rounded w-20"
              />
            </div>

            <div>
              <h3 className="text-center">High</h3>
              <input
                type="number"
                value={highValue}
                onChange={handleClickHigh}
                className="border border-black rounded w-20"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AnnotationsComponent;
