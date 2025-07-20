const navLinks = [
 {
	id: "coffees",
	title: "Coffees",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "art",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const hotCoffeeList = [
  {
    name: "Espresso Roast",
    country: "IT",
    detail: "Single shot, 30 ml",
    price: "$10",
  },
  {
    name: "Café au Lait",
    country: "FR",
    detail: "Steamed milk blend",
    price: "$49",
  },
  {
    name: "Flat White",
    country: "AU",
    detail: "Velvety 150 ml",
    price: "$20",
  },
  {
    name: "Irish Coffee",
    country: "IE",
    detail: "Whiskey & cream, 240 ml",
    price: "$29",
  },
];

const icedCoffeeList = [
  {
    name: "Iced Americano",
    country: "US",
    detail: "Chilled espresso blend",
    price: "$10",
  },
  {
    name: "Iced Vanilla Latte",
    country: "US",
    detail: "Vanilla syrup, milk",
    price: "$49",
  },
  {
    name: "Cold Brew",
    country: "BR",
    detail: "Slow-steeped, 300 ml",
    price: "$20",
  },
  {
    name: "Iced Mocha",
    country: "CH",
    detail: "Chocolate & espresso",
    price: "$29",
  },
];

const featureLists = [
  "Perfectly brewed every time",
  "Latte art, poured with love",
  "Rich, aromatic flavors",
  "Expertly brewed to perfection",
];

const goodLists = [
  "Handpicked coffee beans",
  "Expert brewing techniques",
  "Barista artistry in action",
  "Freshly ground coffee every time",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "https://www.instagram.com/fady2327",
 },
 {
	name: "Linkedin",
	icon: "/images/Linkedin.png",
	url: "https://www.linkedin.com/in/fady-nasser-170538342/",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "https://www.facebook.com/profile.php?id=100006317738411",
 },
];

const allCoffees = [
 {
	id: 1,
	name: "Espresso",
	image: "/images/Espresso.png",
	title: "Strong, Bold, and Intense",
	description:
    "A rich, dark espresso shot brewed with premium coffee beans, delivering a concentrated coffee flavor. It's the foundation of many coffee drinks and a perfect pick-me-up.",
 },
 {
	id: 2,
	name: "Iced Coffee",
	image: "/images/Iced-Coffee.png",
	title: "Chilled and Refreshing",
	description:
      "Brewed coffee chilled and served over ice, often sweetened with milk or cream. A refreshing drink for those who love their coffee cold and crisp.",
 },
 {
	id: 3,
	name: "Cappuccino",
	image: "/images/Cappuccino.png",
	title: "Frothy and Comforting",
	description:
      "Espresso mixed with steamed milk and a light layer of foam on top. A favorite for those who enjoy a balanced, milky coffee with a rich espresso base.",
 },
 {
	id: 4,
	name: "Latte",
	image: "/images/Latte.png",
	title: "Smooth and Creamy",
	description:
	 "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
 },
];

export {
 navLinks,
 hotCoffeeList,
 icedCoffeeList,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCoffees,
};
