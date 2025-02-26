import { useContext, useState } from "react";
import Card from "./Card";
import { AnnotationContext } from "../Context/AnnotationContext";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

function AnnotationsForm({ name, low, high, setAddNew }) {
  const [exam, setExam] = useState(name);
  const [lowValue, setLowValue] = useState(low ? low : -1);
  const [highValue, setHighValue] = useState(high ? high : -1);
  const { annotations, setAnnotations } = useContext(AnnotationContext);

  const HandClickLow = (e) => {
    let value = e.target.value >= 0 ? e.target.value : lowValue;
    setLowValue(value);

    if (name) {
      setAnnotations({
        ...annotations,
        [name]: { low: parseFloat(value), high: highValue },
      });
    }
  };

  const handleClickHigh = (e) => {
    let value = e.target.value >= 0 ? e.target.value : highValue;
    setHighValue(value);

    if (name) {
      setAnnotations({
        ...annotations,
        [name]: { low: lowValue, high: parseFloat(value) },
      });
    }
  };

  const cancelButton = () => {
    setExam("");
    setLowValue(-1);
    setHighValue(-1);
    setAddNew(false);
  };

  const confirmButton = () => {
    if (exam && lowValue >= 0 && highValue >= 0) {
      setAnnotations({
        ...annotations,
        [exam]: { low: parseFloat(lowValue), high: parseFloat(highValue) },
      });
      setExam("");
      setLowValue(-1);
      setHighValue(-1);
      setAddNew(false);
    }
  };

  return (
    <Card>
      <div className="flex flex-col gap-3">
        <div className="font-semibold ms-3">
          <input
            type="text"
            className="border border-black rounded"
            value={exam}
            onChange={(e) => setExam(e.target.value)}
          />
        </div>
        <div>
          <div className="flex justify-around">
            <div>
              <h3 className="text-center">Low</h3>
              <input
                type="number"
                value={lowValue}
                onChange={(e) => setLowValue(e.target.value)}
                className="border border-black rounded w-20"
              />
            </div>

            <div>
              <h3 className="text-center">High</h3>
              <input
                type="number"
                value={highValue}
                onChange={(e) => setHighValue(e.target.value)}
                className="border border-black rounded w-20"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-around">
          <div
            className=" hover:text-green-700 cursor-pointer transition-all delay-75"
            onClick={confirmButton}
          >
            <CheckIcon />
          </div>
          <div
            className=" hover:text-red-500 cursor-pointer transition-all delay-75"
            onClick={cancelButton}
          >
            <CloseIcon />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AnnotationsForm;
