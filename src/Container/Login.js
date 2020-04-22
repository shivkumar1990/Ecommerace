import React, { Component } from 'react';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId : "",
            password : ""

        };
         this.loginHandler = this.loginHandler.bind(this);
         this.changeHandler = this.changeHandler.bind(this);

       
    }

    changeHandler(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    };

    loginHandler() {
        let url = "http://localhost:8090/signin"
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'Application/json',
               
            },
            body: JSON.stringify({
                email: this.state.userId,
                passcode: this.state.password
            })
        }).then(response => {
            if (response.state == 200) {
                let b = response.json().body().stringify();
                console.log(b);
            }
        }
        )

    }

    render() {
        return (
            <div className='container'>
                <div className='row' id='pwd-container'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <section className='login-form-border'>
                            <div><br></br></div>
                            <h5>Enter username and password</h5>
                            <form role='login' className="border">
                                <h1 style={{ fontWeight: 400, fontSize: "25px", lineHeight: 1.333 }}>Login</h1>

                                <div className="group">
                                    <input type='text'
                                        className='gxqa-input'
                                        name='userId'
                                         value={this.state.userId}
                                        onChange={this.changeHandler}
                                        required />
                                    <span className="heighlight"></span>
                                    <span className="bar"></span>
                                    <label className="gxqa-label">UserName</label>
                                </div>
                                <div className="group">
                                    <input type='password   '
                                        className='gxqa-input'
                                        name='password'
                                         value={this.state.password}
                                        onChange={this.changeHandler}
                                        required />
                                    <span className="heighlight"></span>
                                    <span className="bar"></span>
                                    <label className="gxqa-label">Password</label>
                                </div>

                                <button type='button' name='go' className='btn btn-lg btn-primary btn-block'
                                    onClick={this.loginHandler}>
                                    Sign in
                                    </button>
                            </form>

                        </section>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        );
    }
}

export default Login;
