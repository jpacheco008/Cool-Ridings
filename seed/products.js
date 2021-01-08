const db = require('../db/connection')
const Product = require('../models/productModels')

db.on('error', console.error.bind(console, 'MongoDB coonection error:'))

const main = async () => {
  const products =
  [
    {
      "name": "Co-op Cycles CTY 1.1 Bike",
      "imgURL":"https://www.rei.com/media/5a2854a8-bae4-4c9f-835b-e091799826ba?size=784x588",
      "imgURL1": "https://www.rei.com/media/6f0c5367-9ffe-48be-a085-3ad326b8b041?size=784x588",
      "imgURL2": "https://www.rei.com/media/94acdaf1-4df1-4e32-a441-5ab0f062a3e2?size=784x588",
      "imgURL3": "https://www.rei.com/media/aff28326-23a2-43a8-bcc6-91b79105dc1c?size=784x588",
      "description": "When you have to zip across campus several times a day, you don’t have extra time to spend keeping your ride in shape. This reliable, low-maintenance bike will get you where you need to go with no extra fuss.",
      "price":"$549.00"
    },
    {
      "name": "2021 Polygon Cascade 2 - 27.5 Mountain Bike",
      "imgURL":"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQNy3RAce8bwkkwupXkzFC5KdTjenax63lHInJl8HsvFbRAL1fGv-FcqAxqsfBpqBqVKhcRNRZh14fpmJC4h0I0cOAnOzvFnuN8xO7pkcmD&usqp=CAY",
      "imgURL1": "https://www.polygonbikes.com/wp-content/uploads/2018/03/CASCADE-2-LR.png",
      "imgURL2": "https://www.polygonbikes.com/wp-content/uploads/2018/03/CASCADE-2-RB.png",
      "description": "The Cascade 2 is the perfect gateway to trail riding. It's ideal for new riders who want a mountain bike with knobby tires that can double as a rugged commuter. Disc brakes, front suspension, 21 speeds and mounts for a rack and mudguards make this versatile ride an excellent entry point for new trail riders and commuters alike. Utilizing a new hydroformed lightweight Alutech XC Sport 27.5in Aluminum frame that was used on highly popular Polygon Premier series from previous years, the Cascade 2 is now one of the lightest mountain bikes in its category on the market. The bike features a Shimano 3 x 7-Speed drivetrain that will allow to comfortably spin your way up climbs while providing plenty of gears to charge back down. A 100mm travel SR Suntour XCE does a good job of easing trail chatter to provide a smooth and confident ride .",
      "price":"$399.00"
    },
    {
      "name": "Nishiki Men's Anasazi Hybrid Bike",
      "imgURL": "https://dks.scene7.com/is/image/GolfGalaxy/16NISANSHKNSZ15XXDSB_Red_Grey_Black?qlt=70&wid=1100&fmt=webp",
      "imgURL1": "https://dks.scene7.com/is/image/GolfGalaxy/NKI00707_RedGreyBlack_DET-alt1?wid=1500&fmt=pjpeg",
      "imgURL2": "https://dks.scene7.com/is/image/GolfGalaxy/NKI00707_RedGreyBlack_DET?wid=1500&fmt=pjpeg",
      "imgURL3":"https://dks.scene7.com/is/image/GolfGalaxy/NKI00707_RedGreyBlack_SDER?wid=1500&fmt=pjpeg",
      "description":"Whether you're commuting to class or trekking on narrow singletracks, experience it all with the Nishiki® Men's Anasazi Hybrid Bike. Built with a durable aluminum frame, this bike cruises with stability. The reliable 700C wheels withstand terrain from rocky roads to smooth pavement, while the disc brakes deliver optimum stopping control.",
      "price":"$429.99"
    },
    {
      "name": "SystemSix Hi-MOD Dura Ace Di2",
      "imgURL":"https://embed.widencdn.net/img/dorelrl/juskodwpyr/2000px@1x/C20_C11100M_SystemSix_HM_D_A_Di2_BBQ_PD.png",
      "imgURL1": "https://embed.widencdn.net/img/dorelrl/rqd6lkixsl/2000px@1x/C20_C11100M_SystemSix_HM_D_A_Di2_BBQ_D3.png",
      "imgURL2": "https://embed.widencdn.net/img/dorelrl/mr7woapxvh/2000px@1x/C20_C11100M_SystemSix_HM_D_A_Di2_BBQ_3Q.png",
      "imgURL3": "https://embed.widencdn.net/img/dorelrl/qw5s5g5p19/2000px@1x/C20_C11100M_SystemSix_HM_D-A_Di2_BBQ_D1.png",
      "description": "Faster everywhere. The fastest UCI-legal road bike in the world. More speed with less effort. Simple as that.",
      "price":"$12,000"
    },
    {
      "name": "Hyper E-Ride Electric Mountain Bike",
      "imgURL":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRXCgLc1kd5216bL_I9fCC4uQF--rj8IyZdjzW0n4pQ-3OGOqvQ5do7r9VA7lr_ZjzglNA0bO3cxl4dd4XVnYChCtoh8E2s&usqp=CAY",
      "imgURL1": "https://hypertoys.com/wp-content/uploads/2019/02/26in_Hyper_E-Ride_Mountain_MTB_1-600x600.jpg",
      "imgURL2": "https://hypertoys.com/wp-content/uploads/2019/02/26in_Hyper_E-Ride_Mountain_MTB_7-600x600.jpg",
      "imgURL3": "https://hypertoys.com/wp-content/uploads/2019/02/26in_Hyper_E-Ride_Mountain_MTB_5-600x600.jpg",
      "description": "Hyper Bicycles 26in E-ride Electric Mountain Bike: Ride in style with the Hyper E-Ride Electric Hybrid Bike, 36V Battery. It features a Shimano grip shifter and rear derail leur gear system. This 26in electric bike includes front and rear V-brakes for enhanced stopping power and front suspension forks for a comfortable ride",
      "price":"$808.78"
    },
    {
      "name": "SystemSix Carbon Ultegra Di2",
      "imgURL":"https://embed.widencdn.net/img/dorelrl/z5ibezx6wy/2000px@1x/C20_C11300M_SystemSix_Crb_Ult_Di2_REP_PD.png",
      "imgURL1": "https://embed.widencdn.net/img/dorelrl/tzhbwgfxiq/2000px@1x/C20_C11300M_SystemSix_Crb_Ult_Di2_REP_3Q.png",
      "imgURL2": "https://embed.widencdn.net/img/dorelrl/ilkbgashja/2000px@1x/C20_C11300M_SystemSix_Crb_Ult_Di2_REP_D1.png",
      "imgURL3": "https://embed.widencdn.net/img/dorelrl/9vfd6mvrma/2000px@1x/C20_C11300M_SystemSix_Crb_Ult_Di2_REP_D2.png",
      "description": "SystemSix is a holistically designed, six-part system wholly dedicated to the pure pursuit of speed. It generates the least aerodynamic drag of any road bike on the market, which means more speed, in more situations, for more riders. It’s faster everywhere.",
      "price":"7,250"
    },
    {
      "name": "Bell Servo Adult Full Face Helmet Matte Black",
      "imgURL": "https://images-na.ssl-images-amazon.com/images/I/71dXXz0hknL._AC_SL1500_.jpg",
      "imgURL1": "data:image/jpeg;base64,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",
      "imgURL2": "https://i5.walmartimages.com/asr/1e79dc7c-cd4d-47ff-b39e-ab22022b3c2a_1.c677f1f26579a55bb299cc167f8c9331.jpeg",
      "description":"The Bell Servo Full Face Helmet is designed to provide maximum protection and safety whether on an off-road trail, BMX competition, or cruising the city streets. It features full-coverage plush interior padding, removable and washable cheek pads, as well as a comfortable neck roll for increased padding and protection. This full-face bike helmet not only covers your head, it covers the chin and jaw, as well. It comes with an integrated ventilation system that helps keep you from overheating. Complies with the U.S. CPSC Safety Standard for Bicycle Helmets for Persons Age 5 and Older. Not approved for use with motorized bikes. For ages 14+. Fits head sizes 22.8-24â (58-61cm).",
      "price":"$59.99"
    },
    {
      "name": "Mt. Hood Gloss w/MIPS",
      "imgURL": "https://cdn.shopify.com/s/files/1/0228/2851/products/NC20_ST_Mthood_Angle..jpg?v=1593046199",
      "imgURL2": "https://cdn.shopify.com/s/files/1/0228/2851/products/NC20_ST_Mthood_Rear_1024x1024.jpg?v=1593046222",
      "description":"New for 2020, the Street collection combines the industry leading safety feature MIPS with all new Nutcase inspiring designs.  Featuring an improved retention system to provide a secure, comfortable fit and 2x the reflectivity for visibility on the road.   11 redesigned air vents increase the airflow to keep your brain cool and 30+ new designs to keep you looking even cooler.",
      "price":"$79.99"
    },
    {
      "name": "Rapha Deep Winter Gloves",
      "imgURL": "https://i8.amplience.net/i/rapha/PWG01XX_BLK_Product_H219_01",
      "imgURL2": "https://img.smartpak.com/images/product/highres/19807_pair.jpg",
      "description":"The Deep Winter Gloves are the warmest pair we make, tested extensively in wet and cold weather in Norway and designed to withstand the most extreme riding conditions. For complete integration with the sleeves of your jacket, the gloves feature a two-layer cuff design. A slim-fitting knitted merino cuff slides beneath the jacket sleeve while the long exterior cuff forms a protective outer layer on top. The main body of the glove is sealed with a fully waterproof yet breathable membrane and lined with a warm fleece fabric on the inside. Insulation is positioned on the back of the hand for additional warmth while the fingers are pre-shaped for improved dexterity and articulation while braking and shifting. The palm is constructed of a hard-wearing, abrasion-resistant leather with carefully positioned gel padding for a comfortable, secure grip on the handlebars, whatever the weather. A grosgrain puller tab on the inner cuff makes putting the glove on easy while the thumb incorporates a convenient nose wipe. For visibility when signalling, a reflective panel is positioned on the little finger.",
      "price":"$190.00"
    },
    {
      "name": "Rechargeable Lighted Gloves",
      "imgURL": "https://images.ctfassets.net/5lo27vrr3lb5/12h9vWyLcbE1boy70P87W2/e2ef957a10815203ff787959b47ef366/207394-p1.jpg?q=80",
      "imgURL2": "https://images.ctfassets.net/5lo27vrr3lb5/79HmpA49grFP7Oo41imxcN/25c9627f9499848561aeef15cb41768a/207394-p2.jpg?q=80",
      "description":"Rechargeable Lighted Gloves are the hands-free wearable safety lights for runners, cyclists, dog walkers, hikers, campers and others who are active after dark. Each glove has a Velcro pocket that securely holds a rechargeable LED light, providing a 270° radial arc of light that’s visible up to a half mile away. Lights last 8 to 10 hours on a full charge. Set includes two gloves, two lights and a dual USB charging cable. Unisex design, available in Black in Small, Medium, Large and XL.",
      "price":"$59.99"
    },
    ]
  await Product.insertMany(products)
  console.log("Created products")
}
const run = async () => {
  await main()
  db.close()
}

run()
