export function EducationForm({disabled}){
    return(
    <>
    <fieldset>
    <legend>Education</legend>
        <label htmlFor="school-name"> School Name:</label>
        <input type="text" id="school-name" disabled = {disabled} />

        <label htmlFor="degree">Degree Name:</label>
        <input type="text" id="degree" disabled = {disabled} />

        <label htmlFor="date-of-study">Date of Study:</label>
        <input type="date" id="date-of-study" disabled = {disabled} />
    </fieldset>
    </>
    )
}