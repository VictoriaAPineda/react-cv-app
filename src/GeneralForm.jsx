export function GeneralForm(){

    return(
       <>
            <fieldset>
            <legend>General</legend>
                <label htmlFor="name"> Name:</label>
                <input type="text" id="name"/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email"/>

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone"/>
            </fieldset>
        </>
    )
}