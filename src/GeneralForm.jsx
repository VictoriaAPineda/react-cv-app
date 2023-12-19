export function GeneralForm({disabled}){

    return(
       <>
            <fieldset>
            <legend>General</legend>
                <label htmlFor="name"> Name:</label>
                <input type="text" id="name" disabled = {disabled}/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" disabled = {disabled}/>

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" disabled = {disabled}/>
            </fieldset>
        </>
    )
}