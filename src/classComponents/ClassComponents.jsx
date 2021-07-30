import React from 'react' ; 

class ClassComponent extends React.Component { 
    constructor(options) { 
        super(options)
        this.hello = this.hello.bind(this); 



        this.state = { 
            
        }
    }

    hello () { 
        console.log(this); 
        alert("salam"); 
    }

    render() { 
        return(
            <div onClick={this.hello} >Class component</div>
        )
    }
}

export default ClassComponent; 

 