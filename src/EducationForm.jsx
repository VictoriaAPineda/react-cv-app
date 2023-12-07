export function EducationForm(){
    return(
    <>
    <fieldset>
    <legend>Education</legend>
        <label htmlFor="school-name"> School Name:</label>
        <input type="text" id="school-name"/>

        <label htmlFor="degree">Degree Name:</label>
        <input type="text" id="degree"/>

        <label htmlFor="date-of-study">Date of Study:</label>
        <input type="date" id="date-of-study"/>
    </fieldset>
    </>
    )
}