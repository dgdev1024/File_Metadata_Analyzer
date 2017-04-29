///
/// \file   app.js
/// \brief  The client-side's primary component.
///

// Imports
import React from "react";

///
/// \file   App
/// \brief  The primary component for our app's client-side.
///
export default class App extends React.Component {
    ///
    /// \brief  The constructor.
    ///
    constructor () {
        super();
    }

    ///
    /// \brief  Renders the component.
    ///
    render () {
        return (
            <div className="app-body">
                <h1 className="app-header">File Metadata Microservice</h1>
                <p className="app-description">Allows the user to upload a file to view its statistics.</p>
                <h2 className="app-header">Instructions</h2>
                <p className="app-instructions">
                    Select the "Choose File" button and select a file of your choice from your local
                    storage, then click "Submit". You will see the file's name, MIME type and size in bytes
                    in the resulting JSON response.
                </p>
                <form className="app-form" action="/upload" method="post" encType="multipart/form-data">
                    <input className="app-file-input" id="file-input" type="file" name="uploadedFile" />
                    <button className="app-submit-button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
};