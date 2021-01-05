const db = require('../db/connection')
const Product = require('../models/productModels')

db.on('error', console.error.bind(console, 'MongoDB coonection error:'))

const main = async () => {
  const products = 
  [
    {
      "name" : "Hyper 20in Spinner BMX Bike, Gloss Black",
      "imgURL":"https://i5.walmartimages.com/asr/51966ce0-5d08-460e-9dea-4620f104298c_1.e8221378b8e7501ce7d4b7d4937af674.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
      "description":"This 20 Hyper Spinner Gloss Black BMX Bike is sure to capture the imagination of Kid who likes having fun outdoors. The soft seat will let you ride for hours, whether you're cruising around the neighborhood with friends, or to the park on a family bike ride.",
      "price":"$98.00"
    },
    {
      "name": "Boys Mountain Bike 24in Men's Bicycle Full Suspension Lightweight Aluminum Black, Aluminum",
      "imgURL":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1TrkT_4NeXy_LeGzE_Hkf9rzz4cr437Vb2WksLhQi2wUYsjV_Y0h25LZREmugiIFgScI_opHqUYsAv86oa7kYiSn-_ocBcg&usqp=CAY",
      "description":"This Hyper Havoc Mountain Bike is the key to outdoor fun. It has a lightweight aluminum frame that lets users ride harder for longer, providing a reliable experience. The 24 inch Hyper Havoc is designed with a front and rear suspension to offer a smooth ride on any surface. It features 21 speeds, ensuring versatility in the ride. The boys mountain bike has a comfortable Shimano twist shifter and a Shimano rear derailleur, allowing riders to change the gears quickly and smoothly. It has alloy rims and front and rear linear pull brakes. This bike is made with standard pedals for a comfortable and secure ride. It has grips on the handlebars for sustained comfort and control. Additionally, the bike comes equipped with a plush MTB seat, so backsides will stay comfortable on long rides. It has a sleek, black design that provides a modern look. The bike can be ridden on a variety of surfaces, allowing for flexibility in where you go with it.",
      "price":"$124.00"
    },
    {
      "name": "Schwinn Addison 700c/28in City Hybrid Bike - Gray",
      "imgURL":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTObKd8ezBtssSXMfcRZtv83MF8dxFB7WejgMlm5xFRi7EybDKOmAykQ8jtSdbi9UTgC11bubED95PF5_r9I1BdchpG2uhkqIu0PotJ6a_p29xZshFJWRRP9g&usqp=CAY",
      "description":"From everyday rides to weekend excursions, enjoy it all with the Schwinn Addison. The Addison features a lightweight aluminum frame, perfect for a fast and agile ride around the neighborhood or bike path. The Shimano 7-speed twist shifters with Shimano rear derailleur provide precise gear changes that let you adapt to your terrain. Alloy linear pull brakes let you stop with confidence, while the alloy crank with built-in chain guard protect your pant legs as you ride. Experience the versatility of the Addison and enjoy the freedom of riding a Schwinn.",
      "price":"$249.99"
    },
    {
      "name": "Huffy 24 Rock Creek Girls Mountain Bike for Women",
      "imgURL":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTriyChauOFELo8DXYfKDhdsk2dsC0YkHA0pawb5XF8YvSqn7z7kGdxdurmKKWA1JCtI-drPIgDhitARvpz7NSbfv76052PsL7T1rxr0pi4GHhWf9l7gXCz1A&usqp=CAY",
      "description":"Ideal for ages 13 to Adult (Average height, 4'8 inch - 5' 8 inch) The Huffy 24 inch Rock Creek Mountain bike combines a durable steel frame and great style with the right specs to have a blast over bumps on paved trails or rides around the neighborhood. Smooth 18-speed index shifting and Shimano rear derailleur deliver a solid ride. The front suspension responds as you ride for better control over curbs, potholes and branches. Front and rear linear pull brakes provide consistent, dependable control. The comfortable slim ATB saddle includes an alloy quick-release seat binder for easy adjustments to the right height, or to simply remove when needed. Kraton grips add comfort for a great hold while you enjoy the great ride of the Huffy Rock Creek.",
      "price":"$98.00"
    },
    {
      "name": "Nishiki Men's Pueblo 26'' Mountain Bike",
      "imgURL":"https://dks.scene7.com/is/image/GolfGalaxy/15NISANSHKPBL14XXRMB_Black_Grey_Volt?qlt=70&wid=1100&fmt=webp",
      "description":"Experience excellent performance and an awesome ride with the Nishiki® Men's Pueblo Mountain Bike. Made with a heat treated steel frame and 60mm travel fork, this mountain bike boasts maximum durability and shock absorption. Its 26in wheels and aluminum rims can tackle tough terrain, while the Shimano drivetrain can conquer big ascents and downhill slopes.",
      "price":"$279.99"
    },
    {
      "name": "Hyper 26in Havoc Men's Mountain Bike Black",
      "imgURL":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR58iEMbxp3QGoMXqwq6LYMskut2C1Ldiq8UGMjBk2T4iWKBoFtsppwvxai-4iaTJMmdrs5gkP6EFE713-oCfNEYEuP5W6rVr3j00C3NTBmgN__VH680si-&usqp=CAY",
      "description":"This Hyper Havoc Mountain Bike is the key to outdoor fun. It features 21 speeds, ensuring versatility in the ride. It also features a three-piece, high-performance crank. This bike is made with standard pedals for a comfortable and secure ride.",
      "price":"$124.00"
    },
    {
      "name": "Hyper 26in Shocker Men's Dual Suspension Mountain Bike Black",
      "imgURL":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTF5Kb2lxFWYQIvRMG-q3rfShf6h6pOdyAEybDHDPgwxle1UoDS7HDpeNoqLWd3qzcVwLKQNX-DfjkDhqsRR3MN_nFo3ZuCMgCI-6220j7RHuSG8XHrF0q1&usqp=CAY",
      "description":"It features a solid suspension steel outline, a suspension front fork and ground-breaking direct draw front and back brakes, so it's prepared to go up against any enterprise. The bumpy tires and the simple to-utilize, 18-speed curve grasp moving make it perfect for cruising in the recreation center or hitting the back trails.",
      "price":"$124.00"
    },
    {
      "name": "Co-op Cycles CTY 1.1 Bike",
      "imgURL":"https://www.rei.com/media/5a2854a8-bae4-4c9f-835b-e091799826ba?size=784x588",
      "description":"When you have to zip across campus several times a day, you don’t have extra time to spend keeping your ride in shape. This reliable, low-maintenance bike will get you where you need to go with no extra fuss.",
      "price":"$549.00"
    },
    {
      "name": "2021 Polygon Cascade 2 - 27.5 Mountain Bike - Size: Medium",
      "imgURL":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQNy3RAce8bwkkwupXkzFC5KdTjenax63lHInJl8HsvFbRAL1fGv-FcqAxqsfBpqBqVKhcRNRZh14fpmJC4h0I0cOAnOzvFnuN8xO7pkcmD&usqp=CAY",
      "description": "The Cascade 2 is the perfect gateway to trail riding. It's ideal for new riders who want a mountain bike with knobby tires that can double as a rugged commuter. Disc brakes, front suspension, 21 speeds and mounts for a rack and mudguards make this versatile ride an excellent entry point for new trail riders and commuters alike. Utilizing a new hydroformed lightweight Alutech XC Sport 27.5in Aluminum frame that was used on highly popular Polygon Premier series from previous years, the Cascade 2 is now one of the lightest mountain bikes in its category on the market. The bike features a Shimano 3 x 7-Speed drivetrain that will allow to comfortably spin your way up climbs while providing plenty of gears to charge back down. A 100mm travel SR Suntour XCE does a good job of easing trail chatter to provide a smooth and confident ride .",
      "price":"$399.00"
    },
    {
      "name": "Nishiki Men's Anasazi Hybrid Bike",
      "imgURL":"https://dks.scene7.com/is/image/GolfGalaxy/16NISANSHKNSZ15XXDSB_Red_Grey_Black?qlt=70&wid=1100&fmt=webp",
      "description":"Whether you're commuting to class or trekking on narrow singletracks, experience it all with the Nishiki® Men's Anasazi Hybrid Bike. Built with a durable aluminum frame, this bike cruises with stability. The reliable 700C wheels withstand terrain from rocky roads to smooth pavement, while the disc brakes deliver optimum stopping control.",
      "price":"$429.99"
    },
    {
      "name": "Schwinn Women's Legacy 26in Cruiser Bike- Blue/White",
      "imgURL":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTH6ncAFJhIEQsGYVLxocZmMRxmAeicBgYAlHU4735f1qBEc96dZ8hkhUEfJts8_pTaY5nJC2KbU9r8D63gJ8RMpVuxPfVbe316_JHp0lFykuaMHmlXn-BG&usqp=CAY",
      "description":"*Free assembly for all store and order pick up purchases for bikes 20in and up! A sweet ride on a sweet bike. Comfort is there with a spring seat and upright riding position. The look is there with matching fenders, seat and chain cover. And the easy is there with no gears or cables to worry about. Easy simple and fun.",
      "price":"$169.99"
    },
    {
      "name": "Schwinn Loop 20in Folding Bike Black",
      "imgURL":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVi6Eiuq5npDJWHMYHYvX7_28AtKKs6lp_nXCABlcDNZoLsVCzFcc4dK7g3Antx8yeyTmNSVPzcTZilxVp2v1DGEw2tkNBAdi-QmdwHe1SCD7R74dPBHS3&usqp=CAY",
      "description":"Discover the convenience and utility of the Schwinn Loop Adult Folding Bicycle. Perfect for commuting, this bike features a kickstand and durable steel hinges. The rear carry rack and an included nylon carry bag keep the bike protected and concealed; Perfect for commuting, this bike features a kickstand and durable steel hinges.",
      "price":"$245.95"
    },
    {
      "name": "Murtisol Mountain Bike 26 -in Wheels 21 Speed Double V-Brake Aluminum Frame",
      "imgURL":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpaJhJ--zLmY1qzHS4py8oyVF5STwElx5SR4uKrsAl_Vw4PkecUhu7W4XDzHoG5JsFcsWhSAwfyAYfSJ-5qc4LBA_vDeB6nKM0Bgo329lvHNTRTGppPt8V&usqp=CAE",
      "description":"Murtisol mountain bike is equipped with an all-aluminum frame and aluminum ring, without fear of sun and rain, and no rust for 365 days; The design of outer decals and polished silver edges make the bicycle more beautiful; with Shimano gear shift components 21-speed gear, you can easily change the speed according to different terrain, the seat height can be adjusted and the wide and comfortable seat makes your riding more comfortable.",
      "price":"$199.99"
    },
    {
      "name": "Adult Tricycle - Three Wheel Cruiser Bikes - Trike Bike for Seniors Women & Family - Vegetable Basket Car | Manpower Tricycle with Cargo Basket for Seniors, Family | Leisure Picnics & Shopping",
      "imgURL":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRm04ngebSp6SeerQZJit448q1SGx2TIILlrM6R4F4aUNAG1M5GM2jzkoghiyJ6EwGrsPAu4RANRmPf3T6hswxQ3PT8Z-TPNhdMXrYbGVMK&usqp=CAE",
      "description":"No longer need to worry about riding a lot of items. This bicycle with a large back basket can hold many vegetables, fruits and more. Ideal for picnics, shopping, entertainment, etc.",
      "price":"$235.55"
    },
    {
      "name": "EUNORAU 48V750W MAX-CARGO electric long trail Cargo bike for family Wagon or Ubereats delivery Using",
      "imgURL":"https://cdn.shopify.com/s/files/1/2389/5887/products/MAX-CARGO--4_1800x1800.jpg?v=1597906755",
      "description":"no description",
      "price":"$1,759.00"
    },
    {
      "name": "Hyper E-Ride Electric Mountain Bike, 26 inch Wheels, 36 Volt battery, Black",
      "imgURL":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRXCgLc1kd5216bL_I9fCC4uQF--rj8IyZdjzW0n4pQ-3OGOqvQ5do7r9VA7lr_ZjzglNA0bO3cxl4dd4XVnYChCtoh8E2s&usqp=CAY",
      "description":"Hyper Bicycles 26in E-ride Electric Mountain Bike: Ride in style with the Hyper E-Ride Electric Hybrid Bike, 36V Battery. It features a Shimano grip shifter and rear derail leur gear system. This 26in electric bike includes front and rear V-brakes for enhanced stopping power and front suspension forks for a comfortable ride",
      "price":"$808.78"
    },
    {
      "name": "Super73-Z1 Electric Bike Jet Black",
      "imgURL":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSXw93NuOKd9fHR7zdHaEoGGctOHkX4pUAhFX6mKkKaQAQDfIy0dWQZwg1i5_j7xRZxRac31fooGlo0015VKf4SxUnV8VGcRKunzltT3XFWGEo-wWM7DuwN&usqp=CAY",
      "description":"The SUPER73-Z1 is a friendly entry-level electric motorbike that packs a punch. The compact frame and 500 watt internal hub motor is an excellent vehicle for anyone wanting the feel of a SUPER73 in a smaller package. This neighborhood explorer is perfect for getting around town.",
      "price":"$1260.00"
    },
    {
      "name": "Giro Adult Revel Bike Helmet",
      "imgURL":"https://dks.scene7.com/is/image/GolfGalaxy/16GIRARVLXXXXXXXXDLT_Pearl_White_Silver?qlt=70&wid=1100&fmt=webp",
      "description":"Whether you’re commuting downtown or winding trails, the Giro® Revel Bike Helmet is up to the task. Designed with a full coverage polycarbonate shell and 22 vents, the Revel delivers superior protection and ventilation. Its Acu Dial™ Fit system has a full fit band that can be adjusted with one hand mid-ride if necessary. The snap fit visor reduces glare as you ascend downhill. The Revel is the perfect complement to any ride.",
      "price":"$39.99"
    },
    {
      "name": "Safety Windproof Bicycle Helmet Adult Mountain Bike Fit Outdoor Helmet",
      "imgURL":"https://i5.walmartimages.com/asr/30e4267a-8500-4869-8a3c-247e05d0cb0f.8ece16de99e8978e35b819d40c57c97a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
      "description":"Helmet",
      "price":"$19.99"
    },
    {
      "name": "Schwinn Intercept Adult Bicycle Helmet, ages 14 and up, Blue",
      "imgURL":"https://i5.walmartimages.com/asr/5733415a-70b8-490d-8090-561a1ac85045_1.08c10b4ae93ace8bbabec5e9d6f16e28.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
      "description":"The Schwinn Intercept Adult Helmet makes your ride safer and more fun. It has all the advanced features you expect in a professional grade bike helmet, yet it is also easy to wear. This adult bike helmet is ideal for cycling enthusiasts and weekend riders. The Intercept has a very sleek design that helps makes riding less work and more fun. Schwinn is a name that you've known and trusted for years, and this helmet does not disappoint. The Schwinn Intercept helmet features the adjustable dial fit system to help ensure a custom and comfortable fit. It also has a convenient snap on and off visor to shield your eyes from the sun or other outdoor elements, along with heat sealed pads for extra comfort. The adult bike helmet also features 10 separate vents to circulate the air and keep the rider's head cooler, even in hot weather. Protect your head in style with the Intercept Adult Helmet by Schwinn.",
      "price":"$19.96"
    },
    {
      "name": "Bell Servo Adult Full Face Helmet Matte Black",
      "imgURL":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIH13yS5vdIxBd6IgOzNshmdZih_rLyqNNuUoNCIfs7h-yG5kqq_V72Tm2m33zvRTopFUxODeT-8iJTuJam4LiwbM5IKLeHTPbo_S_G81OyuKKkw5fC35DNg&usqp=CAY",
      "description":"The Bell Servo Full Face Helmet is designed to provide maximum protection and safety whether on an off-road trail, BMX competition, or cruising the city streets. It features full-coverage plush interior padding, removable and washable cheek pads, as well as a comfortable neck roll for increased padding and protection. This full-face bike helmet not only covers your head, it covers the chin and jaw, as well. It comes with an integrated ventilation system that helps keep you from overheating. Complies with the U.S. CPSC Safety Standard for Bicycle Helmets for Persons Age 5 and Older. Not approved for use with motorized bikes. For ages 14+. Fits head sizes 22.8-24â (58-61cm).",
      "price":"$59.99"
    }
    ]
  await Product.insertMany(products)
  console.log("Created products")
}
const run = async () => {
  await main()
  db.close()
}

run()