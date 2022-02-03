import React from 'react';

export default function Login() {

const clickForLogin = ()=> {
  console.log("login button");
}


  return (
    <>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col">
                    <center>
                      <img width="150px" src="asset/imgs/generaluser.png" />
                    </center>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <center>
                      <h3>User Login</h3>
                    </center>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <hr />
                  </div>
                </div>

<div className="row">
  <div className="col">
  
  <div className="form-group mb-3">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Address" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" placeholder="Enter Your Password" id="exampleInputPassword1"/>
  </div>



 <div className="mb-3 d-flex justify-content-center"  >
  <button type="submit" className="btn btn-block btn-lg btn-primary " onClick={clickForLogin} style={{width : "100px"}}>Submit</button>
  </div>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}
