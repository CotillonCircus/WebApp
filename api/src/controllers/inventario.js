const PRODUCTS = [
  {
    name: 'Cortina metalizada corazón azul',
    price: 304,
    catalogId: 1,
    color: 'azul',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890208/products/ljgj1q6jywughsnrbxlz.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada corazón dorada',
    price: 304,
    catalogId: 1,
    color: 'dorado',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890209/products/ahgky8dtcptyw10sejz5.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada corazón plateada',
    price: 304,
    catalogId: 1,
    color: 'plateado',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890209/products/zchf6f6pmwxjyc7lpvgx.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada corazón roja',
    price: 304,
    catalogId: 1,
    color: 'rojo',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890209/products/kcyr2q5yah5kkfryxrhi.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada corazón verde',
    price: 304,
    catalogId: 1,
    color: 'verde',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890209/products/ffky7bghpnj9jonecnos.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada cuadros azul',
    price: 250,
    catalogId: 1,
    color: 'azul',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890210/products/r5ddurt8rt82o1eiyuwd.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada cuadros dorada',
    price: 250,
    catalogId: 1,
    color: 'dorado',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890210/products/zb1tnqzjy9zazlkpfb3m.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada cuadros plateada',
    price: 250,
    catalogId: 1,
    color: 'plateado',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890210/products/q1rbfltdwyfrr4mmzppe.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada cuadros roja',
    price: 250,
    catalogId: 1,
    color: 'rojo',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890211/products/dj0dopwiurglyefo02ug.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada cuadros verde',
    price: 250,
    catalogId: 1,
    color: 'verde',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890211/products/ipcjhxxovvrbb93nxlzy.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada azul',
    price: 230,
    catalogId: 1,
    color: 'azul',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890208/products/cqk6prrgxpn0h6geyqtf.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada dorada',
    price: 230,
    catalogId: 1,
    color: 'dorado',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890212/products/ml3mtygflfk4ruonlqwk.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada plateada',
    price: 230,
    catalogId: 1,
    color: 'plateado',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890213/products/d49zhjgkyz6swwyddy0c.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada roja',
    price: 230,
    catalogId: 1,
    color: 'rojo',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890213/products/skqpznz5uj7phfbg8pal.jpg',
    stock:10
  },
  {
    name: 'Cortina metalizada verde',
    price: 230,
    catalogId: 1,
    color: 'verde',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890214/products/ttways7njkxhe1al3ccy.jpg',
    stock:10
  },
  {
    name: 'Pinta pelo Candela amarillo',
    price: 230,
    catalogId: 3,
    color: 'amarillo',
    cant: 1,
    size: '80gr',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890044/products/gckdkqcpucvh3m2wiq6f.jpg',
    stock:10
  },
  {
    name: 'Pinta pelo Candela azul',
    price: 230,
    catalogId: 3,
    color: 'azul',
    cant: 1,
    size: '80gr',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890044/products/ym6qsaplcv5cnfjuqvjt.jpg',
    stock:10
  },
  {
    name: 'Pinta pelo Candela blanco',
    price: 230,
    catalogId: 3,
    color: 'blanco',
    cant: 1,
    size: '80gr',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890044/products/f2r8z06fkkropdr9pbit.jpg',
    stock:10
  },
  {
    name: 'Pinta pelo Candela celeste',
    price: 230,
    catalogId: 3,
    color: 'celeste',
    cant: 1,
    size: '80gr',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890045/products/ex0s7x77rztntnsxjqqh.jpg',
    stock:10
  },
  {
    name: 'Pinta pelo Candela naranja',
    price: 230,
    catalogId: 3,
    color: 'naranja',
    cant: 1,
    size: '80gr',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890045/products/dyjt8iqur3gpi6z4zznx.jpg',
    stock:10
  },
  {
    name: 'Pinta pelo Candela negro',
    price: 230,
    catalogId: 3,
    color: 'negro',
    cant: 1,
    size: '80gr',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890045/products/pi419ax00lf4mvlwrohk.jpg',
    stock:10
  },
  {
    name: 'Pinta pelo Candela rojo',
    price: 230,
    catalogId: 3,
    color: 'rojo',
    cant: 1,
    size: '80gr',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890045/products/zyk8fdaiuwaxrur6pajp.jpg',
    stock:10
  },
  {
    name: 'Pinta pelo Candela verde',
    price: 230,
    catalogId: 3,
    color: 'verde',
    cant: 1,
    size: '80gr',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890045/products/e5ig2yu5s8yevmmsom97.jpg',
    stock:10
  },
  {
    name: 'Pinta pelo Candela violeta',
    price: 230,
    catalogId: 3,
    color: 'violeta',
    cant: 1,
    size: '80gr',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890046/products/p1mbxg9cdyb1j8ouwiiw.jpg',
    stock:10
  },
  {
    name: 'Serpentina metalizada azul',
    price: 180,
    catalogId: 2,
    color: 'azul',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890046/products/efgukefzzlami8anr1jm.jpg',
    stock:10
  },
  {
    name: 'Serpentina metalizada dorada',
    price: 180,
    catalogId: 2,
    color: 'dorado',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890047/products/hznq1hua5sygtmcshqsn.jpg',
    stock:10
  },
  {
    name: 'Serpentina metalizada fucsia',
    price: 180,
    catalogId: 2,
    color: 'fucsia',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890048/products/hfyycnbwmppdjgs9ooat.jpg',
    stock:10
  },
  {
    name: 'Serpentina metalizada plateada',
    price: 180,
    catalogId: 2,
    color: 'plateado',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890048/products/ybplebmkgrtn0efazofz.jpg',
    stock:10
  },
  {
    name: 'Serpentina metalizada roja',
    price: 180,
    catalogId: 2,
    color: 'rojo',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890048/products/a64qzh3acnjajw2lg89e.jpg',
    stock:10
  },
  {
    name: 'Serpentina metalizada rosada',
    price: 180,
    catalogId: 2,
    color: 'rosado',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890049/products/v1fijhy1rbuyvxg1z8xz.jpg',
    stock:10
  },
  {
    name: 'Serpentina metalizada verde',
    price: 180,
    catalogId: 2,
    color: 'verde',
    cant: 1,
    size: '',
    img: 'https://res.cloudinary.com/ddkurobug/image/upload/v1668890049/products/uibtmatj6i8cxtkmkmbm.jpg',
    stock:10
  },
];



const CATALOGS = [
  {
    id: 1,
    name: 'Cortinas',
  },
  {
    id: 2,
    name: 'Serpentinas',
  },
  {
    id: 3,
    name: 'Pinta Pelo',
  },
];


module.exports = {
  PRODUCTS,
  CATALOGS,
};
