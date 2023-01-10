import React from 'react'

function ErrorPage() {
    return (
        <div className="container" style={{width:"100vw",height:"60vh"}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template" style={{textAlign:"center",height:"50vh",paddingTop:"10vh",lineHeight:"10vh"}}>
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <a href="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span> Take Me Home </a>
                            <a href="/#" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span> Contact Support </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage