const car = (name, model, owner, year, phone, image) => ({
    name,
    model,
    owner,
    year,
    phone,
    image
});

const log = (text, type, date = new Date()) => ({text, type, date})

var cars = [
    car(
        'Ford',
        'focus',
        'Max',
        2016,
        '+7 981 721 85 73',
        'images/usc80foc351a021001.png'
    ),
    car(
        'Ford',
        'Mondeo',
        'Victor',
        2018,
        '+7 981 333 85 73',
        'images/05072d79bd86139ebcd708f0d818d919.jpg'
    ),
    car(
        'Porshe',
        'Panamera',
        'Irina',
        2015,
        '+7 333 321 85 73',
        'images/USC70PRC102C021001.jpg'
    )
]

var currentSlide = 0;
var nextslidef = 1;
var prevslidef = 3;

console.log(this.cars)
new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
        newCarVisibility: false
    },
    methods: {
        selectCar(index) {
            //  console.log('click', index);
            this.car = cars[index],
            this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false
            this
                .logs
                .push(log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok'))
        },
        cancelOrder() {
            this.modalVisibility = false
            this
                .logs
                .push(log(`Cancelled: ${this.car.name} - ${this.car.model}`, 'cnl'))
        },
        newCar() {
            console.log(document.getElementById('models').value)

            this
                .cars
                .push({
                    image: '',
                    model: document
                        .getElementById('models')
                        .value,
                    name: document
                        .getElementById('brand')
                        .value,
                    owner: document
                        .getElementById('owner')
                        .value,
                    phone: document
                        .getElementById('phone')
                        .value,
                    year: document
                        .getElementById('year')
                        .value
                })
        //  console.log(this.cars);
        },

      prevSlide() {
 !function ($) {
  $(function() { 
      $('#carousel').carousel('prev'); 
  }); 
}(window.jQuery)
},

        nextSlide() {
 !function ($) {
  $(function() { 
      $('#carousel').carousel('next'); 
  }); 
}(window.jQuery)
            }
    },

    beforeMount() {
        //  setInterval(() => {    this.nextSlide()  }, 5000);   this.nextSlide()
    },

    computed: {
        phoneBtnText() {
            return this.phoneVisibility
                ? 'Hide phone'
                : 'Show phone'
        },
        filteredCars() {
            var self = this
            const filtered = this
                .cars
                .filter(function (car) {
                    return car
                        .name
                        .indexOf(self.search) > -1 || car
                        .model
                        .indexOf(self.search) > -1
                })

            return filtered
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString();
        }
    }
});

!function ($) {
  $(function() { 
    //  $('#carousel').carousel(); 
  }); 
}(window.jQuery)