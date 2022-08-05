import React from "react";

class ModelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            picture_url: "",
            manufacturer_id: "",
            manufacturers: [],
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePictureUrl = this.handleChangePictureUrl.bind(this);
        this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        const value = event.target.value
        this.setState({name: value});
    }

    handleChangePictureUrl(event) {
        const value = event.target.value
        this.setState({picture_url: value});
    }

    handleChangeManufacturer(event) {
        const value = event.target.value
        this.setState({manufacturer_id: value});
    }

    async componentDidMount() {
        const url = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({manufacturers: data.manufacturers})
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.manufacturers;
        console.log("data:", data);

        const modelUrl = "http://localhost:8100/api/models/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
            },
        };
        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
            const newModel = await response.json();
            console.log(newModel);
            this.setState({
                name: "",
                picture_url: "",
                manufacturer_id: ""
            })
        }
    }

    render() {
        return (
            <div className="my-5 containerw">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h2 className="text-center">Create Vehicle Model</h2>
                        <form onSubmit={this.handleSubmit} id="create-model-form">

                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangePictureUrl} value={this.state.picture_url} placeholder="Picture url" required type="text" name="picture_url" id="picture_url" className="form-control" />
                                <label htmlFor="picture_url">Picture url</label>
                            </div>

                            <div className="form-floating mb-3">
                                <select onChange={this.handleChangeManufacturer} value={this.state.manufacturer_id} placeholder="Manufacturer" required name="manufacturer_id" id="manufacturer_id" className="form-select">
                                    <option value="">Choose a manufacturer</option>
                                    {this.state.manufacturers.map(manufacturer => {
                                        return (
                                            <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                                        )
                                    })}
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

export default ModelForm;