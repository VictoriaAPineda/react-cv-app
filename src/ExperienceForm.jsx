export function ExperienceForm({disabled}){
    return(
    <>
        <fieldset>
            <legend>Experience</legend>
            <label htmlFor="company"> Company Name:</label>
            <input type="text" id="company" disabled = {disabled} />

            <label htmlFor="position">Position Title:</label>
            <input type="text" id="position" disabled = {disabled} />

            <label htmlFor="responsibilities">Job Responsibilities:</label>
            <textarea name="responsibilities" id="responsibilities" cols="30" rows="10" disabled = {disabled} ></textarea>
        </fieldset>
    </>
    )
}