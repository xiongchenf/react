import React, {Component} from 'react'

export default class AddProject extends Component {
    static defaultProps = {
        categories: ['developer', 'designer']
    };

    HandleSubmit(e) {
        e.preventDefault();
        let project = {};
        project.title = this.refs.title.value;
        project.category = this.refs.category.value;
        this.props.addProject(project)
    }

    render() {
        let selectOptions = this.props.categories.map(option => {
            return <option key={option} value={option}>{option}</option>
        });
        return (
            <div className={'addProject'}>
                <form onSubmit={this.HandleSubmit.bind(this)}>
                    <label>
                        Title:
                    </label>
                    <label >
                        <input type="text" ref='title'/>
                    </label>
                    <br/>
                    <label>
                        category:
                    </label>
                    <label>
                        <select ref={'category'}>
                            {selectOptions}
                        </select>
                    </label>
                    <input type="submit" value='submit'/>
                </form>
            </div>
        )
    }
}