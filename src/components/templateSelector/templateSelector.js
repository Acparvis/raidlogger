import React, {Component} from 'react';
import {connect} from "react-redux";
import { activateTemplate } from "../../data/actions/state";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class TemplateSelector extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            selectedIndex: 0
        }
    }


    modalFlip = () => this.setState({ modal: !this.state.modal});


    dataCheck = (index) => {

        const {consumables} = this.props;



        if (consumables.length) {
            // fire modal
                this.setState({selectedIndex: index})
                this.modalFlip()

            // fire check first
        } else {
            this.props.templateActivate(index)
        }
    }

    render() {

        const {templates, templateActivate} = this.props;
        const { modal, selectedIndex } = this.state;

        return (
            <div className="flex flex-wrap w-8/12 mt-5 mx-auto">

                <Modal
                    isOpen={modal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2>Are you sure you want to use this template?</h2>
                    <aside>You will lose your current data</aside>
                    <button
                        className="bg-white text-gray-800 rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                        onClick={() => this.modalFlip()}
                    >
                        <span className="mr-2">No thanks, keep my stuff!</span>
                    </button>
                    <button
                        className="bg-white text-gray-800 rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                        onClick={() => {
                            this.modalFlip();
                            templateActivate(selectedIndex)
                        }} >
                        <span className="text-sm">Yes I'm sure!</span>
                    </button>
                </Modal>

                {templates.map((template, index) => {
                    return (
                        <div className="m-3">
                            <button
                                className={`w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-${template.color}-500 hover:border-${template.color}-600 hover:bg-${template.color}-500 hover:text-white shadow-md py-2 px-6  items-center`}
                                onClick={() => this.dataCheck(index)}
                            >
                                <p className="mx-auto">{template.class}</p>

                                <p className="text-gray-400 text-sm">{template.spec}</p>
                            </button>

                        </div>
                    )
                })}

            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        templates: state.templates,
        consumables: state.consumables,
    }
}

const mapDispatchToProps = dispatch => ({
    templateActivate: (index) => dispatch(activateTemplate(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateSelector);