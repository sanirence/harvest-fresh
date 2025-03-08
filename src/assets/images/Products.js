const ProductsList = [
    {
      "id": 1,
      "name": "Apple",
      "category": "Fresh Fruits",
      "price": 2.5,
      "unit": "kg",
      "rate": 4.8,
      "img_source": "Designed by Freepik",
      "img": require("./product1-apple.png")
    },
    {
      "id": 2,
      "name": "Banana",
      "category": "Fresh Fruits",
      "price": 1.2,
      "unit": "kg",
      "rate": 4.7,
      "img_source": "Designed by Freepik",
      "img": require("./product2-banana.png")
    },
    {
      "id": 3,
      "name": "Carrot",
      "category": "Fresh Veggies",
      "price": 1.8,
      "unit": "kg",
      "rate": 4.6,
      "img_source": "Designed by Freepik",
      "img": require("./product3-carrot.png")
    },
    {
      "id": 4,
      "name": "Spinach",
      "category": "Fresh Veggies",
      "price": 2.0,
      "unit": "bunch",
      "rate": 4.5,
      "img_source": "Designed by Freepik",
      "img": require("./product4-spinach.png")
    },
    {
      "id": 5,
      "name": "Basil",
      "category": "Herbs & Spices",
      "price": 1.5,
      "unit": "bunch",
      "rate": 4.9,
      "img_source": "Designed by Freepik",
      "img": require("./product5-basil.png")
    },
    {
      "id": 6,
      "name": "Ginger",
      "category": "Herbs & Spices",
      "price": 3.0,
      "unit": "kg",
      "rate": 4.7,
      "img_source": "Designed by Freepik",
      "img": require("./product6-ginger.png")
    },
    {
      "id": 7,
      "name": "Mango",
      "category": "Tropical Fruits",
      "price": 2.8,
      "unit": "kg",
      "rate": 4.8,
      "img_source": "Designed by Freepik",
      "img": require("./product7-mango.png")
    },
    {
      "id": 8,
      "name": "Pineapple",
      "category": "Tropical Fruits",
      "price": 3.5,
      "unit": "piece",
      "rate": 4.6,
      "img_source": "Designed by Freepik",
      "img": require("./product8-pineapple.png")
    },
    {
      "id": 9,
      "name": "Dragon Fruit",
      "category": "Exotic Fruits",
      "price": 4.0,
      "unit": "piece",
      "rate": 4.7,
      "img_source": "Designed by Freepik",
      "img": require("./product9-dragon-fruit.png")
    },
    {
      "id": 10,
      "name": "Durian",
      "category": "Exotic Fruits",
      "price": 8.0,
      "unit": "kg",
      "rate": 4.3,
      "img_source": "Designed by Freepik",
      "img": require("./product10-durian.png")
    },
    {
      "id": 11,
      "name": "Orange",
      "category": "Fresh Fruits",
      "price": 2.3,
      "unit": "kg",
      "rate": 4.8,
      "img_source": "Designed by Freepik",
      "img": require("./product11-orange.png")
    },
    {
      "id": 12,
      "name": "Grapes",
      "category": "Fresh Fruits",
      "price": 3.2,
      "unit": "kg",
      "rate": 4.7,
      "img_source": "Designed by Freepik",
      "img": require("./product12-grapes.png")
    },
    {
      "id": 13,
      "name": "Cabbage",
      "category": "Fresh Veggies",
      "price": 1.5,
      "unit": "piece",
      "rate": 4.6,
      "img_source": "Designed by Freepik",
      "img": require("./product13-cabbage.png")
    },
    {
      "id": 14,
      "name": "Broccoli",
      "category": "Fresh Veggies",
      "price": 2.5,
      "unit": "kg",
      "rate": 4.7,
      "img_source": "Designed by Freepik",
      "img": require("./product14-broccoli.png")
    },
    {
      "id": 15,
      "name": "Mint Leaves",
      "category": "Herbs & Spices",
      "price": 1.3,
      "unit": "bunch",
      "rate": 4.9,
      "img_source": "Designed by Freepik",
      "img": require("./product15-mint-leaves.png")
    },
    {
      "id": 16,
      "name": "Turmeric",
      "category": "Herbs & Spices",
      "price": 3.2,
      "unit": "kg",
      "rate": 4.7,
      "img_source": "Designed by Freepik",
      "img": require("./product16-turmeric.png")
    },
    {
      "id": 17,
      "name": "Papaya",
      "category": "Tropical Fruits",
      "price": 2.6,
      "unit": "piece",
      "rate": 4.7,
      "img_source": "Designed by Freepik",
      "img": require("./product17-papaya.png")
    },
    {
      "id": 18,
      "name": "Coconut",
      "category": "Tropical Fruits",
      "price": 3.0,
      "unit": "piece",
      "rate": 4.5,
      "img_source": "Designed by Freepik",
      "img": require("./product18-coconut.png")
    },
    {
      "id": 19,
      "name": "Rambutan",
      "category": "Exotic Fruits",
      "price": 3.8,
      "unit": "kg",
      "rate": 4.6,
      "img_source": "Designed by Freepik",
      "img": require("./product19-rambutan.png")
    },
    {
      "id": 20,
      "name": "Mangosteen",
      "category": "Exotic Fruits",
      "price": 5.0,
      "unit": "kg",
      "rate": 4.8,
      "img_source": "Designed by Freepik",
      "img": require("./product20-mangosteen.png")
    },
    {
      "id": 21,
      "name": "Strawberry",
      "category": "Fresh Fruits",
      "price": 5.0,
      "unit": "kg",
      "rate": 4.9,
      "img_source": "Designed by Freepik",
      "img": require("./product21-strawberry.png")
    },
    {
      "id": 22,
      "name": "Blueberry",
      "category": "Fresh Fruits",
      "price": 6.5,
      "unit": "kg",
      "rate": 4.8,
      "img_source": "Designed by Freepik",
      "img": require("./product22-blueberry.png")
    },
    {
      "id": 23,
      "name": "Tomato",
      "category": "Fresh Veggies",
      "price": 2.2,
      "unit": "kg",
      "rate": 4.7,
      "img_source": "Designed by Freepik",
      "img": require("./product23-tomato.png")
    },
    {
      "id": 24,
      "name": "Lettuce",
      "category": "Fresh Veggies",
      "price": 1.8,
      "unit": "bunch",
      "rate": 4.6,
      "img_source": "Designed by Freepik",
      "img": require("./product24-lettuce.png")
    },
    {
      "id": 25,
      "name": "Rosemary",
      "category": "Herbs & Spices",
      "price": 2.5,
      "unit": "bunch",
      "rate": 4.9,
      "img_source": "Designed by Freepik",
      "img": require("./product25-rosemary.png")
    },
    {
      "id": 26,
      "name": "Cinnamon",
      "category": "Herbs & Spices",
      "price": 4.0,
      "unit": "kg",
      "rate": 4.8,
      "img_source": "Designed by Freepik",
      "img": require("./product26-cinnamon.png")
    },
    {
      "id": 27,
      "name": "Jackfruit",
      "category": "Tropical Fruits",
      "price": 3.8,
      "unit": "kg",
      "rate": 4.6,
      "img_source": "Designed by Freepik",
      "img": require("./product27-jackfruit.png")
    },
    {
      "id": 28,
      "name": "Soursop",
      "category": "Tropical Fruits",
      "price": 4.2,
      "unit": "piece",
      "rate": 4.5,
      "img_source": "Image by Robert Lens from Pixabay",
      "img": require("./product28-soursop.png")
    },
    {
      "id": 29,
      "name": "Starfruit",
      "category": "Exotic Fruits",
      "price": 3.5,
      "unit": "kg",
      "rate": 4.7,
      "img_source": "Image by christian ananta from Pixabay",
      "img": require("./product29-starfruit.png")
    },
    {
      "id": 30,
      "name": "Passion Fruit",
      "category": "Exotic Fruits",
      "price": 6.0,
      "unit": "kg",
      "rate": 4.7,
      "img_source": "Designed by Freepik",
      "img": require("./product30-passion-fruit.png")
    },
    {
      "id": 31,
      "name": "Pear",
      "category": "Fresh Fruits",
      "price": 3.0,
      "unit": "kg",
      "rate": 4.8,
      "img_source": "Designed by Freepik",
      "img": require("./product31-pear.png")
    },
    {
      "id": 32,
      "name": "Pomegranate",
      "category": "Fresh Fruits",
      "price": 5.2,
      "unit": "kg",
      "rate": 4.9,
      "img_source": "Designed by Freepik",
      "img": require("./product32-pomegranate.png")
    },
    {
      "id": 33,
      "name": "Eggplant",
      "category": "Fresh Veggies",
      "price": 2.3,
      "unit": "kg",
      "rate": 4.6,
      "img_source": "Designed by Freepik",
      "img": require("./product33-eggplant.png")
    },
    {
      "id": 34,
      "name": "Cauliflower",
      "category": "Fresh Veggies",
      "price": 2.8,
      "unit": "piece",
      "rate": 4.5,
      "img_source": "Designed by Freepik",
      "img": require("./product34-cauliflower.png")
    },
    {
      "id": 35,
      "name": "Thyme",
      "category": "Herbs & Spices",
      "price": 2.0,
      "unit": "bunch",
      "rate": 4.9,
      "img_source": "Designed by Freepik",
      "img": require("./product35-thyme.png")
    },
    {
      "id": 36,
      "name": "Chili Pepper",
      "category": "Herbs & Spices",
      "price": 4.5,
      "unit": "kg",
      "rate": 4.8,
      "img_source": "Image by Alexa from Pixabay",
      "img": require("./product36-chili-pepper.png")
    },
    {
      "id": 37,
      "name": "Guava",
      "category": "Tropical Fruits",
      "price": 3.2,
      "unit": "kg",
      "rate": 4.7,
      "img_source": "Designed by Freepik",
      "img": require("./product37-guava.png")
    },
    {
      "id": 38,
      "name": "Watermelon",
      "category": "Tropical Fruits",
      "price": 4.0,
      "unit": "piece",
      "rate": 4.6,
      "img_source": "Designed by Freepik",
      "img": require("./product38-watermelon.png")
    },
    {
      "id": 39,
      "name": "Longan",
      "category": "Exotic Fruits",
      "price": 4.8,
      "unit": "kg",
      "rate": 4.7,
      "img_source": "Image by Wiroj Phungsoonthorn from Pixabay",
      "img": require("./product39-longan.png")
    },
    {
      "id": 40,
      "name": "Lychee",
      "category": "Exotic Fruits",
      "price": 6.2,
      "unit": "kg",
      "rate": 4.9,
      "img_source": "Image by aleksandra85foto from Pixabay",
      "img": require("./product40-lychee.png")
    }
]
  
export default ProductsList