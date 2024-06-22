import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_809326-MLA46115014340_052021-O.webp",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_868385-MLA52463970075_112022-O.webp",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_814559-MLA53970921150_022023-O.webp",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_733580-MLA72063241888_102023-O.webp",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_606698-MLU74678792835_022024-O.webp",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp",
    categoryId: 6,
    stock: 10,
  },
  {

    name: "iPhone 12 Pro",
    description: "A powerful device with an incredible camera system, Super Retina XDR display and 5G capabilities.",
    price: 999,
    stock: 15,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero",
    categoryId: 1
  },
  {

    name: "iPad Air",
    description: "Experience power and versatility with iPad Air: stunning Liquid Retina display, fast performance, and support for Apple Pencil and Magic Keyboard.",
    price: 599,
    stock: 15,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202009",
    categoryId: 3
  },
  {
    name: "MacBook Pro 13 inches",
    description: "Get through your work with the MacBook Pro with the Apple M1 chip, Retina display, and all-day battery life.",
    price: 1299,
    stock: 18,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1603406905000",
    categoryId: 2
  },
  {

    name: "Apple Magic Keyboard",
    description: "Experience comfort and precision with the Apple Magic Keyboard: sleek design, responsive keys, and long battery life.",
    price: 99,
    stock: 25,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXQT2?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1598599162000",
    categoryId: 8
  },

  {

    name: "iPad Air",
    description: "Discover iPad Air with a stunning Liquid Retina display, A14 Bionic chip, and support for Apple Pencil and Magic Keyboard.",
    price: 599,
    stock: 22,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-202009_FMT_WHH?wid=940&hei=1112&fmt=jpeg&qlt=95&.v=1599933955000",
    categoryId: 3
  },
  {
    name: "Apple TV 4K",
    description: "Immerse yourself in the highest quality video with Apple TV 4K featuring Dolby Atmos, Dolby Vision, and support for 4K HDR content.",
    price: 179,
    stock: 20,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1617732707000",
    categoryId: 7
  },
  {

    name: "Apple Pencil (2nd generation)",
    description: "Unlock new possibilities with Apple Pencil, delivering precise writing, drawing, and marking capabilities for iPad Pro.",
    price: 129,
    stock: 23,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU8F2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1562954626666",
    categoryId: 8
  },
  {

    name: "Apple TV HD",
    description: "Enjoy your favorite content in HD with Apple TV that features Dolby Digital Plus 7.1 surround sound, A8 chip and Siri voice search.",
    price: 149,
    stock: 18,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-hero-select-201510_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1596110685000",
    categoryId: 7
  },
  {

    name: "iPhone 13",
    description: "Experience the future of iPhone with iPhone 13 featuring advanced camera capabilities, powerful performance, and 5G connectivity.",
    price: 799,
    stock: 15,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-select-2021",
    categoryId: 1
  },
  {

    name: "Apple TV 4K (2nd generation)",
    description: "Immerse yourself in stunning 4K HDR content with Apple TV 4K featuring high frame rate HDR, Dolby Vision, and surround sound.",
    price: 179,
    stock: 17,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1617732707000",
    categoryId: 7
  },
  {

    name: "Apple MagSafe Charger",
    description: "Charge your iPhone 12 or iPhone 13 effortlessly with the Apple MagSafe Charger that features magnetic alignment and up to 15W of power.",
    price: 39,
    stock: 23,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1603996255000",
    categoryId: 8
  },
  {

    name: "Apple Thunderbolt 3 Cable (USB-C) (0.8m)",
    description: "Connect your Thunderbolt 3 devices with this high-performance cable that features Thunderbolt 3 technology and USB-C compatibility.",
    price: 39,
    stock: 16,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQ4H2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1503676607000",
    categoryId: 8
  },
  {

    name: "Apple USB-C Digital AV Multiport Adapter",
    description: "Connect your USB-C devices to an HDMI display, USB-A device, and USB-C charging cable with this versatile Apple adapter.",
    price: 69,
    stock: 17,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJ1K2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1521749818000",
    categoryId: 8
  },
  {

    name: "Apple 20W USB-C Power Adapter",
    description: "Fast charge your iPhone, iPad or other compatible devices with this compact and convenient 20W USB-C power adapter from Apple.",
    price: 19,
    stock: 22,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1603996255000",
    categoryId: 8
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
