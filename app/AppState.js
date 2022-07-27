import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({make:'Honda', model:'CRV3-XL PLUS', year:2023, price:100000, img:'https://static01.nyt.com/images/2020/05/22/business/21wheels3-print/merlin_9261190_cdd1e166-951d-4bd4-b4be-26f41a5dcd96-articleLarge.jpg?quality=75&auto=webp&disable=upscale', description: 'driven only once, car of the future'}),
    new Car({make:'Tesla', model:'Cyber truck', year:3000, price:5, img:'https://ogden_images.s3.amazonaws.com/www.motherearthnews.com/images/1975/09/22153103/al-yandacropped.jpg', description:'state of the art, nothing like it, this is also technically just a pre-order, you\'ll get it in the year 3056.'})
  ]

  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({
      address: '37492 Willow Way',
      bedrooms: 3,
      bathrooms: 2.5,
      price: 150000,
      description: 'Arcu dui vivamus arcu felis. Faucibus ornare suspendisse sed nisi. Erat velit scelerisque in dictum non consectetur a. Eget duis at tellus at urna condimentum mattis pellentesque. Sit amet nulla facilisi morbi tempus iaculis urna id. Nunc sed velit dignissim sodales ut. Nisi scelerisque eu ultrices vitae auctor eu augue. In pellentesque massa placerat duis ultricies lacus sed.',
      img: 'https://media.istockphoto.com/photos/3d-rendering-brick-house-isolation-on-a-white-3d-illustration-picture-id1337434489?b=1&k=20&m=1337434489&s=170667a&w=0&h=Be7c31gM3b-sDHIRqCXPNcqamruzf9RUhVrdL3Wrs60='
    }),
    new House({
      address: '5 E 1st St N',
      bedrooms: 6,
      bathrooms: 2.25,
      price: 300000,
      description: 'Velit dignissim sodales ut eu sem integer vitae. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Arcu odio ut sem nulla pharetra diam. Tortor at risus viverra adipiscing at. At consectetur lorem donec massa sapien faucibus et molestie ac. Sapien et ligula ullamcorper malesuada proin libero. Proin sed libero enim sed faucibus turpis in.',
      img: 'https://www.theplancollection.com/Upload/Designers/117/1104/Plan1171104MainImage_11_4_2019_10.jpg'
    })
  ]

  /** @type {import('./Models/Job').Job[]} */
  jobs = [
    new Job({
      position: 'trainer',
      pay: 15,
      description: 'Cursus eget nunc scelerisque viverra mauris in aliquam sem. Placerat duis ultricies lacus sed turpis tincidunt. Amet nisl purus in mollis nunc sed id. Faucibus in ornare quam viverra. Consectetur lorem donec massa sapien faucibus et molestie.',
      img: 'https://thiscatdoesnotexist.com/'
    }),
    new Job({
      position: 'walker',
      pay: 5,
      description: 'Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Pharetra vel turpis nunc eget lorem dolor sed viverra. Est placerat in egestas erat imperdiet sed euismod nisi porta. Morbi tincidunt augue interdum velit. Pretium lectus quam id leo in vitae turpis massa.',
      img: 'https://thiscatdoesnotexist.com/'
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
