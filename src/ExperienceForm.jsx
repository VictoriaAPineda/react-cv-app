export function ExperienceForm(){
    return(
    <>
        <fieldset>
            <legend>Experience</legend>
            <label htmlFor="company"> Company Name:</label>
            <input type="text" id="company"/>

            <label htmlFor="position">Position Title:</label>
            <input type="text" id="position"/>

            <label htmlFor="responsibilities">Job Responsibilities:</label>
            <textarea name="responsibilities" id="responsibilities" cols="30" rows="10"></textarea>
        </fieldset>
    </>
    )
}