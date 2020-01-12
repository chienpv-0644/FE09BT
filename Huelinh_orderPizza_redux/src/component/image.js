import React from 'react'
class Image extends React.Component{
    render() {
        return (
            <div className="col-3 m-1">
                <img  className="w-100" src={this.props.src} alt={this.props.alt}/>
            </div>
        )
    }
}

export default Image