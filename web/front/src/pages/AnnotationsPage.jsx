import { useContext, useEffect, useState } from "react";
import AnnotationsComponent from "../Components/AnnotationsComponent";
import { AnnotationContext } from "../Context/AnnotationContext";

function AnnotationPage() {
  const [annotationsFetch, setAnnotationsFetch] = useState([]);
  const { annotations, setAnnotations } = useContext(AnnotationContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/info/all");
      const data = await response.json();
      setAnnotationsFetch(data);
      const aux = {};
      data.map(
        (annotation) =>
          (aux[annotation.exam] = {
            low: annotation.low,
            high: annotation.high,
          })
      );
      setAnnotations(aux);
    }

    fetchData();
  }, []);

  return (
    <div className="container pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Exames</h1>
        <div className="flex gap-4">
          <button className="color-bg text-white p-2 rounded">Atualizar</button>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-center gap-10">
        {annotationsFetch.map((annotation, index) => (
          <AnnotationsComponent
            key={index}
            name={annotation.exam}
            low={annotation.low}
            high={annotation.high}
          />
        ))}
      </div>
    </div>
  );
}

export default AnnotationPage;
