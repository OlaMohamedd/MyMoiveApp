import React from 'react'
import './Notfound.css'
export default function Notfound() {
  return (
    <>

      <div className="container error-container">
        <div className="row  d-flex align-items-center justify-content-center">
          <div className="col-md-12 text-center">
            <h1 className="big-text">Oops!</h1>
            <h2 className="small-text">404 - PAGE NOT FOUND</h2>

          </div>
          <div className="col-md-6  text-center">
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>


            <form className="example" action="action_page.php">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search.." name="search" />
                <button className="search-btn" type="submit"><i className="fa fa-search"></i></button>
              </div>

            </form>
            <h2 className="small-text">OR</h2>

            <a href="# " className="button button-dark-blue iq-mt-15 text-center">GOTO HOME PAGE</a>

          </div>

        </div>


      </div>





    </>
  )
}
