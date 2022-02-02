import React from 'react';

export default function Login() {
  return (
    <>

      <div class="container my-5">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card">
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col">
                    <center>
                      <img width="150px" src="asset/imgs/generaluser.png" />
                    </center>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <center>
                      <h3>User Login</h3>
                    </center>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col">
                    <hr />
                  </div>
                </div>

<div className="row">
  <div className="col">
  
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Address" aria-describedby="emailHelp"/>
  </div>
  <div class="form-group mb-4">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" placeholder="Enter Your Password" id="exampleInputPassword1"/>
  </div>

  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember me </label>
  </div>

 <div className="mb-3 d-flex justify-content-center"  >
  <button type="submit" class="btn btn-block  btn-primary " style={{width : "100px"}}>Submit</button>
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
