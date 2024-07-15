function InnerCard(){
    return(
        <>
           <h1 className="InnerCardHeading">Personal info</h1>
           <p className="InnerCardP">Please provide your name,email address, and phone number.</p>
           <div className="inputLabelDiv">
                <label htmlFor="">Name</label><br />
                <input type="text" placeholder="Your Name" />
           </div>
           <div className="inputLabelDiv">
               <label htmlFor="">Email Address</label><br />
               <input type="text" placeholder="Enter Email" />
           </div>
           <div className="inputLabelDiv">
               <label htmlFor="">Phone Number</label><br />
               <input type="text" placeholder="e.g. +1 234 567 890" />
           </div>
        </>
    );

}
export default InnerCard