//Notification API

const button = document.querySelector('#button');

button.addEventListener('click', function() {
    Notification.requestPermission()
        .then(result => console.log('result is: ', result))
});


if(Notification.permission == 'granted') {
    new Notification('Notification', {
        icon: 'img/img.png',
        body: 'body'  //personalized notifications basically. We can add a logo and message
    });
}