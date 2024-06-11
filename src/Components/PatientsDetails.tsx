import { toast } from "react-toastify";
import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";
import { usePatientStore } from "../Store";

type PatientDetailProps = {
  patient: Patient;
};

function PatientsDetails({ patient }: PatientDetailProps) {

    const deletePatient = usePatientStore(state => state.deletePatient)
    const getPatientsById = usePatientStore(state => state.getPatientById)

    const handleClick = () => {
      deletePatient(patient.id)
      toast.error('El paciente ha sido eliminado correctamente')
    }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="id" data={patient.id} />
      <PatientDetailItem label="nombre" data={patient.name} />
      <PatientDetailItem label="propietario" data={patient.caretaker} />
      <PatientDetailItem label="email" data={patient.email} />
      <PatientDetailItem label="fecha" data={patient.date.toString()} />
      <PatientDetailItem label="sintomas" data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row  lg:gap-3 justify-between gap-3 mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientsById(patient.id)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleClick}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default PatientsDetails;
