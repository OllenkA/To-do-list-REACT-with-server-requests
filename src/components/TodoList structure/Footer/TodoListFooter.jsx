import React from 'react';
import styles from "./TodoListFooter.module.css"

class TodoListFooter extends React.Component {
    state = {
        isHidden: true
    };

    onAllFilterClick = () => {
        this.props.onFilterChanged('All')
    };
    onCompletedFilterClick = () => {
        this.props.onFilterChanged('Completed')
    };
    onActiveFilterClick = () => {
        this.props.onFilterChanged('Active')
    };
    onShowFiltersClick = () => {
        this.setState({isHidden: true})
    };
    onHideFiltersClick = () => {
        this.setState({isHidden: false})
    };

    render = (props) => {

        let classForAll = this.props.filterValue === 'All'? styles.filterActive: '';
        let classForCompleted = this.props.filterValue === 'Completed'? styles.filterActive: '';
        let classForActive = this.props.filterValue === 'Active'? styles.filterActive: '';

        return (
            <footer className={styles.footer}>
                {this.state.isHidden && <div>
                    <button onClick={this.onAllFilterClick} className={classForAll}>
                        Show all tasks
                    </button>

                    <button onClick={this.onCompletedFilterClick} className={classForCompleted}>
                        Show completed tasks
                    </button>

                    <button onClick={this.onActiveFilterClick} className={classForActive}>
                        Show active tasks
                    </button>
                </div>}

                {!this.state.isHidden &&
                <button onClick={this.onShowFiltersClick} className={classForActive}>
                    Show all buttons
                </button>}
                {this.state.isHidden &&
                <button onClick={this.onHideFiltersClick} className={classForActive}>
                    Hide all buttons
                </button>}

            </footer>
        );
    }
}

export default TodoListFooter;