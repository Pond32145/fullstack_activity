import { Component } from "react";
import Modal from 'react-awesome-modal';
import Update_user from './Update_user'

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div>
                <Link to={{ pathname: `/admin/update` }} onClick={() => userParams(item)}>
                    <button className="bg-gray-300 hover:bg-gray-400 text-xs text-gray-800 font-bold py-2 px-2 rounded-l">
                        แก้ไขประวัติส่วนตัว
                    </button>
                </Link>
                <Modal visible={this.state.visible} width="480" height="230" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className="-mt-40">
                        <Update_user closeModal={() => this.closeModal()} />
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Popup;