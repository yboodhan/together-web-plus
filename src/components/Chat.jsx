import React from 'react';

const Chat = props => {


    return (
        <div>
            <h1>Chat</h1>
            <div>
                <p>Message history:</p>
                <div class="messageHistory overflow-auto border mb-2" style={{ height: "400px", width:"400px" }}>

                </div>
            </div>
            <form>
                <div class="form-inline">
                    <label for="message">Message:</label>
                    <input type="text" class="form-control mx-2" id="message" aria-describedby="message"/>
                    <button type="submit" class="btn btn-primary mx-2">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default Chat