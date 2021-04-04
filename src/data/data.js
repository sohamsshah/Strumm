import faker from "faker";
import {randomPicker} from "./../utils/randomPicker"
import Guitars from "./../images/guitars.jpg"
import Drums from "./../images/drums.png"
import Studio from "./../images/studio.jpg"
import Traditional from "./../images/traditional.png"
import Keys from "./../images/keys.jpg"
import Merchandise from "./../images/merchandise.jpg"


faker.seed(123);

export const data = [...Array(500)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  category: faker.random.arrayElement([
    {"instrument":"Guitar", "type": randomPicker(["Acoustic", "Electric", "Classical"])},
    {"instrument":"Keys", "type": randomPicker(["Keyboard", "Digital Piano", "Workstation"])},
    {"instrument":"Drums", "type": randomPicker(["Crash Cymbals", "Hi-Hats", "Ride Cymbals", "Splashes & Effects", "Cymbal Packs"])},
    {"instrument":"Studio", "type": randomPicker(["Bundles", "Condenser", "Controllers", "DJ Mixer", "Drum Mics", "Dynamic", "Mobile", "Production", "Synthesizer"])},
    {"instrument":"Traditional", "type": randomPicker(["Violin", "Flutes", "Saxophone", "Harmonium", "Mandolin"])},
    {"instrument":"Merchandise", "type": randomPicker(["T-shirt", "Painting", "Stickers"])}


  ]),
  level: faker.random.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional"
  ]),
  color: faker.commerce.color()
}));

export const categories = [
  {title:"Guitars", src:Guitars, href:"/categories/guitars"},
  {title:"Keys", src:Keys, href:"/categories/keys"},
  {title:"Drums", src:Drums, href:"/categories/drums"},
  {title:"Studio", src:Studio, href:"/categories/studio"},
  {title:"Traditional", src:Traditional, href:"/categories/traditional"},
  {title:"Merchandise", src:Merchandise, href:"/categories/merchandise"}

] 

