import React from "react"

class CreateForm extends React.Component{


  render() {
    
    return(
      <div className="ui form" style={{width: "80%"}}>
        <div className="field">
            <label>Title</label>
            <br/>
            <input type="text" placeholder="First Name"/>
          </div>
          <br/>
          <div class="field">
            <label>Description</label>
            <br/>
            <textarea></textarea>
          </div>
          <br/>
          <button class="ui primary button">
            Post!
          </button>
      
      </div>
    ); 
  }
}
export default CreateForm;