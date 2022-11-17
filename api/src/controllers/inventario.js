const GLOBOS = [
  {
    name: 'tuky',
    price: Math.floor(Math.random() * 100),
    catalogId: 1,
    color: 'perlado',
    cant: 50,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668720809/products/lnctpabxfodfypqi7wqw.jpg',
  },
  {
    name: 'tuky',
    price: 1,
    catalogId: 2,
    color: 'std',
    cant: 50,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668720807/products/ejd8w15bo0jufgu8ahhg.jpg',
  },
  {
    name: 'party time',
    price: Math.floor(Math.random() * 100),
    catalogId: 3,
    color: 'std',
    cant: 50,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668720805/products/r1z2pwz3buxad7nbuplm.jpg',
  },
  {
    name: 'globox',
    price: Math.floor(Math.random() * 100),
    catalogId: 4,
    color: 'perlado',
    cant: 50,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668720802/products/yg4rvrwphq3zty95bn7a.jpg',
  },
  {
    name: 'party time',
    price: Math.floor(Math.random() * 100),
    catalogId: 5,
    color: 'perlado',
    cant: 25,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668720809/products/lnctpabxfodfypqi7wqw.jpg',
  },
  {
    name: 'tuky',
    price: Math.floor(Math.random() * 100),
    catalogId: 6,
    color: 'perlado',
    cant: 50,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668720807/products/ejd8w15bo0jufgu8ahhg.jpg',
  },
  {
    name: 'tuky',
    price: 1,
    catalogId: 7,
    color: 'std',
    cant: 50,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668720805/products/r1z2pwz3buxad7nbuplm.jpg',
  },
  {
    name: 'party time',
    price: Math.floor(Math.random() * 100),
    catalogId: 8,
    color: 'std',
    cant: 50,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668720802/products/yg4rvrwphq3zty95bn7a.jpg',
  },
  {
    name: 'globox',
    price: Math.floor(Math.random() * 100),
    catalogId: 9,
    color: 'perlado',
    cant: 50,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668720809/products/lnctpabxfodfypqi7wqw.jpg',
  },
  {
    name: 'party time',
    price: Math.floor(Math.random() * 100),
    catalogId: 10,
    color: 'perlado',
    cant: 25,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668720807/products/ejd8w15bo0jufgu8ahhg.jpg',
  },
];



const catalogos = [
  {
    id: 1,
    name: 'globos',
  },
  {
    id: 2,
    name: 'globos_numeros',
  },
  {
    id: 3,
    name: 'cortinas_metalizadas',
  },
  {
    id: 4,
    name: 'banderines_fc',
  },
  {
    id: 5,
    name: 'radha',
  },
  {
    id: 6,
    name: 'lanza_papeles',
  },
  {
    id: 7,
    name: 'set_de_globos',
  },
  {
    id: 8,
    name: 'burbuja_con_confetti',
  },
  {
    id: 9,
    name: 'test 1',
  },
  {
    id: 10,
    name: 'test 2',
  },
];

const inventario = [
  ...GLOBOS,
];

module.exports = {
  inventario,
  catalogos,
};
