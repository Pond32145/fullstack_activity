import { Component } from "react";
import Modal from 'react-awesome-modal';
import Add_Users from './Add_users';

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        // Bind methods to the class instance
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
                <button onClick={this.openModal}>
                    <div className='flex gap-2 hover:text-black hover:bg-gray-200 p-2 rounded text-gray-500 text-sm items-center'>
                        เพิ่มผู้ใช้งานระบบ
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </button>
                <Modal visible={this.state.visible} width="480" height="230" effect="fadeInUp" onClickAway={this.closeModal}>
                    <div className="-mt-40">
                        <Add_Users closeModal={this.closeModal} /> {/* Pass closeModal directly */}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Popup;
