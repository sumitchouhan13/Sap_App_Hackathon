import React, { useState } from 'react';

const Predictor = () => {
    const [designation, setDesignation] = useState("");
    const [mentalfatiguescore, setMentalFatigueScore] = useState("");
    const [gender, setGender] = useState("");
    const [available, setAvailable] = useState("");
    const [days, setDays] = useState("");
    const [years, setYears] = useState("");
    var prediction_text = null;
    const submit = (e) => {
        e.preventDefault();
        if (!designation || !mentalfatiguescore || !gender || !available || !days || !years) {
            alert("Input fields cannot be blank");
        }
        else {
            setDesignation("");
            setGender("");
            setAvailable("");
            setMentalFatigueScore("");
            setDays("");
            setYears("");
        }
    }
    return (
        <div className="predictor-wraper">
            <form className="container" onSubmit={submit}>
                <div className="form-group">
                    <label className="my-2" style={{ fontWeight: "700" }} htmlFor="formGroupExampleInput">Mental Fatigue Score</label>
                    <input value={mentalfatiguescore} step = ".1" min = "0" onChange={(e) => { setMentalFatigueScore(e.target.value) }} type="number" className="form-control" id="Mental Fatigue Score" placeholder="Mental Fatigue Score" required="required" />
                </div>
                <div className="form-group">
                    <label className="my-2" style={{ fontWeight: "700" }} htmlFor="exampleFormControlSelect1">Designation</label>
                    <select value={designation} onChange={(e) => { setDesignation(e.target.value) }} className="form-control" id="Designation" required="required">
                        <option>Select Option</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="my-2" style={{ fontWeight: "700" }} htmlFor="exampleFormControlSelect2">Gender</label>
                    <select value={gender} onChange={(e) => { setGender(e.target.value) }} className="form-control" id="Gender" required="required" >
                        <option>Select Option</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="my-2" style={{ fontWeight: "700" }} htmlFor="exampleFormControlSelect3">WFH Setup Available</label>
                    <select value={available} onChange={(e) => { setAvailable(e.target.value) }} className="form-control" id="WFH Available" required="required">
                        <option>Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="my-2" style={{ fontWeight: "700" }} htmlFor="formGroupExampleInput">Enter Number of Days</label>
                    <input value={days} onChange={(e) => { setDays(e.target.value) }} type="number" min="0" className="form-control" id="days" placeholder="Days" required="required" />
                </div>
                <div className="form-group">
                    <label className="my-2" style={{ fontWeight: "700" }} htmlFor="formGroupExampleInput">Enter Number of Years</label>
                    <input value={years} onChange={(e) => { setYears(e.target.value) }} type="number" min="0" className="form-control" id="year" placeholder="Years" required="required"/>
                </div>
                <button type="submit" className="my-3 btn btn-sm btn-success"  data-toggle="modal" data-target="#exampleModalCenter">Predict Button</button>
            </form>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Prediction Model Result</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {prediction_text}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Predictor
