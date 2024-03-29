import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    statusInputRef= React.createRef();

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({                 //ФИШКА РЕАКТА! ЭТО НЕ МОЯ ФУНКЦИЯЯ!!!!
            editMode: true,
            status: this.props.status
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
       this.setState({
           status: e.currentTarget.value
       }); 
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status!==this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status||"-----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}value={this.state.status} />
                    </div>
                }
            </div>
        );
    }
}
export default ProfileStatus;