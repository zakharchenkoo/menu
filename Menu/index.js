const menu = [
  {
    id: 1,
    title: "filet z kurczaka po ukraińsku/Ukrainian Style Chicken Filet",
    category: "dania kozaka/cossack dishes",
    price: 16,
    img: "./images/item-1.jpg",
    desc: `soczysty filet z kurczaka smażony w tradycyjnym cieście ukraińskim na bazie jajek, mąki i aromatycznych przypraw/juicy chicken fillet fried in traditional Ukrainian batter based on eggs, flour and aromatic spices (porcja 100g) `,
  },
  {
    id: 2,
    title: "kotlet kozacki/cossack cutlet",
    category: "dania kozaka/cossack dishes",
    price: 16,
    img: "./images/item-2.jpg",
    desc: `chrupiący i soczysty kawałek schabu panierowany tradycyjnej panierce z bułki tartej/crispy and juicy pork loin breaded in traditional breadcrumbs (porcja 170g)`,
  },
  {
    id: 3,
    title: "sałatka kozaka/cossack salad",
    category: "sałatki/salads",
    price: 18,
    img: "./images/item-3.jpg",
    desc: `mix swieżych warzyw: sałaty lodowej, pomidora, ogórka, cebuli, oliwek, z dodatkiem sera feta i polany sosem winegret robionym według naszej receptury/mix of fresh vegetables: lettuce, tomato, cucumber, onion, olives, topped with feta cheese and drizzled with dressing made according to our recipe (porcja 420g)`,
  },
  {
    id: 4,
    title: "sałatka z grillowanym kurczakiem/salad with grilled chicken",
    category: "sałatki/salads",
    price: 28,
    img: "./images/item-4.jpg",
    desc: `mix swieżych warzyw: sałaty lodowej, pomidora, ogórka, cebuli, oliwek, z dodatkiem sera feta, soczystych, grillowanych kawałków piersi z kurczaka i polany sosem winegret robionym według naszej receptury/a mix of fresh vegetables: lettuce, tomato, cucumber, onion, olives, topped with feta cheese, juicy grilled chicken breast and drizzled with dressing made according to our recipe (porcja 520g)`,
  },
  {
    id: 5,
    title: "sałatka z grillowanym łososiem/salad with Grilled Salmon",
    category: "sałatki/salads",
    price: 34,
    img: "./images/item-5.jpg",
    desc: `mix swieżych warzyw: sałaty lodowej, pomidora, ogórka, cebuli, oliwek, z dodatkiem sera feta, soczystych, grillowanych kawałków fososta i polany sosem winegret robionym według naszej receptury/a mix of fresh vegetables: lettuce, tomato, cucumber, onion, olives, topped with feta cheese, juicy grilled chicken breast and garnished with house-made dressing (porija 520g)`,
  },
  {
    id: 6,
    title: "pierogi ukraińskie z twarogiem/ukrainian Dumplings with Cottage Cheese",
    category: "pierogi/dumplings",
    price: 24,
    img: "./images/item-6.jpg",
    desc: `delikatne ciasto pierogowe nadziewane farszem ziemniaczano-twarogowym, podawane z gęstą śmietana i okraszone cebulka/Delicate dumpling dough stuffed with potato and cottage cheese filling, served with thick cream and topped with onion (porcja 8 sztuk)`,
  },
  {
    id: 7,
    title: "pierogi ukraińskie z kapusta/ukrainian Dumplings with Cabbage",
    category: "pierogi/dumplings",
    price: 24,
    img: "./images/item-6.jpg",
    desc: `delikatne ciasto pierogowe nadziewane farszem z kapusty kiszonej, podawane z gesta, śmietana i okraszone cebulka/delicate dumpling dough stuffed with sauerkraut filling, served with thick cream and sprinkled with onion (porcja 8 sztuk)`,
  },
  {
    id: 8,
    title: "pielmeni mięsne/meat dumplings",
    category: "pierogi/dumplings",
    price: 24,
    img: "./images/item-8.jpg",
    desc: `delikatne ciasto pierogowe nadziewane farszem mięsnym posypane natką pietruszki/delicate dumpling dough stuffed with meat filling sprinkled with parsley (porcja 300g)`,
  },
  {
    id: 9,
    title: "kotlet po francusku/french-style cutlet",
    category: "dania kozaka/cossack dishes",
    price: 24,
    img: "./images/item-9.jpg",
    desc: `soczysty filet z kurczaka posypany aromatycznymi przyprawami i zapiekany z dodatkiem pieczarek sera żółtego, pomidora i majonezu/juicy chicken fillet sprinkled with aromatic spices and baked with mushrooms, cheese, tomato and mayonnaise (porcja 170g)`,
  },
  {
    id: 10,
    title: "krokiety z pieczarkami/croquettes with mushrooms",
    category: "dania kozaka/cossack dishes",
    price: 24,
    img: "./images/item-10.jpg",
    desc: `chrupiące krokiety, faszerowane nadzieniem pieczarkowo-serowym i doprawione aromatycznymi przyprawami/crispy croquettes, stuffed with a mushroom and cheese filling and flavoured with aromatic spices (porcja 2 sztuki)`,
  },
  {
    id: 11,
    title: "filet ryby duszony z warzywami po ukraińsku/ukrainian-style Stewed Fish Filet with Vegetables",
    category: "dania rybne/fish dishes",
    price: 18,
    img: "./images/item-11.jpg",
    desc: `delikatne rozpływajace się w ustach kawałki ryby dodatkiem warzyw duszonych w aromatycznym sosie pomidorowym/delicate, melt-in-the-mouth pieces of fish with vegetables stewed in aromatic tomato sauce (porcja 175g)`,
  },
  {
    id: 12,
    title: "smażona ryba/fried Fish",
    category: "dania rybne/fish dishes",
    price: 18,
    img: "./images/item-12.jpg",
    desc: `delikatny filet rybny w chrupiącej i złocistej panierce/delicate fish fillet in crispy and golden coating (porcja 100g)`,
  },
  {
    id: 13,
    title: "barszcz ukraiński z pampuszka/ukrainian Borsch with bread",
    category: "zupy/soups",
    price: 26,
    img: "./images/item-13.jpg",
    desc: `bulion warzywny z czerwonych buraków, z dodatkiem ziemniaków, fasoli i swieżej kapusty, śmietana, pieczywa pampuszka 1 sztuka/Ukrainian vegetable soup made from red beetroot with potatoes, beans and fresh cabbage, sour cream, roasted pampushka 1 piece (porcja 400ml)`,
  },
  {
    id: 14,
    title: "ukraińska solanka/ukrainian Solanka",
    category: "zupy/soups",
    price: 26,
    img: "./images/item-14.jpg",
    desc: `gesta zupa ugotowana na mięsnym rosole z dodatkiem aromatycznych przypraw ziołowych, kiełbasa śmietana, pieczywo pampuszka 1 sztuka/thick soup cooked in meat broth with aromatic herbal spices, cream sausage, bread pampushka 1 piece (porcja 400ml)`,
  },
  {
    id: 15,
    title: "pucharek lodowy/Ice Cream Cup",
    category: "desery/desserts",
    price: 14,
    img: "./images/item-15.jpg",
    desc: `trzy gafki lodów podawane z kawałkami owoców sezonowych, bitą śmietaną i polewą owocową lub czekoladową/three scoops of ice cream served with pieces of seasonal fruit, whipped cream and fruit or chocolate topping`,
  },
  {
    id: 16,
    title: "tiramisu",
    category: "desery/desserts",
    price: 15,
    img: "./images/item-16.jpg",
    desc: `prawdziwe tiramisu robione na bazie serka mascarpone, biszkoptów i kawy espresso/real tiramisu made based on mascarpone cheese, sponge cake and espresso coffee (porcja 150 g)`,
  },
  {
    id: 17,
    title: "kotlet po kijowsku/kyiv-style cutlet",
    category: "dania kozaka/cossack dishes",
    price: 20,
    img: "./images/item-17.jpg",
    desc: `filet z piersi kurczaka 100g. w panierce wypełniony maselkiem i koperkiem/chicken breast fillet 100g. in breadcrumbs filled with butter and dill (porcja 100g)`,
  },
  {
    id: 18,
    title: "kotlet domowy/homemade cutlet",
    category: "dania kozaka/cossack dishes",
    price: 16,
    img: "./images/item-18.jpg",
    desc: `mieso mielone w chrupiącej panierce/minced meat in crispy breaded crust (porcja 115g)`,
  },
  {
    id: 19,
    title: "surówka z marchewki/Carrot salad",
    category: "surówki/appetiser salads",
    price: 5,
    img: "./images/item-19.jpg",
    desc: `surówka na bazie marchwi, czosnku oraz aromatycznych przypraw/Salad based on carrots, garlic and aromatic spices (porcja 50g)`,
  },
  {
    id: 20,
    title: "surówka z buraczków/Beetroot Salad",
    category: "surówki/appetiser salads",
    price: 5,
    img: "./images/item-20.jpg",
    desc: `surówka ze świeżych buraczków z dodatkiem przypraw/Salad of fresh beetroots with seasonings (porcja 50g)`,
  },
  {
    id: 21,
    title: "zrazy ukraińskie/ukrainian potato strips",
    category: "dania kozaka/cossack dishes",
    price: 28,
    img: "./images/item-21.jpg",
    desc: `kotlety ziemniaczane z nadzieniem mięsnym wieprzowym/potato cutlets with meat and pork filling (porcja 8 sztuk)`,
  },
  {
    id: 22,
    title: "gołabki po ukraińsku/ukrainian style stuffed cabbage rolls",
    category: "dania kozaka/cossack dishes",
    price: 28,
    img: "./images/item-22.jpg",
    desc: `farsz na bazie mięsa wieprzowego, białego ryżu, warzyw i aromatycznych przypraw, zawijany w delikatnych liściach kapusty/stuffing based on pork meat, white rice, vegetables and aromatic spices, wrapped in delicate cabbage leaves (porcja 200g)`,
  },
  {
    id: 23,
    title: "mieso pod ananasem/meat under pineapple",
    category: "dania kozaka/cossack dishes",
    price: 22,
    img: "./images/item-23.jpg",
    desc: `soczysty i kruchy schab zapiekany z ananasem , serem żółtym i majonezem/succulent and tender pork loin baked with pineapple, cheese and mayonnaise (porcja 170g)`,
  },
  {
    id: 24,
    title: "swieżonka ukraińska/ukrainian pork chops",
    category: "dania kozaka/cossack dishes",
    price: 28,
    img: "./images/item-24.jpg",
    desc: `soczyste, smażone kawałki mięsa wieprzowego ze szklisto-złotą cebulą/juicy, fried pieces of pork with glazed golden onion (porcja 200g)`,
  },
  {
    id: 25,
    title: "ketchup",
    category: "dodatki/extras",
    price: 2,
    img: "./images/item-25.jpg",
    desc: `(porcja 300g)`,
  },
  {
    id: 26,
    title: "majonez/Mayonnaise",
    category: "dodatki/extras",
    price: 3,
    img: "./images/item-26.jpg",
    desc: `(porcja 300g)`,
  },
  {
    id: 27,
    title: "sos czosnkowy/Garlic sauce",
    category: "dodatki/extras",
    price: 3,
    img: "./images/item-27.jpg",
    desc: `(porcja 300g)`,
  },
  {
    id: 28,
    title: "śmietana/Cream",
    category: "dodatki/extras",
    price: 3,
    img: "./images/item-27.jpg",
    desc: `(porcja 300g)`,
  },
  {
    id: 29,
    title: "podsmazona cebulka/Fried Onion",
    category: "dodatki/extras",
    price: 5,
    img: "./images/item-29.jpg",
    desc: `(porcja 100g)`,
  },
  {
    id: 30,
    title: "kompot owocowy/Fruit compote",
    category: "napoje/drinks",
    price: 6,
    img: "./images/item-30.jpg",
    desc: `domowy kompot owocowy/Home-made fruit compote (porcja 250 ml)`,
  },
   {
    id: 31,
    title: "placki nadziewane miesem/pancakes stuffed with meat",
    category: "dania kozaka/cossack dishes",
    price: 32,
    img: "./images/item-31.jpg",
    desc: `złociste i chrupiące placki ziemniaczane, nadziewane delikatnym mięsem wieprzowym/golden and crispy potato pancakes stuffed with tender pork meat (porcja 4 sztuki)`,
  },
  {
    id: 32,
    title: "placki w kotle/pancakes in the Pot",
    category: "dania kozaka/cossack dishes",
    price: 32,
    img: "./images/item-32.jpg",
    desc: `złociste i chrupiące placki ziemniaczane, przekładane aromatycznym farszem z pieczarek, podawane z gęstą śmietaną/golden and crispy potato pancakes with aromatic mushroom stuffing, served with thick cream (porcja 5 sztuk)`,
  },
  {
    id: 33,
    title: "ukraińska zupa z klopsikami lub vege/ukrainian Soup with Meatballs or Vege",
    category: "zupy/soups",
    price: 22,
    img: "./images/item-33.jpg",
    desc: `wywar warzywny podawany z wieprzowymi klopsikami, ziemniakami, doprawiony aromatycznymi przyprawami i posypany koperkiem/vegetable soup served with pork meatballs, and potatoes, seasoned with aromatic spices and sprinkled with dill (porcja 400ml)`,
  },
  {
    id: 34,
    title: "ukraińska zupa rybna/ukrainian Fish Soup",
    category: "zupy/soups",
    price: 26,
    img: "./images/item-34.jpg",
    desc: `bulion warzywny z dodatkiem kawałków swieżego łososia, ziemniaków, doprawiony aromatycznymi przyprawami/vegetable bouillon with pieces of fresh salmon, and potatoes, seasoned with aromatic spices (porcja 400ml)`,
  },
  {
    id: 35,
    title: "goracy garnek po ukraińsku/ukrainian hot pot",
    category: "dania kozaka/cossack dishes",
    price: 32,
    img: "./images/item-35.jpg",
    desc: `mięso wieprzowe 50g z duszonymy ziemniakami i warzywami/50g pork with stewed potatoes and vegetables (porcja 400g)`,
  },
  {
    id: 36,
    title: "placki tradycyjne/traditional pancakes",
    category: "dania kozaka/cossack dishes",
    price: 19,
    img: "./images/item-36.jpg",
    desc: `złociste chrupiące placki ziemniaczane, podawane z gęstę śmietana/golden and crispy potato pancakes, served with thick cream (porcja 5 sztuk)`,
  },
  {
    id: 37,
    title: "frytki (jako dodatek do dania)/French Fries (as side dish)",
    category: "dodatki/extras",
    price: 8,
    img: "./images/item-37.jpg",
    desc: `(porcja 200g)`,
  },
  {
    id: 38,
    title: "frytki (jako danie)/French Fries",
    category: "dodatki/extras",
    price: 12,
    img: "./images/item-37.jpg",
    desc: `(porcja 200g)`,
  },
  {
    id: 39,
    title: "puree ziemniaczane/Mashed Potatoes",
    category: "dodatki/extras",
    price: 6,
    img: "./images/item-39.jpg",
    desc: `delikatne puree z ziemniaków dodatkiem mleka i masła (porcja 200 g)`,
  },
      {
    id: 40,
    title: "ziemniaki po chłopsku (jako dodatek do dania)/Home-made potatoes (as a side dish)",
    category: "dodatki/extras",
    price: 10,
    img: "./images/item-40.jpg",
    desc: `(porcja 200g)`,
  },
       {
    id: 41,
    title: "ziemniaki po chłopsku/Home-made potatoes",
    category: "dodatki/extras",
    price: 14,
    img: "./images/item-40.jpg",
    desc: `(porcja 200g)`,
  },
  {
    id: 42,
    title: "ryż z warzywami/Rice with Vegetables",
    category: "dodatki/extras",
    price: 6,
    img: "./images/item-42.jpg",
    desc: `biały ryż, ugotowany al dente z dodatkiem warzyw: groszek, kukurydza, marchew (porcja 200g)`,
  },
  {
    id: 43,
    title: "ryż bialy/White rice",
    category: "dodatki/extras",
    price: 6,
    img: "./images/item-43.jpg",
    desc: `biały, gotowany ryż (porcja 200g)`,
  },
  {
    id: 44,
    title: "pampuszka/Pampushka",
    category: "dodatki/extras",
    price: 6,
    img: "./images/item-44.jpg",
    desc: `tradycyjna bułeczka ukraińska polana mieszanką przypraw (porcja 2 sztuki)`,
  },
  {
    id: 45,
    title: "bukiet surówek/Salad Mix",
    category: "surówki/appetiser salads",
    price: 12,
    img: "./images/item-45.jpg",
    desc: `zestaw 4 surówek: z marchwi, czerwonej kapusty, białej kapusty i buraczków/Set of 4 salads: carrot, red cabbage, white cabbage and beetroot (porcja 150g) `,
  },
  {
    id: 46,
    title: "surówka z czerwonej kapusty/Red Cabbage Salad",
    category: "surówki/appetiser salads",
    price: 5,
    img: "./images/item-46.jpg",
    desc: `surówka ze swieżej kapusty czerwonej z dodatkami przypraw/Fresh red cabbage salad with seasonings (porcja 50 g)`,
  },
  {
    id: 47,
    title: "surówka bialej kapusty/White Cabbage Salad",
    category: "surówki/appetiser salads",
    price: 5,
    img: "./images/item-47.jpg",
    desc: `surówka ze swieżej kapusty bialej z dodatkami przypraw/Salad of fresh white cabbage with seasonings (porcja 50g)`,
  },
  {
    id: 48,
    title: "naleśniki z wiśniami/Pancakes with cherries",
    category: "naleśniki/pancakes",
    price: 12,
    img: "./images/item-48.jpg",
    desc: `delikaine naleśniki nadziewane dzemem wiśniowym, podawane z bitą śmietana i polewą czekoladowa/Delicate pancakes filled with cherry jam, served with whipped cream and chocolate topping (porcja 3 sztuki)`,
  },
  {
    id: 49,
    title: "naleśniki z truskawkami/Pancakes with strawberries",
    category: "naleśniki/pancakes",
    price: 12,
    img: "./images/item-49.jpg",
    desc: `delikatne naleśniki nadziewane dzemem truskaukowym, podawane z bita śmietaną i polewą czekoladową/Delicate pancakes filled with strawberry jam and served with whipped cream and chocolate topping (porcja 3 sztuki)`,
  },
  {
    id: 50,
    title: "naleśniki z nutella/Pancakes with Nutella",
    category: "naleśniki/pancakes",
    price: 16,
    img: "./images/item-50.jpg",
    desc: `delikatne naleśniki nadziewane oryginalnym kremem Nutella, podawane z bita śmietaną i polewą czekoladową/Delicate pancakes stuffed with original Nutella cream, served with whipped cream and chocolate topping (porcja 3 sztuki)`,
  },
  {
    id: 51,
    title: "lemoniada/Lemonade",
    category: "napoje/drinks",
    price: 12,
    img: "./images/item-51.jpg",
    desc: `(500 ml)`,
  },
  {
    id: 52,
    title: "coca-cola",
    category: "napoje/drinks",
    price: 8,
    img: "./images/item-52.jpg",
    desc: `(250 ml)`,
  },
  {
    id: 53,
    title: "sprite",
    category: "napoje/drinks",
    price: 8,
    img: "./images/item-53.jpg",
    desc: `(250 ml)`,
  },
  {
    id: 54,
    title: "fanta",
    category: "napoje/drinks",
    price: 8,
    img: "./images/item-54.jpg",
    desc: `(250 ml)`,
  },
  {
    id: 55,
    title: "lipton",
    category: "napoje/drinks",
    price: 8,
    img: "./images/item-55.png",
    desc: `(200 ml)`,
  },
  {
    id: 56,
    title: "woda niegazowana/Still Water",
    category: "napoje/drinks",
    price: 6,
    img: "./images/item-56.jpg",
    desc: `(330 ml)`,
  },
  {
    id: 57,
    title: "woda gazowana/Sparkling water",
    category: "napoje/drinks",
    price: 6,
    img: "./images/item-57.jpg",
    desc: `(330 ml)`,
  },
  {
    id: 58,
    title: "redbull",
    category: "napoje/drinks",
    price: 12,
    img: "./images/item-58.jpg",
    desc: `(250 ml)`,
  },
  {
    id: 59,
    title: "woda karafka/Water Carafe",
    category: "napoje/drinks",
    price: 12,
    img:"./images/item-59.jpg",
    desc: `1 l`,
  },
  {
    id: 60,
    title: "coca-cola karafka/Coca-Cola Carafe",
    category: "napoje/drinks",
    price: 16,
    img: "./images/item-52.jpg",
    desc: `1 l`,
  },
  {
    id: 61,
    title: "sok pomarańczowy/Orange juice",
    category: "napoje/drinks",
    price: 7,
    img: "./images/item-61.jpg",
    desc: `(250 ml)`,
  },
  {
    id: 62,
    title: "sok jabłkowy/Apple juice",
    category: "napoje/drinks",
    price: 7,
    img: "./images/item-62.png",
    desc: `(250 ml)`,
  },
  {
    id: 63,
    title: "espresso",
    category: "kawy/coffees",
    price: 8,
    img: "./images/item-63.jpg",
    desc: ` `,
  },
  {
    id: 64,
    title: "kawa czarna/Coffee Black",
    category: "kawy/coffees",
    price: 8,
    img: "./images/item-64.jpg",
    desc: ` `,
  },
  {
    id: 65,
    title: "kawa czarna z mlekiem/Black Coffee with Milk",
    category: "kawy/coffees",
    price: 9,
    img: "./images/item-65.jpg",
    desc: ` `,
  },
  {
    id: 66,
    title: "cappucino",
    category: "kawy/coffees",
    price: 10,
    img: "./images/item-66.png",
    desc: `(250 ml)`,
  },
  {
    id: 67,
    title: "latte machiato",
    category: "kawy/coffees",
    price: 12,
    img: "./images/item-67.jpg",
    desc: `(400 ml)`,
  },
  {
    id: 68,
    title: "herbata czarna/Black tea",
    category: "herbaty/teas",
    price: 8,
    img: "./images/item-68.png",
    desc: ` `,
  },
  {
    id: 69,
    title: "herbata zielona/Green tea",
    category: "herbaty/teas",
    price: 8,
    img: "./images/item-69.png",
    desc: ` `,
  },
  {
    id: 70,
    title: "herbata mietowa/Mint tea",
    category: "herbaty/teas",
    price: 8,
    img: "./images/item-70.png",
    desc: ` `,
  },
  {
    id: 71,
    title: "herbata owocowa/Fruit tea",
    category: "herbaty/teas",
    price: 8,
    img: "./images/item-71.jpg",
    desc: ` `,
  },
  {
    id: 72,
    title: "piwo kozel/Kozel beer",
    category: "piwo z beczki/draught beer",
    price: 9,
    img: "./images/item-72.png",
    desc: `(300 ml)`,
  },
  {
    id: 73,
    title: "piwo kozel/Kozel beer",
    category: "piwo z beczki/draught beer",
    price: 12,
    img: "./images/item-72.png",
    desc: `(500 ml)`,
  },
  {
    id: 74,
    title: "piwo pilsner/Pilsner beer",
    category: "piwo z beczki/draught beer",
    price: 11,
    img: "./images/item-74.png",
    desc: `(300 ml)`,
  },
  {
    id: 75,
    title: "piwo pilsner/Pilsner beer",
    category: "piwo z beczki/draught beer",
    price: 14,
    img: "./images/item-74.png",
    desc: `(500 ml)`,
  },
  {
    id: 76,
    title: "sok do piwa/Beer Juice",
    category: "piwo z beczki/draught beer",
    price: 1,
    img: "./images/logo_normal.png",
    desc: ` `,
  },
  {
    id: 77,
    title: "tyskie",
    category: "piwo butelkowe/bottled beer",
    price: 10,
    img: "./images/item-77.jpg",
    desc: `(500 ml)`,
  },
  {
    id: 78,
    title: "lech mojito",
    category: "piwo butelkowe/bottled beer",
    price: 10,
    img: "./images/item-78.jpg",
    desc: `(500 ml)`,
  },
  {
    id: 79,
    title: "lech free",
    category: "piwo butelkowe/bottled beer",
    price: 10,
    img: "./images/item-79.jpg",
    desc: `(500 ml)`,
  },
  {
    id: 80,
    title: "radler mojito free",
    category: "piwo butelkowe/bottled beer",
    price: 10,
    img:"./images/item-80.jpg",
    desc: `(500 ml)`,
  },
  {
    id: 81,
    title: "aperol spritz",
    category: "koktajle/cocktails",
    price: 18,
    img: "./images/item-81.png",
    desc: ` `,
  },
  {
    id: 82,
    title: "mojito",
    category: "koktajle/cocktails",
    price: 18,
    img: "./images/item-82.jpg",
    desc: ` `,
  },
  {
    id: 83,
    title: "cuba libre",
    category: "koktajle/cocktails",
    price: 18,
    img: "./images/item-83.jpg",
    desc: ` `,
  },
  {
    id: 84,
    title: "seks na plaży/sex on the beach",
    category: "koktajle/cocktails",
    price: 18,
    img: "./images/item-84.jpg",
    desc: `(250 ml)`,
  },
  {
    id: 85,
    title: "błękitna laguna/blue lagoon",
    category: "koktajle/cocktails",
    price: 18,
    img: "./images/item-85.jpg",
    desc: `(400 ml)`,
  },
  {
    id: 86,
    title: "tequila sunrise",
    category: "koktajle/cocktails",
    price: 18,
    img: "./images/item-86.jpg",
    desc: ` `,
  },
  {
    id: 87,
    title: "martini bianco",
    category: "wina/wines",
    price: 16,
    img: "./images/item-87.jpg",
    desc: `(110 ml)`,
  },
  {
    id: 88,
    title: "martini bianco",
    category: "wina/wines",
    price: 120,
    img: "./images/item-88.jpg",
    desc: `(1 l)`,
  },
  {
    id: 89,
    title: "prosecco",
    category: "wina/wines",
    price: 16,
    img: "./images/item-89.jpg",
    desc: `(110 ml)`,
  },
  {
    id: 90,
    title: "prosecco",
    category: "wina/wines",
    price: 90,
    img: "./images/item-90.jpg",
    desc: `(700 ml)`,
  },
  {
    id: 91,
    title: "riesling wytrawny",
    category: "wina/wines",
    price: 25,
    img:"./images/logo_normal.png",
    desc: `(110 ml)`,
  },
  {
    id: 92,
    title: "wino białe wytrawne/Dry White Wine",
    category: "wina/wines",
    price: 18,
    img: "./images/item-92.jpg",
    desc: `(110 ml)`,
  },
  {
    id: 93,
    title: "wino białe półwytrawne/White Semi-dry Wine",
    category: "wina/wines",
    price: 18,
    img: "./images/item-92.jpg",
    desc: `(110 ml)`,
  },
  {
    id: 94,
    title: "wino białe słodkie/Sweet White Wine",
    category: "wina/wines",
    price: 18,
    img: "./images/item-92.jpg",
    desc: `(110 ml)`,
  },
   {
    id: 95,
    title: "wino białe półsłodkie/Semi-sweet White Wine",
    category: "wina/wines",
    price: 18,
    img: "./images/item-92.jpg",
    desc: `(110 ml)`,
  },
  {
    id: 96,
    title: "wino białe wytrawne/Dry White Wine",
    category: "wina/wines",
    price: 80,
    img: "./images/logo_normal.png",
    desc: `(butelka)/(bottle)`,
  },
  {
    id: 97,
    title: "wino białe półwytrawne/Semi-dry White Wine",
    category: "wina/wines",
    price: 80,
    img:"./images/logo_normal.png",
    desc: `(butelka)/(bottle)`,
  },
  {
    id: 98,
    title: "wino białe półsłodkie/Semi-sweet White Wine",
    category: "wina/wines",
    price: 80,
    img: "./images/logo_normal.png",
    desc: `(butelka)/(bottle)`,
  },
  {
    id: 99,
    title: "wino białe słodkie/White Sweet Wine",
    category: "wina/wines",
    price: 80,
    img: "./images/logo_normal.png",
    desc: `(butelka)/(bottle)`,
  },
  {
    id: 100,
    title: "wino czerwone wytrawne/Dry Red Wine",
    category: "wina/wines",
    price: 18,
    img: "./images/item-100.jpg",
    desc: `(110 ml)`,
  },
  {
    id: 101,
    title: "wino czerwone półwytrawne/Semi-dry Red Wine",
    category: "wina/wines",
    price: 18,
    img: "./images/item-100.jpg",
    desc: `(110 ml)`,
  },
  {
    id: 102,
    title: "wino czerwone półsłodkie/Semi-sweet Red Wine",
    category: "wina/wines",
    price: 18,
    img: "./images/item-100.jpg",
    desc: `(110 ml)`,
  },
  {
    id: 103,
    title: "wino czerwone słodkie/Sweet Red Wine",
    category: "wina/wines",
    price: 18,
    img: "./images/item-100.jpg",
    desc: `(110 ml)`,
  },
  {
    id: 104,
    title: "wino czerwone wytrawne/Dry Red Wine",
    category: "wina/wines",
    price: 80,
    img: "./images/logo_normal.png",
    desc: `(butelka)/(bottle)`,
  },
  {
    id: 105,
    title: "wino czerwone półwytrawne/Semi-dry Red Wine",
    category: "wina/wines",
    price: 80,
    img: "./images/logo_normal.png",
    desc: `(butelka)/(bottle)`,
  },
  {
    id: 106,
    title: "wino czerwone półsłodkie/Semi-sweet Red Wine",
    category: "wina/wines",
    price: 80,
    img: "./images/logo_normal.png",
    desc: `(butelka)/(bottle)`,
  },
  {
    id: 107,
    title: "wino czerwone słodkie/Sweet Red Wine",
    category: "wina/wines",
    price: 80,
    img: "./images/logo_normal.png",
    desc: `(butelka)/(bottle)`,
  },
  {
    id: 108,
    title: "żubrówka biała/Żubrówka White",
    category: "wódki/vodka",
    price: 6,
    img: "./images/item-108.jpg",
    desc: `(40 ml)`,
  },
  {
    id: 109,
    title: "soplica wiśniowa",
    category: "wódki/vodka",
    price: 6,
    img: "./images/item-109.jpg",
    desc: `(40 ml)`,
  },
  {
    id: 110,
    title: "nemiroff",
    category: "wódki/vodka",
    price: 10,
    img:"./images/item-110.png",
    desc: `(40 ml)`,
  },
  {
    id: 111,
    title: "żoładkowa gorzka",
    category: "wódki/vodka",
    price: 8,
    img: "./images/item-111.jpg",
    desc: `(40 ml)`,
  },
  {
    id: 112,
    title: "żubrówka",
    category: "wódki/vodka",
    price: 70,
    img: "./images/item-112.jpg",
    desc: `(500 ml)`,
  },
  {
    id: 113,
    title: "żubrówka",
    category: "wódki/vodka",
    price: 130,
    img: "./images/item-112.jpg",
    desc: `(1 l)`,
  },
  {
    id: 114,
    title: "soplica",
    category: "wódki/vodka",
    price: 70,
    img: "./images/item-114.jpg",
    desc: `(500 ml)`,
  },
  {
    id: 115,
    title: "nemiroff czarny/Nemiroff Black",
    category: "wódki/vodka",
    price: 150,
    img: "./images/item-110.png",
    desc: `(1 l)`,
  },
  {
    id: 116,
    title: "jach daniel's",
    category: "whisky/whiskies",
    price: 18,
    img:"./images/item-116.jpg",
    desc: `(40 ml)`,
  },
  {
    id: 117,
    title: "chivas/Red Label",
    category: "whisky/whiskies",
    price: 10,
    img: "./images/item-117.jpg",
    desc: `(40 ml)`,
  },
  {
    id: 118,
    title: "jach daniel's",
    category: "whisky/whiskies",
    price: 180,
    img: "./images/item-116.jpg",
    desc: `(1 l)`,
  },
  {
    id: 119,
    title: "pan iwan 4/Mister Ivan 4",
    category: "shoty/shots",
    price: 16,
    img: "./images/logo_normal.png",
    desc: `(4x40 ml)`,
  },
  {
    id: 120,
    title: "pan iwan 16/Mr Ivan 16",
    category: "shoty/shots",
    price: 58,
    img: "./images/logo_normal.png",
    desc: `(16x40 ml)`,
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayCategoryItems();
});

