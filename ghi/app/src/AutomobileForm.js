import React from "react";

class AutomobileForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            color: "",
            year: "",
            vin: "",
            models: [],
        }
        this.handleColorChange = this.handleColorChange.bind(this)
        this.handleYearChange = this.handleYearChange.bind(this)
        this.handleVinChange = this.handleVinChange.bind(this)
        this.handleModelChange = this.handleModelChange.bind(this)        
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleColorChange(event) {
        const value = event.target.value;
        this.setState({color: value})
    }
    
    handleYearChange(event) {
        const value = event.target.value;
        this.setState({year: value})
    }

    handleVinChange(event) {
        const value = event.target.value;
        this.setState({vin: value})
    }

    handleModelChange(event) {
        const value = event.target.value;
        this.setState({model: value})
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        // console.log("IN HANDLESUBMIT,DATA BEFORE DELETE:", data)
        delete data.models;
        // console.log("IN HANDLESUBMIT DATA AFTER DELETE:", data)
        data.model_id = data.model
        delete data.model
        // console.log("DATA IN HANDLESUBMIT:", data)

        const automobilesUrl = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        // console.log("FETCHCONFIG:", fetchConfig);

        const response = await fetch(automobilesUrl, fetchConfig);
        if (response.ok) {
          const newData = await response.json();
          this.setState({autos: newData.autos})


          const cleared = {
            name: "",
            year: "",
            vin: "",
            model: "",
          };
          this.setState(cleared);
        }
    }


    async componentDidMount() {
        const url = "http://localhost:8100/api/models/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({models: data.models})
            // console.log("STATE AT MODELS:", this.state.models);
        }
    }


    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add an automobile to inventory</h1>
                        <form onSubmit={this.handleSubmit} id="create-automobile-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleColorChange} value={this.state.color} placeholder="Color" required type="text" name="color" id="color" className="form-control"/>
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleYearChange} value={this.state.year} placeholder="Year" required type="number" name="year" id="year" className="form-control"/>
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleVinChange} value={this.state.vin} placeholder="VIN" required type="text" maxLength="17" name="vin" id="vin" className="form-control"/>
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="mb-3">
                        <select onChange={this.handleModelChange} required name="model" id="model" className="form-select" value={this.state.model}>
                                    <option value="">Choose a model</option>
                                        {this.state.models.map(model => {return (
                                            <option key ={model.href} value={model.id}>
                                                {model.name}
                                            </option>
                                        )})}
                                </select>
                            </div>
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutomobileForm;
