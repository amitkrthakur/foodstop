import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  cuisines: Cuisine[] = [
    // {
    //   title: 'South Indian',
    //   desc: '',
    //   dishes: [




    //   ],
    //   imgurl: '',
    // },
    {
      title: 'Pure Veg',
      desc: '',
      dishes: [
        {
          name: 'Shahi Paneer',
          desc: '',
          price: 250,
          imgurl: '../../assets/veg/shahi.jpg'
        },
        {
          name: 'Palak Paneer',
          desc: '',
          price: 220,
          imgurl: '../../assets/veg/palak.jpg'
        },
        {
          name: 'Matar Paneer',
          desc: '',
          price: 240,
          imgurl: '../../assets/veg/matar.jpg'
        },
        {
          name: 'Kadai Paneer',
          desc: '',
          price: 270,
          imgurl: '../../assets/veg/kadai.jpg'
        },
        {
          name: 'Dal Makhani',
          desc: '',
          price: 170,
          imgurl: '../../assets/veg/dal-makhani.jpg'
        }
      ],
      imgurl: '../../assets/veg.jpg',
    },
    {
      title: 'Rice',
      desc: '',
      dishes: [
        {
          name: 'Rice',
          desc: '',
          price: 120,
          imgurl: '../../assets/rice/rice.jpg'
        },
        {
          name: 'Steamed Rice',
          desc: '',
          price: 130,
          imgurl: '../../assets/rice/steamed.jpg'
        },
        {
          name: 'Jeera Rice',
          desc: '',
          price: 150,
          imgurl: '../../assets/rice/jeera.jpg'
        },
        {
          name: 'Matar Pulao',
          desc: '',
          price: 170,
          imgurl: '../../assets/rice/matar.jpg'
        },
      ],
      imgurl: '../../assets/rice.jpg',
    },
    {
      title: 'Rotis and Parathas',
      desc: '',
      dishes: [
        {
          name: 'Tandoori Roti',
          desc: '',
          price: 20,
          imgurl: '../../assets/paratha/tandoori.jpg'
        },
        {
          name: 'Rumali Roti',
          desc: '',
          price: 30,
          imgurl: '../../assets/paratha/rumali.jpg'
        },
        {
          name: 'Butter Naan',
          desc: '',
          price: 220,
          imgurl: '../../assets/paratha/butter.jpg'
        },
        {
          name: 'Paratha',
          desc: '',
          price: 50,
          imgurl: '../../assets/paratha/paratha.jpg'
        },
        {
          name: 'Lachha Parantha',
          desc: '',
          price: 220,
          imgurl: '../../assets/paratha/lachha.jpg'
        }
      ],
      imgurl: '../../assets/paratha.jpg',
    },
    {
      title: 'Chinese',
      desc: '',
      dishes: [
        {
          name: 'Veg Chowmein',
          desc: '',
          price: 70,
          imgurl: '../../assets/chinese/chowmein.jpg'
        },
        {
          name: 'Egg Chowmein',
          desc: '',
          price: 90,
          imgurl: '../../assets/chinese/egg.jpg'
        },
        {
          name: 'Chicken Chowmein',
          desc: '',
          price: 150,
          imgurl: '../../assets/chinese/chicken.jpg'
        },
        {
          name: 'Mixed Chowmein',
          desc: '',
          price: 120,
          imgurl: '../../assets/chinese/mixed.jpg'
        },
        {
          name: 'Prawn Chowmein',
          desc: '',
          price: 220,
          imgurl: '../../assets/chinese/prawn.jpg'
        },
      ],
      imgurl: '../../assets/chinese.jpg',
    },
    {
      title: 'Desserts',
      desc: '',
      dishes: [

        {
          name: 'Gajar ka Halwa',
          desc: '',
          price: 180,
          imgurl: '../../assets/desserts/halwa.jpg'
        },
        {
          name: 'Kulfi',
          desc: '',
          price: 30,
          imgurl: '../../assets/desserts/kulfi.jpg'
        },
        {
          name: 'Ice Cream',
          desc: '',
          price: 50,
          imgurl: '../../assets/desserts/ice.jpg'
        },
        {
          name: 'Gulab Jamun',
          desc: '',
          price: 20,
          imgurl: '../../assets/desserts/gulab.jpg'
        },
        {
          name: 'Kesar Kheer',
          desc: '',
          price: 80,
          imgurl: '../../assets/desserts/kesar.jpg'
        },
      ],
      imgurl: '../../assets/desserts.jpg',
    },
    {
      title: 'Soup',
      desc: '',
      dishes: [
        {
          name: 'Tomato Soup',
          desc: '',
          price: 50,
          imgurl: '../../assets/soup/tomato.jpg'
        },
        {
          name: 'Sweet corn (veg)',
          desc: '',
          price: 40,
          imgurl: '../../assets/soup/cornveg.jpg'
        },
        {
          name: 'Sweet corn (non veg)',
          desc: '',
          price: 70,
          imgurl: '../../assets/soup/cornnonveg.jpg'
        },
        {
          name: 'Hot and Sour(veg)',
          desc: '',
          price: 50,
          imgurl: '../../assets/soup/hotveg.jpg'
        },
        {
          name: 'Hot and Sour (non veg)',
          desc: '',
          price: 50,
          imgurl: '../../assets/soup/hotnonveg.jpg'
        },
      ],
      imgurl: '../../assets/soup.jpg',
    },
    {
      title: 'Snacks',
      desc: '',
      dishes: [
        {
          name: 'Crispy chilly baby corn',
          desc: '',
          price: 80,
          imgurl: '../../assets/snacks/baby.jpg'
        },
        {
          name: 'Veg Pakora',
          desc: '',
          price: 40,
          imgurl: '../../assets/snacks/veg.jpg'
        },
        {
          name: 'Paneer Pakora',
          desc: '',
          price: 80,
          imgurl: '../../assets/snacks/paneer.jpg'
        },
        {
          name: 'Fish Pakora',
          desc: '',
          price: 50,
          imgurl: '../../assets/snacks/fish.jpg'
        },
        {
          name: 'Chicken Drumstick',
          desc: '',
          price: 80,
          imgurl: '../../assets/snacks/chicken.jpg'
        },
      ],
      imgurl: '../../assets/snacks.jpg'
    },
    {
      title: 'Biryani',
      desc: '',
      dishes: [
        {
          name: 'Chicken Biryani',
          desc: '',
          price: 120,
          imgurl: '../../assets/biryani/chicken.jpg'
        },
        {
          name: 'Mutton Biryani',
          desc: '',
          price: 50,
          imgurl: '../../assets/biryani/mutton.jpg'
        },
        {
          name: 'Egg Biryani',
          desc: '',
          price: 50,
          imgurl: '../../assets/biryani/egg.jpg'
        },
        {
          name: 'Chicken dum Biryani',
          desc: '',
          price: 50,
          imgurl: '../../assets/biryani/chicken.jpg'
        },
      ],
      imgurl: '../../assets/biryani.jpg'
    }

  ]
}
interface Cuisine {
  title: String,
  desc: String,
  dishes: Dish[],
  imgurl: String
}
interface Dish {
  name: String,
  desc: String,
  price: Number,
  imgurl: String
}