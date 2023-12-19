import { useState } from "react";
import {GeneralForm} from "./GeneralForm";
import { EducationForm } from "./EducationForm";
import {ExperienceForm} from "./ExperienceForm";
import "./styles.css"

export default function App(){

  // By default should be able to edit form
  // Submission will make all fields uneditable, Edit will allow the fields to be editable.
  const [mode, setMode] = useState('editing');

  function handleSubmit(e){
    e.preventDefault();
    setMode('submitting');
  }

  const isSubmitting = mode === 'submitting';
  // const isEditing = mode === 'editing';
  
  return(
    <>
    <h1 className="form-title">Curriculum Vitae (CV) Application Form</h1>
    <form className="cv-form" onSubmit={handleSubmit}>
      <GeneralForm disabled = {isSubmitting} /> 
      <EducationForm disabled = {isSubmitting} />
      <ExperienceForm disabled = {isSubmitting} />

      <div className="btn-group">
        <button type="button" onClick={()=>{setMode('editing')}}>Edit</button>
        <button type="submit">Submit</button>
      </div>

      {/* {isSubmitting && <p>Submitting...</p>} */}
    </form>

 
    </>
  )
}