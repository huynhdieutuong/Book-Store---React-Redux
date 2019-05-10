const initialState = [
  {
    id: 1,
    name: 'The Alchemist',
    image: 'the-alchemist.jpg',
    author: 'Paulo Coelho',
    price: 10,
    inventory: 50,
    rating: 4.5
  },
  {
    id: 2,
    name: 'Harry Potter: A History of Magic',
    image: 'harry-potter.jpg',
    author: 'British Library',
    price: 20,
    inventory: 10,
    rating: 3.5
  },
  {
    id: 3,
    name: 'Sapiens: A Brief History Of Humankind',
    image: 'sapiens.jpg',
    author: 'Yuval Noah Harari',
    price: 15,
    inventory: 20,
    rating: 4
  },
  {
    id: 4,
    name: 'The Fault In Our Stars',
    image: 'the-fault-in-our-stars.jpg',
    author: 'John Green',
    price: 18,
    inventory: 40,
    rating: 5
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;