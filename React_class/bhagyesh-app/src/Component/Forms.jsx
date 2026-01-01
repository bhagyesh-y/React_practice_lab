import React, { useState } from "react";
const Forms = () => {
    let [uname, setUname] = useState("")

    const frmsubmit = (e) => {
        e.preventDefault()//this will prevent the default behaviour of form
        alert("hello " + uname)
    }

    return (
        <div style={{ border: "2px solid black", width: "25vw", textAlign: "center" }}>
            <h2 >Employee Form</h2>
            <form onSubmit={frmsubmit}>
                <div>
                    <label >Name:</label>
                    <input
                        type="text"
                        value={uname}
                        onChange={(e) => { setUname(e.target.value) }} />
                </div>
                <div>
                    <label >Email</label>
                    <input
                        type="email"
                        required
                    />
                </div>
                <div>
                    <label >Password</label>
                    <input
                        type="password"
                    />
                </div>
                <div>
                    <label >Message</label>
                    <textarea
                        name="message"
                    ></textarea>
                </div>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default Forms;
