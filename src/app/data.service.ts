import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  cuisines: Cuisine[] = [
    {
      title: 'Pure Veg',
      desc: 'The pure veg section consists of delicious vegetarian mouth-watering items',
      dishes: [
        {
          name: 'Shahi Paneer',
          desc: 'Shahi paneer is a preparation of paneer cottage cheese in a thick gravy made up of cream, tomatoes and spices from the Indian subcontinent',
          price: 250,
          imgurl: '../../assets/veg/shahi.jpg'
        },
        {
          name: 'Palak Paneer',
          desc: 'Palak paneer is a vegetarian dish from the Indian Subcontinent, consisting of paneer in a thick paste made from puréed spinach and seasoned with garlic, garam masala, and other spices',
          price: 220,
          imgurl: '../../assets/veg/palak.jpg'
        },
        {
          name: 'Matar Paneer',
          desc: 'Mattar paneer is a vegetarian north Indian dish consisting of peas and paneer in a tomato based sauce, spiced with garam masala',
          price: 240,
          imgurl: '../../assets/veg/matar.jpg'
        },
        {
          name: 'Kadai Paneer',
          desc: 'Kadai paneer is a preparaed by adding tomatoes, cheese and spices in thick gravy ',
          price: 270,
          imgurl: '../../assets/veg/kadai.jpg'
        },
        {
          name: 'Dal Makhani',
          desc: 'Dal makhani or dal makhni is a popular dish from the Punjab region of the Indian subcontinent. The primary ingredients are whole black lentil, red kidney beans, butter and cream',
          price: 170,
          imgurl: '../../assets/veg/dal.jpg'
        }
      ],
      imgurl: '../../assets/veg.jpg',
    },
    {
      title: 'Rice',
      desc: "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population",
      dishes: [
        {
          name: 'Rice',
          desc: 'Rice is the white cereal grain widely consumed by many',
          price: 120,
          imgurl: '../../assets/rice/rice.jpeg'
        },
        {
          name: 'Steamed Rice',
          desc: 'Cooked rice refers to rice that has been cooked either by steaming or boiling ',
          price: 130,
          imgurl: '../../assets/rice/steamed.jpg'
        },
        {
          name: 'Jeera Rice',
          desc: 'Jeera rice or Zeera rice is an Indian dish consisting of rice and cumin seeds ',
          price: 150,
          imgurl: '../../assets/rice/jeera.jpeg'
        },
        {
          name: 'Matar Pulao',
          desc: 'Matar Pulao is a dish in which rice is cooked in a seasoned broth. In some cases, the rice may attain its brown or golden color by first being sauteed lightly in oil before the addition of broth ',
          price: 170,
          imgurl: '../../assets/rice/matar.jpg'
        },
      ],
      imgurl: '../../assets/rice.jpg',
    },
    {
      title: 'Rotis and Parathas',
desc: 'A paratha is a flatbread while Parathas are thicker and more substantial than chapatis/ rotis ',
      dishes: [
        {
          name: 'Tandoori Roti',
          desc: 'Tandoori roti is made with whole-wheat flour and traditionally cooked in a clay oven or tandoor. ',
          price: 20,
          imgurl: '../../assets/paratha/tandoori.jpg'
        },
        {
          name: 'Rumali Roti',
          desc: 'Rumali Roti is a thin flat bread, Rumali means handkerchief, This roti is so thin, that you can fold it like a handkercheif and serve it ',
          price: 30,
          imgurl: '../../assets/paratha/rumali.jpeg'
        },
        {
          name: 'Butter Naan',
          desc: 'Butter Naan, a butter flavored flat bread is one of the most extremely delicious dish of Indian breads ',
          price: 220,
          imgurl: '../../assets/paratha/butter.jpeg'
        },
        {
          name: 'Paratha',
          desc: 'the paratha is flat bread basically fried with oil, butter, or ghee ',
          price: 50,
          imgurl: '../../assets/paratha/paratha.jpeg'
        },
        {
          name: 'Lachha Parantha',
          desc: 'Lachha parantha is the layered paratha with crispy, flakey yet soft texture that goes perfect with any curry dish ',
          price: 220,
          imgurl: '../../assets/paratha/lachha.jpg'
        }
      ],
      imgurl: '../../assets/paratha.jpg',
    },
    {
      title: 'Chinese',
      desc: 'Indian Chinese cuisine is the adaptation of Chinese seasoning and cooking techniques to Indian tastes through a larger offering of vegetarian dishes',
      dishes: [
        {
          name: 'Veg Chowmein',
          desc: 'Chow mein is a generic Chinese term for a dish of stir-fried noodles, of which there are many varieties',
          price: 70,
          imgurl: '../../assets/chinese/chowmein.jpg'
        },
        {
          name: 'Egg Chowmein',
          desc: 'Egg Chow mein is chinese stir-fried noodles with addition of egg(s) ',
          price: 90,
          imgurl: '../../assets/chinese/egg.jpg'
        },
        {
          name: 'Chicken Chowmein',
          desc: 'Chicken chow mein is a non-vegetarian dish of stir-fried noodles with chicken pieces',
          price: 150, 
          imgurl: '../../assets/chinese/chicken.jpg'
        },
        {
          name: 'Mixed Chowmein',
          desc: 'Mixed chowmein can be vegetarian or non-vegetarian as per the wish of the consumer',
          price: 120,
          imgurl: '../../assets/chinese/mixed.jpg'
        },
        {
          name: 'Prawn Chowmein',
          desc: 'Prawn chow mein noodles is a delicious, fun recipe that is hearty and will go excellently with a side of mixed vegetables ',
          price: 220,
          imgurl: '../../assets/chinese/prawn.jpeg'
        },
      ],
      imgurl: '../../assets/chinese.jpg',
    },
    {
      title: 'Desserts',
      desc: 'Welcome to the dessert category, in this category you can have the after-food sweet items',
      dishes: [

        {
          name: 'Gajar ka Halwa',
          desc: 'Gajar ka halwa, also known as gajorer halwa, is a carrot-based sweet dessert pudding from the Indian subcontinent ',
          price: 180,
          imgurl: '../../assets/desserts/halwa.jpg'
        },
        {
          name: 'Kulfi',
          desc: 'Kulfi is a popular frozen dairy dessert from the Indian subcontinent. It is often described as "traditional Indian ice cream." ',
          price: 30,
          imgurl: '../../assets/desserts/kulfi.jpg'
        },
        {
          name: 'Ice Cream',
          desc: 'Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It is usually made from dairy products, such as milk and cream, and often combined with fruits or other ingredients and flavors ',
          price: 50,
          imgurl: '../../assets/desserts/ice.jpg'
        },
        {
          name: 'Gulab Jamun',
          desc: 'Gulab jamoon is made from khova which is deep fried and then soaked in sugar syrup ',
          price: 20,
          imgurl: '../../assets/desserts/gulab.jpg'
        },
        {
          name: 'Kesar Kheer',
          desc: 'Kheer is a rice pudding from the cuisine of the Indian subcontinent, made by boiling rice, broken wheat, tapioca, or vermicelli with milk and sugar; it is flavoured with cardamom, raisins, saffron, cashews, pistachios or almonds. It is typically served during a meal or as a dessert ',
          price: 80,
          imgurl: '../../assets/desserts/kesar.jpg'
        },
      ],
      imgurl: '../../assets/desserts.jpg',
    },
    {
      title: 'Soup',
      desc: 'Soup is a primarily liquid food, generally served warm or hot, that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another liquid ',
      dishes: [
        {
          name: 'Tomato Soup',
          desc: 'Tomato soup is a soup made with tomatoes as the primary ingredient. It may be served hot or cold in a bowl, and may be made in a variety of ways ',
          price: 50,
          imgurl: '../../assets/soup/tomato.jpeg'
        },
        {
          name: 'Sweet corn (veg)',
          desc: 'Corn soup is a soup made of corn and veggies ',
          price: 40,
          imgurl: '../../assets/soup/cornveg.jpeg'
        },
        {
          name: 'Sweet corn (non veg)',
          desc: 'Corn soup is a soup made of corn and meat',
          price: 70,
          imgurl: '../../assets/soup/cornnonveg.jpg'
        },
        {
          name: 'Hot and Sour(veg)',
          desc: 'Hot and sour soup is a variety of soups from several Asian culinary traditions. In all cases, the soup contains veg ingredients to make it both spicy and sour ',
          price: 50,
          imgurl: '../../assets/soup/hotveg.jpg'
        },
        {
          name: 'Hot and Sour (non veg)',
          desc: 'Hot and sour soup is a variety of soups from several Asian culinary traditions. In all cases, the soup contains meat to make it both spicy and sour ',
          price: 50,
          imgurl: '../../assets/soup/hotnonveg.jpeg'
        },
      ],
      imgurl: '../../assets/soup.jpg',
    },
    {
      title: 'Snacks',
      desc: 'A snack is a portion of food, smaller than a regular meal, generally eaten between meals ',
      dishes: [
        {
          name: 'Crispy chilly baby corn',
          desc: 'Batter-coated and deep-fried baby corn is tossed with an assortment of awesome ingredients, which range from crunchy spring onions and pungent garlic to a splash of Oriental sauces ',
          price: 80,
          imgurl: '../../assets/snacks/baby.jpeg'
        },
        {
          name: 'Veg Pakora',
          desc: 'Veg pakora is an Indian subcontinental snack which can be of various types  as:onion, cauliflower, potato, spinach and much more',
          price: 40,
          imgurl: '../../assets/snacks/veg.jpg'
        },
        {
          name: 'Paneer Pakora',
          desc: 'Paneer pakora is a cheese Indian continental fried snack',
          price: 80,
          imgurl: '../../assets/snacks/paneer.jpg'
        },
        {
          name: 'Fish Pakora',
          desc:'It is an Indian subcontinetal fish fried snack', 
          price: 50,
          imgurl: '../../assets/snacks/fish.jpg'
        },
        {
          name: 'Chicken Drumstick',
          desc: ' A simple blend of lemon, olive oil and garlic goes a long way with these moist and flavourful roasted chicken drumsticks ',
          price: 80,
          imgurl: '../../assets/snacks/chicken.jpeg'
        },
      ],
      imgurl: '../../assets/snacks.jpg'
    },
    {
      title: 'Biryani',
      desc: 'An Indian dish made with highly seasoned rice and meat, fish, or vegetables. ',
      dishes: [
        {
          name: 'Chicken Biryani',
          desc: "Chicken Biryani is a delicious savory rice dish that's loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice.",
          price: 120,
          imgurl: '../../assets/biryani/chicken.png'
        },
        {
          name: 'Mutton Biryani',
          desc: 'It is made with basmati rice, spices and goat. There are various forms of mutton biryani. One such biryani is the kachay gosht ki biryani or the dum biryani, where the mutton is marinated and cooked along with the rice. ',
          price: 50,
          imgurl: '../../assets/biryani/mutton.jpg'
        },
        {
          name: 'Egg Biryani',
          desc: 'Egg biryani recipe – fragrant rice cooked in aromatic biryani spices and boiled eggs to yield a delicious one pot egg biryani. ',
          price: 50,
          imgurl: '../../assets/biryani/egg.jpg'
        },
      ],
      imgurl: '../../assets/biryani.jpg'
    }
  ]

  user: User =
    {
      id: 'amit@ris.com',
      pass: 'pass'
    }

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
interface User {
  id: String,
  pass: String
}