const sectionElement = document.querySelector(".section-center");
const categoryElement = document.querySelector(".btn-container");

function displayMenuItems(menuList) {
  let sectionContent = "";

  
  menuList.forEach((item) => {
    sectionContent += `<article class="menu-item">
        <img src=${item.img} alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}zł</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
  });
  sectionElement.innerHTML = sectionContent;
}

function displayCategoryItems() {
  let categories = [];
  let categoryContent = `<button type="button" class="filter-btn" data-id="all">wszystko/all</button>`;

  menu.forEach((item) => {
    const foodIndex = categories.indexOf(item.category);
    if (foodIndex === -1) {
      categories.push(item.category);
    }
  });

  categories.forEach((category) => {
    categoryContent += `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
  });

  categoryElement.innerHTML = categoryContent;



  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    
    button.addEventListener("click", function (e) {
      
      const selectedCategoryName = e.target.getAttribute("data-id");
      const filteredMenu = menu.filter(
        (item) => item.category === selectedCategoryName
      );

      console.log("selectedCategoryName: " + selectedCategoryName);

      if (selectedCategoryName == "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(filteredMenu);
      }
    });
  });
}

const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
})

function sendEmail(){
            (function(){
              emailjs.init("6YIXy8GoygW-Ry5uw");
           })();

            var serviceID = "service_v03m924";
            var templateID = "template_l9bn6es";

            var params = {
                  name: document.querySelector("#name").value,
                  email: document.querySelector("#email").value,
                  phone: document.querySelector("#phone").value,
                  date: document.querySelector("#date").value,
                  time: document.querySelector("#time").value,
                  people: document.querySelector("#people").value
            };

            
            emailjs.send(serviceID, templateID, params)
            .then( res => {
              alert("Message Sent Succesfully")
            })
            .catch();
}
          

const images = [
  "./images/photo-1.jpg",
  "./images/photo-2.jpg",
  "./images/photo-3.jpg",
  "./images/photo-4.jpg",
  "./images/photo-5.jpg",
  "./images/photo-6.jpg",
  "./images/photo-7.jpg",
];

const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
let intervalId;

function displayImage(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  }

  const imageUrl = images[currentIndex];

  slider.innerHTML = `
    <img src="${imageUrl}" alt="Slide ${currentIndex + 1}" />
  `;
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    currentIndex++;
    displayImage(currentIndex);
  }, 3000); 
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

prevBtn.addEventListener("click", () => {
  currentIndex--;
  displayImage(currentIndex);
  // stopAutoSlide();
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  displayImage(currentIndex);
  // stopAutoSlide();
});

displayImage(currentIndex);
startAutoSlide();
