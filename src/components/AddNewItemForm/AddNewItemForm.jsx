import React from 'react';
// import '../../App.css';
import styles from './AddNewItemForm.module.css';

class AddNewItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    state = {
        error: false,
        title: '',
    };

    onTitleChange = (e) => {
        this.setState(
            {
                error: false,
                title: e.currentTarget.value
            }
        )
    };

    onAddItemClick = () => {
        let newText = this.state.title;

        if (newText === '') {
            this.setState({error: true})
        } else {
            this.setState({error: false});
            this.props.addItem(newText);
            this.setState({title: ''})
        }

    };

    onDeleteItemClick = () => {
        // this.props.deleteTodolist(this.props.id);
        this.setState({title: ''})


    };

    onAddItemEnter = (e) => {
        if (e.key === 'Enter') {
            this.onAddItemClick()
        }
    };

    render = () => {

        let errorClass = this.state.error ? styles.error : styles.lot;

        return (
            <div className={styles.form}>
                <input onKeyPress={this.onAddItemEnter}
                       maxLength="60"
                       onChange={this.onTitleChange}
                       className={errorClass}
                       type="text" placeholder={this.props.goal}
                       value={this.state.title}/>
                <button className={styles.but} onClick={this.onAddItemClick}>Add{this.props.text}</button>
                <button className={styles.but} onClick={this.onDeleteItemClick}>Clear input window</button>
            </div>
        );
    }
}

export default AddNewItemForm;