// Switch

const paymentMethod = 'card';

switch(paymentMethod) {
    case 'card':
        console.log('card payment');
        break;
    case 'cash':
        console.log('cash payment');
        break;
    default:
        console.log('Have not paid yet');
        break;
}