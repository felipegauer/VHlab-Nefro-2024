import { useContext, useEffect, useState } from "react";
import AnnotationsComponent from "../Components/AnnotationsComponent";
import { AnnotationContext } from "../Context/AnnotationContext";
import Loading from "../Components/Loading";
import { Alert, Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import AnnotationsForm from "../Components/AnnotationsForm";

function AnnotationPage() {
  const [annotationsFetch, setAnnotationsFetch] = useState([]);
  const { annotations, setAnnotations } = useContext(AnnotationContext);
  const [hidden, setHidden] = useState("hidden");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("Atualizado com sucesso!");
  const [addNew, setAddNew] = useState(false);

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

  const updateAnnotation = async () => {
    setHidden("");
    try {
      const response = await fetch("api/info/createupdate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(annotations),
      });
      const data = await response.json();
      console.log(data);

      if (data.err) setError(data);
      else setSuccess(data);
    } catch (error) {
      setError(error);
    }
    setHidden("hidden");
    setOpen(true);
  };


  const shoAnnotations = ()=>{
    for(let annotation in annotations){
      
      return <AnnotationsComponent
        key={annotation}
        name={annotation}
        low={annotations[annotation].low}
        high={annotations[annotation].high}
      />
    }
  }
  return (
    <>
      <div className="container pt-8">
        <Box
          sx={{
            width: "400px",
            position: "fixed",
            top: 68,
            right: 0,
            opacity: 0.8,
            zIndex: 1000,
          }}
        >
          <Collapse in={open}>
            <Alert
              severity={error ? "error" : "success"}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {error ? error.err : success.message}
            </Alert>
          </Collapse>
        </Box>
        <div className="flex items-center justify-between mb-4 px-2">
          <h1 className="text-3xl">Exames</h1>
          <div className="flex gap-4">
            <button
              className="color-bg text-white p-2 rounded"
              onClick={updateAnnotation}
            >
              Atualizar
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 justify-center gap-10 grid-cols-1 p-4 ">
          {
            shoAnnotations()}{
          annotationsFetch.map((annotation, index) => (
            <AnnotationsComponent
              key={index}
              name={annotation.exam}
              low={annotation.low}
              high={annotation.high}
            />
          ))}

          {addNew ? (
            <AnnotationsForm setAddNew={setAddNew} />
          ) : (
            <div
              className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center hover:cursor-pointer"
              onClick={() => setAddNew(true)}
            >
              <AddIcon sx={{ fontSize: 30 }} />
            </div>
          )}
        </div>
      </div>

      <div
        className={`h-screen w-screen absolute bg-gray-500 top-0 opacity-40 flex items-center justify-center ${hidden}`}
      >
        <Loading />
      </div>
    </>
  );
}

export default AnnotationPage;
