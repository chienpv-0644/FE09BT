import React from 'react';

export class SearchForm extends React.Component {
    render() {
        return (
            <div className="col-md-6 mx-auto text-center">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-white"><i className="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                    <input type="text" className="form-control" id="price" placeholder="Search" onChange={this.props.handlerChangeSearch} />
                </div>
            </div>
        );
    }
}

export default SearchForm;
