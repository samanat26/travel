import React from 'react';

export default function Signup() {
const clickForSignup = ()=>{
  console.log("click signup");
}

  return (
  <>
      <div className="container my-5" style={{maxWidth:"986px"}} >

        <div className="row my-3">
          <div className="col-12 mx-auto">
            <div className="card">
              <div className="card-body">
                <div className="row my-3">
                  <div className="col">
                    <center>
                      <img style={{ width: "150px" }} src="asset/imgs/sign-up.png" alt="user" />
                    </center>
                  </div>
                </div>
                <div className="row ">
                  <div className="col">
                    <center>
                      <h3><b>SignUp</b> </h3>
                    </center>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <hr />
                  </div>
                </div>


                <div className="row mb-3">
                  <div className="col">
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="inputEmail4">First Name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="inputEmail4">Last Name</label>

                        <input type="text" className="form-control" placeholder="Last name" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                      </div>
                    </div>
                    <div className='mb-3'>
                      <div className="form-group">
                      <label htmlFor="inputAddress">Address</label>
                      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    </div>
                    <div className="row mb-3">
                    <div className="form-group col-md-6">
    <label htmlFor="exampleFormControlSelect1">Gender</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Male</option>
      <option>Female</option>
      <option>Others</option>
   
    </select>
  </div>
  <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Phone Number</label>
                        <input type="bigInt" className="form-control" id="inputPassword4" />
                      </div>
                    </div>

                    <div className="row mb-5">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" className="form-control">
                          <option selected>Choose...</option>
                          <option>Pakistan</option>
                          <option>America</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="numeric" className="form-control" id="inputZip" />
                      </div>
                    </div>

                    <button type="submit" onClick={clickForSignup} className="btn btn-block btn-lg btn-primary">Sign in</button>
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
