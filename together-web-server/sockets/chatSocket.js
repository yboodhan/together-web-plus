// Contains all chat related events
module.exports = (socket, chat) => {

    socket.on('eventName1', () => {
      console.log('event1 occured with chat now')
    });
  
    socket.on('eventName2', () => {
      console.log('event2 occured with chat now')
    });

    socket.on('messageSent', (data) => {
        console.log('The user just submitted the following message:', data.message);
        chat.emit('displayMessage', {message: data.message });
    });
  
};