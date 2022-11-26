import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './FileList.css';

class FileList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    showNewFolder = () => {
        let e = document.querySelector('.newfolder');
        if (e) {
            e.style.setProperty('display', 'flex', 'important');
        }
    }

    componentDidUpdate() {
        let api = "";

        if (this.props.cloud === "Google Drive") {
            api = "/google-drive/get-files";
        }

        if (api !== "") {
            fetch(api, {
                method: "POST"
            })
            .then((res) => res.json())
            .then((data) => {
                if (this.props.cloud === "Google Drive") {
                    this.setState({data: data.message});
                }
            });
        }
        else if (this.state.data.length > 0) {
            this.setState({data: []});
        }
    }

    render() {

        let header = {name: "", date: "", size: ""};

        return (
            <section className='container mt-4'>
                <div className='border border-secoondary rounded h4 p-1'>
                    <i className='bi bi-house-door-fill text-primary'>&gt;&nbsp;</i>{this.props.cloud}
                </div>
                    
                <div className='h6 mx-2 my-3 text-primary'>
                    <i className='bi bi-cloud-upload-fill'>&nbsp;</i><span className='option'>Upload File</span>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <i className="bi bi-folder-fill">&nbsp;</i><span className='option' onClick={()=>this.showNewFolder()}>New Folder</span>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <i className="bi bi-trash3-fill">&nbsp;</i><span className='option'>Delete</span>
                </div>

                <ul className='list-group mx-5'>
                    <File data={header} key={0}/>
                    <NewFolder cloud={this.props.cloud}/>
                    {this.state.data.map((file, key) => <File data={file} key={key+1}/>)}
                </ul>
            </section>
        );
    }   
}

class File extends React.Component {
    render() {

        let className = 'list-group-item row d-flex file';

        if (this.props.data.name === "") {
            this.props.data.name = <b>Name</b>;
            this.props.data.date = <b>Date</b>;
            this.props.data.size = <b>Size</b>;
            className = 'list-group-item row d-flex';
        }

        return (
            <li className={className}>
                <div className='col-7 text-break'>{this.props.data.name}</div>
                <div className='col-3 text-break'>{this.props.data.date}</div>
                <div className='col-2 text-break'>{this.props.data.size}</div>
            </li>
        );
    }
}

class NewFolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filename: ""};
    }

    hideNewFolder = () => {
        let e = document.querySelector('.newfolder');
        if (e) {
            e.style.setProperty('display', 'none', 'important');
        }

        e = document.querySelector('#newfolder');
        if (e) {
            e.value = "";
        }

        this.setState({filename: ""});
    }

    handleInputChange = (e) => {
        if (e.target) {
            this.setState({filename: e.target.value});
        }
    }

    handleSubmit = () => {
        if (this.state.filename !== "") {
            let api = "";

            if (this.props.cloud === "Google Drive") {
                api = "/google-drive/create-new-folder";
            }

            if (api !== "") {
                fetch(api, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.state)
                });

                this.hideNewFolder();
            }
        }
    }

    render() {
        return (
            <li className='list-group-item row d-flex newfolder'>
                <form className='col-5 my-2'>
                    <input id='newfolder' type='text' className='form-control' placeholder='Folder Name' onChange={(e)=>this.handleInputChange(e)} required/>
                </form>
                <div className='col-7 my-2'>
                    <i className="bi bi-folder-plus h2" onClick={()=>this.handleSubmit()}></i>
                    &nbsp;&nbsp;&nbsp;
                    <i className="bi bi-folder-x h2" onClick={()=>this.hideNewFolder()}></i>
                </div>
            </li>
        );
    }
}

export default FileList;