// Contains all chat related events
module.exports = function(socket) {

    socket.on('eventName1', function() {
      console.log('event1 occured with chat now')
    });
  
    socket.on('eventName2', function() {
      console.log('event2 occured with chat now')
    });
  
};