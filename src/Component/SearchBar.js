import React from 'react'
import { TextField} from '@material-ui/core'

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    };

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    handleFormSubmit = (event) => {
        const { searchTerm} = this.state;
        const {onFormSubmit} = this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
    }


    render() {
        return (
           <div style={{margin:'20px',padding:'10px',alignSelf:'center', width:'70%'}}>
                <form onSubmit= {this.handleFormSubmit}>
                    <TextField fullWidth label='search here' onChange={this.handleChange} ></TextField>
                </form>
                </div>
           
        )
    }

}
export default SearchBar;