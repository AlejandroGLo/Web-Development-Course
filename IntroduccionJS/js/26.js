//this - refers to the object on which we are calling the function. Doesnt work with arrow function if we dont do window.name = ''

const reserve = {
    name: 'name',
    surname: 'surname',
    total: 5000,
    paid: false,
    info: function(){
        console.log(`Client ${this.name} reserved and the quantity is ${this.total}`)
    }

}

reserve.info();