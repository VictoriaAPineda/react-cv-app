import {GeneralForm} from "./GeneralForm";
import { EducationForm } from "./EducationForm";
import {ExperienceForm} from "./ExperienceForm";
import "./styles.css"

export default function App(){

  function submitForm(params) {
    
  }
  function editForm(params) {
    
  }

  return(
    <>
    <h1 className="form-title">Curriculum Vitae (CV) Application Form</h1>
    <form className="cv-form">
      <GeneralForm />
      <EducationForm />
      <ExperienceForm />
    </form>

      <div className="btn-group">
      <button>Edit</button>
      <button>Submit</button>
      </div>
    </>
  )
}