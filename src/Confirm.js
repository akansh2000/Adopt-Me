import React from "react";

const Confirm=()=>{

    return(
        <div className="confirm">
        {console.log('inside Confirm')}
        
        <div class="message">Do you want to save the changes?</div>
        <button class="yes">Yes</button>
        <button class="no">No</button>
     </div>
    )
}

export default Confirm;