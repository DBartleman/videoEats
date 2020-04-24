'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Reviews',
			[
				/* OPTIONAL attributes:
        clipped: boolean, whether or not the video review has been clipped 
          to the relevant part or not
      */
				/* TEMPLATE:
      businessId: '1-13', userId: '1-10', typeId: '1-3',
      upVoteCount: '0', downVoteCount: '0', businessRating: 1-5,
      reviewText: 'this text is empty if no text review', 
      videoURL: 'this text is empty if no video review',  
      createdAt: new Date(), updatedAt: new Date() },
      */
				// typeID: 1 is video, 2 is text, 3 is mixed
				{
					businessId: '1',
					userId: '1',
					typeId: '1',
					upVoteCount: '10',
					downVoteCount: '4',
					businessRating: 4,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/ixgIQqr5008',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '1',
					userId: '2',
					typeId: '1',
					upVoteCount: '7',
					downVoteCount: '1',
					businessRating: 3,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/zmIgc0SkVgE',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '2',
					userId: '3',
					typeId: '1',
					upVoteCount: '11',
					downVoteCount: '1',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://youtu.be/U3ia6m3jyLM?t=31',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '3',
					userId: '4',
					typeId: '1',
					upVoteCount: '2',
					downVoteCount: '0',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/kQTnrg9JufE',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '4',
					userId: '5',
					typeId: '1',
					upVoteCount: '3',
					downVoteCount: '1',
					businessRating: 2,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/IWZjzDDImH0',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '4',
					userId: '6',
					typeId: '1',
					upVoteCount: '14',
					downVoteCount: '0',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/06U1s6OmnSw',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '4',
					userId: '7',
					typeId: '1',
					upVoteCount: '8',
					downVoteCount: '1',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/cE_VEReSqzk',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '5',
					userId: '8',
					typeId: '1',
					upVoteCount: '4',
					downVoteCount: '2',
					businessRating: 3,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/hSFmj6bPsNc',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '5',
					userId: '9',
					typeId: '1',
					upVoteCount: '5',
					downVoteCount: '1',
					businessRating: 4,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/GgOIcpwyDsg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '6',
					userId: '10',
					typeId: '1',
					upVoteCount: '1',
					downVoteCount: '0',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/yPKhIkX1VgE',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '6',
					userId: '1',
					typeId: '1',
					upVoteCount: '7',
					downVoteCount: '0',
					businessRating: 4,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/S6LMn5bAfZQ',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '6',
					userId: '2',
					typeId: '1',
					upVoteCount: '6',
					downVoteCount: '1',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://youtu.be/d2OiEnOEBTM?t=177',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '6',
					userId: '3',
					typeId: '1',
					upVoteCount: '42',
					downVoteCount: '6',
					businessRating: 4,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/gIqPnkKZg80',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '7',
					userId: '4',
					typeId: '1',
					upVoteCount: '13',
					downVoteCount: '1',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/ynSs9GiwqtQ',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '7',
					userId: '5',
					typeId: '1',
					upVoteCount: '3',
					downVoteCount: '9',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/Xsw3jA_O0cU',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '7',
					userId: '6',
					typeId: '1',
					upVoteCount: '0',
					downVoteCount: '5',
					businessRating: 4,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/lpwZIt0tLiw',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '8',
					userId: '7',
					typeId: '1',
					upVoteCount: '1',
					downVoteCount: '0',
					businessRating: 2,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/rCNAzNCBolg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '8',
					userId: '8',
					typeId: '1',
					upVoteCount: '13',
					downVoteCount: '2',
					businessRating: 4,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/dCi-CLa-P2I',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '9',
					userId: '9',
					typeId: '1',
					upVoteCount: '10',
					downVoteCount: '4',
					businessRating: 1,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/Bc1sSh1y7cs',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '9',
					userId: '10',
					typeId: '1',
					upVoteCount: '14',
					downVoteCount: '1',
					businessRating: 2,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/l7SC9VZ9zec',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '10',
					userId: '1',
					typeId: '1',
					upVoteCount: '4',
					downVoteCount: '0',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/qL5H2bWaohg',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '10',
					userId: '5',
					typeId: '1',
					upVoteCount: '9',
					downVoteCount: '1',
					businessRating: 4,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/5oZp5CI5-w8',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '11',
					userId: '1',
					typeId: '1',
					upVoteCount: '11',
					downVoteCount: '3',
					businessRating: 3,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/z30ENdrYkM8',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '11',
					userId: '9',
					typeId: '1',
					upVoteCount: '14',
					downVoteCount: '5',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/UxHF2nF3r-g',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '11',
					userId: '8',
					typeId: '1',
					upVoteCount: '16',
					downVoteCount: '2',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/0ww9Y7T__Bw',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '12',
					userId: '5',
					typeId: '1',
					upVoteCount: '3',
					downVoteCount: '3',
					businessRating: 1,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/lXg6NarsBgA',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '12',
					userId: '2',
					typeId: '1',
					upVoteCount: '21',
					downVoteCount: '0',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/RRaHZMnJbjQ',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '12',
					userId: '7',
					typeId: '1',
					upVoteCount: '13',
					downVoteCount: '2',
					businessRating: 3,
					reviewText: '',
					videoLink: 'https://youtu.be/7ZSih-RUlSY?t=136',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '12',
					userId: '8',
					typeId: '1',
					upVoteCount: '15',
					downVoteCount: '2',
					businessRating: 3,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/08R8uV9-sNE',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '12',
					userId: '6',
					typeId: '1',
					upVoteCount: '33',
					downVoteCount: '4',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://youtu.be/hBHSId3Buts?t=26',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '13',
					userId: '5',
					typeId: '1',
					upVoteCount: '17',
					downVoteCount: '2',
					businessRating: 3,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/cuoKF_3FXR8',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '13',
					userId: '1',
					typeId: '1',
					upVoteCount: '91',
					downVoteCount: '12',
					businessRating: 4,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/beBZHVmfz1g',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '13',
					userId: '2',
					typeId: '1',
					upVoteCount: '402',
					downVoteCount: '35',
					businessRating: 5,
					reviewText: '',
					videoLink: 'https://www.youtube.com/embed/kZ7IDbILvTI',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '1',
					userId: '11',
					typeId: '2',
					upVoteCount: '5',
					downVoteCount: '1',
					businessRating: 5,
					reviewText:
						"Update on my review during Shelter in Place:\n\nThis place is still AMAZING, even to go!!! I live very close by, so I've been here twice already during shelter-in-place to grab my fave dish (Hakata Tonkotsu).\n\nThey practice really good social distancing habits, with the line markers for patrons who are waiting to be helped. Also, one man who was picking up food for some delivery app was NOT practicing social distancing and went right up to the counter, beside another patron, and the Marafuku employees immediately told him that he needs to be 6 feet away from others - which I praise Marafuku for doing!\n\nI also think that my to-go meal was basically just as good as it would have been in-store. I never thought that taking ramen to-go would taste good, but Marafuku proved me wrong. I definitely recommend that you support this local business and order from here, either delivery or takeout, during this time!",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '1',
					userId: '12',
					typeId: '2',
					upVoteCount: '6',
					downVoteCount: '0',
					businessRating: 4,
					reviewText:
						"Going to a restaurant inside the Japantown mall might seem odd at first, yet this place has some of the best ramen in San Francisco.The wait is long, yet once you're seated, your food comes pretty quickly.\n\nMy favorites are the Marufuku bikes (steamed pork buns) and chicken karaage to start, with the Tonkotsu ramen.",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '2',
					userId: '13',
					typeId: '2',
					upVoteCount: '0',
					downVoteCount: '0',
					businessRating: 5,
					reviewText:
						"To be honest..I'm not a huge fan of ramen. But Ramen Yamadaya? That's a different story!\n\nDiscovered this spot after a few drinks and wanted something warm and after a quick yelp search we found this restaurant. Tried it on a whim and have been coming back ever since.\n\nFirst things first is the service. They're attentive, quick and check in on you to make sure everything is going well. Can't really get any better than that! Secondly, the food is amazing. I'm a huge fan of the Yamadaya ramen and their appetizers are delicious. Lastly, there's the option to join the waitlist instead of waiting outside the restaurant (it's upstairs and has a small waiting area) so it's perfect!\n\nCouldn't recommend this place more than I already do. 10/10! Thank you guys!",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '2',
					userId: '14',
					typeId: '2',
					upVoteCount: '8',
					downVoteCount: '1',
					businessRating: 5,
					reviewText:
						'Was hungry at 11am and most places in JTown open 11:30am so I was happy it was open 11am Sat 2/29/20.  I was the first person there! \n\nI picked Yamadaya Ramen $15.50.  Small amount of noodles, 3 pieces of meat, one was huge, 2 smaller ones, egg, and other stuff.  I liked it fine, just its pricey now.',
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '3',
					userId: '15',
					typeId: '2',
					upVoteCount: '3',
					downVoteCount: '0',
					businessRating: 4,
					reviewText:
						"This place was a nice fusion place with freshly made items including poke. They did work with seafood well and the place was very quaint and comfortable despite being very crowded on the weeknight we ate there.\nFor apps, we had the poke & scallops. Happy I tried it as both were done perfectly but nothing outstanding being from Hawaii where variety in a poke is abundant.  For my friend, who grew up and moved away from Hawaii, she is very pleased to have it.  I totally get that.\nFor the main course, we had the fish with the wasabi noodles. It has a few elements that I did not care for - i.e. udon noodles... but the build of the dish was good.  Not enough to make me ok with eating udon noodles again (I really don't care for those things!) but it was beautifully balanced.  \nEverything was fresh, freshly prepared, well balanced, and tasty so I have absolutely no complaints.\nOne thing I thought was outstanding is how they made such a small space feel spacious.  I did not feel cramped at all, and judging by the overall pleasantness of the other patrons, they shared in my experience of a sense of warmth and comfort in the restaurant.",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '3',
					userId: '16',
					typeId: '2',
					upVoteCount: '7',
					downVoteCount: '2',
					businessRating: 5,
					reviewText:
						"The fiancé and I started off our dinner with the Seared Scallops, and of course we also had to order the Wasabi House Noodles and Rib Eye.I enjoyed the unique flavoring of the Wasabi Noodles! I'm not a fan of wasabi, but I enjoyed the noodles and actually preferred it to have a little more kick to it. The Rib Eye was cooked perfectly and the scallops were great, as well.\n\nOverall, food was delish and service was attentive. Atmosphere is intimate and cozy, but noise level is pretty loud. Parking is awful in the area, but there are a few garages nearby. All in all, a great Asian fusion restaurant with an innovative menu to check out.",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '4',
					userId: '17',
					typeId: '2',
					upVoteCount: '9',
					downVoteCount: '1',
					businessRating: 5,
					reviewText:
						'I got takeout for my birthday during the Covid-19 shelter in place. The line was long, but soooo worth it. I got Sesame beef, garlic noodles, green beans, tea leaf salad, and spicy pork. Every single dish was so special and perfect. :)',
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '4',
					userId: '18',
					typeId: '2',
					upVoteCount: '3',
					downVoteCount: '0',
					businessRating: 5,
					reviewText:
						'Chili lamb from Burma superstar was a superstar dish! I loved the spice so if you like spicy food, this will definitely bring you back for more. Food came pretty fast and it was hot! The onions were crunchy and delicious!\n\nPros: good spice, good crunch for veggies, thin meat\nCons: a bit expensive',
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '5',
					userId: '19',
					typeId: '2',
					upVoteCount: '5',
					downVoteCount: '0',
					businessRating: 5,
					reviewText:
						"The chicken wings here are delicious. They are fried to a perfect crisp, and covered in a sweet and slightly spicy sauce. I also like ordering the pork fried rice.\n\nThe restaurant becomes full within 30 minutes of opening, so I would get there early.The waiting line goes all the way outside the store, but you can also eat next door at San Tung #2. They have a smaller menu and their own kitchen, but the taste is still the same.To avoid the wait, consider ordering for pick up.The service is good and they do their best as they are constantly busy.\n\nI highly recommend this place for their wings.Don't forget to order extra to take home ;)",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '5',
					userId: '11',
					typeId: '2',
					upVoteCount: '4',
					downVoteCount: '0',
					businessRating: 4,
					reviewText:
						"The best dry fried chicken wings ever. I won't go to SF and not pick up an order or 3 huh so yummy.Next time I'm gonna try the dry fried green beans. Great sport. I'm so craving them.I wanted to go for a drive but...COVID - 19 LOOKS LIKE YOUR TEMP CLOSED. Please open soon. Miss you guys",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '6',
					userId: '12',
					typeId: '2',
					upVoteCount: '1',
					downVoteCount: '0',
					businessRating: 5,
					reviewText:
						"Came here to shoot an engagement for friends who love Oysters.They specifically chose Hog Island and since I've been dying to try it out for years I didn't object despite the small space and large crowd (lol). We got there around 11pm and of course there was a line getting in, we thought it'll be a long while before we can get in but, surprisingly the line moved really quick!\n\nThe service is impeccable as it should be since they have to serve a high amount of tourists quickly and efficiently. As we got our order, our server asked what the occasion with me running around with my camera taking photos and as we explained to him what was happening he gave us a lesson of love and congratulated the newly engaged couple. That was really great and nice of him!\n\nWe got the mixed oyster platter and every single oyster had their unique taste and were all fresh and Delicious! Not one bad oyster! We also got to try the baked oysters and each one were delicious and flavorful!\n\nIf you haven't been to Hog Island Oyster, yet I definitely recommend coming here after all of this craziness has ended. I can't wait for my revisit to this iconic spot in the ferry building!",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '6',
					userId: '13',
					typeId: '2',
					upVoteCount: '0',
					downVoteCount: '0',
					businessRating: 5,
					reviewText:
						'This place is a must when in Sanfran\nThey were out of the oysters I wanted to try. But it was later in thwhen we went.We waited in line for like 10 mins had a spot open on the bar. If you have a small group ask for the bar you can watch them prepare dishes. It was very clean place the staff was great. Water and bread refills Every few mins. The staff made us feel welcomed like we were old buddies',
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '7',
					userId: '14',
					typeId: '2',
					upVoteCount: '14',
					downVoteCount: '4',
					businessRating: 3,
					reviewText:
						'Would of been 5 stars but the waitress Susanne rushed my group out of the private room after we paid. She had another party/reservation for the private room after ours and was rude in the way she requested us to leave. Needing time to prepare for another group is understandable but there are polite ways of explaining this.\n\nThe food was good. Good experience up until the end. All that good food just to leave a bad taste in your mouth.',
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '7',
					userId: '15',
					typeId: '2',
					upVoteCount: '3',
					downVoteCount: '1',
					businessRating: 5,
					reviewText:
						"First review of 2020 goes to one of my all- time favorite restaurants - Gary Danko! I've been here 3 times, with the most recent visit being on Christmas Eve with my whole family of 9. We got seated in the back private dining room. What I love most about their tasting menu is that you can choose 3, 4, or 5 courses, and you can pick from any category. For example, if you want 5 meat courses, go for it! I decided to go with 2 appetizers (oysters w/ caviar; risotto), 1 seafood (lobster), 1 meat (duck breast), and 1 dessert (espresso gateau).\n\nMy boyfriend, on the other hand, also got the risotto, but for his next 4 courses, he ordered the coconut Thai seafood curry, venison, stuffed quail, and a cheesecake. The menu is quite extensive, and the portions are pretty substantial. Honestly, I would've been content at 3 courses, but the price difference to add 2 more courses was about ~$50, so why not?\n\nI would say, however, since my first time dining here more than 10 years ago, the menu hasn't changed much. Creativity-wise, they play it safe, but execution-wise, they are phenomenal and right-on-point. Service was great as well. This time, we also ordered wine pairings. I guess every restaurant does this differently. Here, they offered me 2 whites and 2 reds for $80, while they poured 1 white and 1 red for the bf for $40 since he was driving, which worked out perfectly. Again, the ability to customize your meal here is what sets it apart from other Michelin-star restaurants.",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '8',
					userId: '16',
					typeId: '2',
					upVoteCount: '16',
					downVoteCount: '6',
					businessRating: 5,
					reviewText:
						"I've been wanting to try this place since it first opened but never venture out to FiDi. The girls working today 4/9/2020 Thursday provided excellent service despite being open during this pandemic. Shout out to them.\n\nThe sumo crunch is amazing if you want a creamy and rich burrito, and the Latin ninja(?) is refreshing a light for those who want raw fish. Both were made how I would recreate this on my own at home, with less rice and generous portions of protein and veggies.\n\nSo fresh and quick, not to mention affordable! I'll be back next week!",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '8',
					userId: '17',
					typeId: '2',
					upVoteCount: '8',
					downVoteCount: '1',
					businessRating: 3,
					reviewText:
						"I love sushi, but sushi burrito? Hmmm maybe not. It's just too messy for me. We ordered Sushiritto for a team meeting. I got the Sumo crunch and the crunches kept falling out and it was so hard keeping it clean.\n\nOtherwise, I like the food. The seaweed, rice and the rest of the filling blended together very well. It was super filling too. I do wish there were more veggies and shrimp tempura, mine was filled with artificial crab meat.\n\nAlso wish they have more cooked meat options. I wasn't feeling raw seafood that day and the only option was Sumo.",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '9',
					userId: '18',
					typeId: '2',
					upVoteCount: '12',
					downVoteCount: '0',
					businessRating: 4,
					reviewText:
						"I decided to pick up The Bird for lunch one day, and let me tell you; The whole ride home I could just smell the delicious-ness inside reeking out from the bag. The ride home felt like forever.\n\nWHAT I LIKED:\n- The chicken is juicy and the breading is just the right amount of flavorful. The piece of chicken is also HUGE.\n- I love how they use flat sliced pickles so nothing really spills out when you're eating it. Everything goes so well together.\n\nWHAT I DIDN'T LIKE:\n- Nothing about the sandwich itself. BUT, I do wish that they offered a mild spice chicken sandwich. The spicy chicken sandwich is a bit too spicy for me to enjoy, but I do wish that the original had a little bit of kick to it. If there was a mild, then it would be the absolute perfect chicken sandwich.\n- It's also a pretty heavy meal. Definitely an indulgence once in a while. It's not the healthiest but it sure is dang tasty!!",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '9',
					userId: '19',
					typeId: '2',
					upVoteCount: '9',
					downVoteCount: '1',
					businessRating: 1,
					reviewText:
						'I ordered food for me and my family, since I have tried it before. I got it delivered to my work place and it WAS THE WORST THING EVER. The order was missing 1 sandwich, 3 orders of curly fries and 1 beer. I tried to connect with the restaurant via phone and they did not pick up. Then I send them a message through instagram hoping they would let me go pick the rest of my food or something, but no they just said they were going to look into it.\n\nHorrible!!! And I liked the place so much.\n\nEvery time you order from this place probably pick it up and check items there.',
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '10',
					userId: '11',
					typeId: '2',
					upVoteCount: '13',
					downVoteCount: '2',
					businessRating: 4,
					reviewText:
						"I have never dined in at this location, since I live closer to the Market & 14th location...but I have gotten take-out from here many times, in large part because they are usually open a half hour later than their sister restaurant.  Since neither stay open very late, that extra half-hour means that even if I am running late with my day, I can still get those delicious whole-belly Ipswich fried clams and a cup of clam chowdah!!  As a native New Englander, this is my version of soul food!  Giant lobster roll on a house-made proper split-top bun that's been buttered and toasted to perfection, and that you can have them make with just butter and lobster??!  YES, PLEASE!!!  Lemonade I can put together myself so that I can control the amount of sweetness in it?  Perfection!!  \n\nThe only downside to this restaurant?  No chocolate dessert...not even a whoopee pie!!!  Ahhh, well, you can't have everything in life!  Still a really solid, affordable, tasty New-England-style seafood restaurant that makes my taste buds really, really happy!!!",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '10',
					userId: '12',
					typeId: '2',
					upVoteCount: '11',
					downVoteCount: '1',
					businessRating: 5,
					reviewText:
						"Wow this place is delicious. Fish tacos are to DIE for, and would get them 10x over again. I'd like to try the Maine style lobster sandwhich next time. Don't get me wrong the butter one I got was good, but it just gets boring after a while. The DIY Arnold Palmer was delicious and you can make it just the way you like. No wait time when we went, but it got busy and take out was pumping out too. Highly recommend this place of you're in the area.",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '11',
					userId: '13',
					typeId: '2',
					upVoteCount: '4',
					downVoteCount: '0',
					businessRating: 5,
					reviewText:
						"BEST PERUVIAN FOOD EVER!\n\nMy Peruvian friend had raved to me about chef Gastón Acurio, so I had high expectations coming in. I love love love Peruvian food and have tried several different restaurants, but the taste/quality of the food here was on a different level.\n\nMy fiancé and I made reservations for a Valentine's Day dinner. We got here early and ordered some pisco sours at the bar. The drinks were great and we had fun chatting with the bartender before being seated.\n\nThe first thing I noticed was the trendy/romantic atmosphere in the restaurant, which made for a great date night. The patio also had really nice views of the waterfront, so in the future I would definitely like to have lunch here and eat outside.\n\nFor dinner we ordered cebiche clásico with plantain chips, lomo saltado, and limeña. To satisfy my sweet tooth, we finished off our meal with a slice of tres leches cake. Everything was exceptional. The lomo saltado was my favorite- the fries were crispy and the steak was tender/juicy. I can't wait to come back!",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '11',
					userId: '14',
					typeId: '2',
					upVoteCount: '2',
					downVoteCount: '0',
					businessRating: 4,
					reviewText:
						"Cebiche with a Pisco Sour . Don't believe the interwebs, it says that they are closed from 3-6. Although, that's when they have happy hour everyday! $7 cocktails $5 empanadas & $15 for cebiche.\n\nOverall, there's nothing amazing or memorable about this place. Although, it's a nice change of pace and switch up for your happy hour repertoire.",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '12',
					userId: '19',
					typeId: '2',
					upVoteCount: '17',
					downVoteCount: '2',
					businessRating: 4,
					reviewText:
						"Came in for dinner on a Thursday evening, and was seated right away, but that's probably because it was just me (that's how it's done).\n\nHad the seasonal brew pecan ale, the crawfish beignet, and the catfish de allemands. Service was excellent: helpful, available, and on top of it! Food came out within five to ten minutes. The catfish de allemands was amazing! Moist fish fillet with a slightly crispy exterior over a bed of rice pilaf topped with a crawfish etoufee. Seafood craving satisfied. Would definitely order again!\n\nEven though I was pretty full, I just had to try their sweet beignet flight, which includes an apple, a chocolate, and a classic beignet. My favorite was actually the apple beignet, which reminded me of the apple pie from McDonald's (don't be hatin'), but with powdered sugar. All the beignets were tasty, but were a tad on the dense side.\n\nOverall, great food, service, and ambiance. If I'm ever in SF and craving soul food, will have to stop by again, but maybe with a group, so I can try more of their food!",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '12',
					userId: '15',
					typeId: '2',
					upVoteCount: '2',
					downVoteCount: '15',
					businessRating: 3,
					reviewText: 'it was good, I guess',
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '12',
					userId: '16',
					typeId: '2',
					upVoteCount: '7',
					downVoteCount: '1',
					businessRating: 5,
					reviewText:
						"1. Plan to wait over an hours, write your name inside and stay close by. Owners are around and smiley, I love that.\n2. Strategize your order the whole time you wait!\n3. We had a server who was a little sour, didn't crack a smile the whole time. We wondered if she was not a server, maybe from BOH, and was just helping, because she forgot our sides and some drinks and we just let it go because she was having a bad day or something, haha, and we knew the food was going to be bomb so who cares about a sourpuss server lol.\n4. I had shrimp grits which was delicious and we shared some sides. Chicken is amazing of course but our table's favorite was the goat cheese omelette! It was so flavorful, soulful, and and refreshing to have that goat cheese tang on the end, yay!",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '12',
					userId: '11',
					typeId: '3',
					upVoteCount: '31',
					downVoteCount: '1',
					businessRating: 5,
					reviewText:
						'Came here for dinner on a Wednesday evening.  It was quite busy, but there was a quick table turnaround and we were seated pretty much immediately.\n\nI got two fried chicken thighs, a la carte, with a side of macaroni and cheese.  The chicken was crazy crispy with a slight spice to it.  Excellently seasoned.  The macaroni and cheese was great as well, so much creamy, cheese with so much flavor.\n\nWe got the flight of beignets for dessert - regular, chocolate hazelnut, and apple.  A couple of them seemed a bit overcooked, too crunchy, but the chocolate hazelnut was my favorite.\n\nWould definitely come back for the chicken and macaroni and cheese.',
					videoLink: 'https://www.youtube.com/embed/U4T1KCtf0hI',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '13',
					userId: '17',
					typeId: '2',
					upVoteCount: '9',
					downVoteCount: '0',
					businessRating: 5,
					reviewText:
						"This spot is fire. Came here on a late night for a burrito and I left so satisfied. Everything about the burrito was good. It's a great no frills spot to get your food on a late night.\n\nWould come back for the carne asada super burrito!",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					businessId: '13',
					userId: '18',
					typeId: '2',
					upVoteCount: '7',
					downVoteCount: '1',
					businessRating: 5,
					reviewText:
						"This is definitely one of my favorite places to visit when I go to SF. It's a small hole-in-the-wall place that serves amazing Mexican food for a fair price. We were originally planning to do a fancy dinner, but the restaurant we wanted to go to was closed for a holiday party and El Farolito was right down the street so we headed over. It was about 7 pm on a rainy Friday and the line was almost out the door and all the tables were taken.\n\nWe ordered two crispy tacos, quesadilla suiza and super nachos along with a beer and horchata for about $30. CASH ONLY. We luckily found an open table and our food was brought out to us pretty quickly. The portions here are huge and it was more than enough for 2 people to share. Their salsas are amazing, I especially love the green sauce! My only wish is that they make super fries or fry their own tortilla chips instead of using store bought ones, but it was still delicious.\n\nParking in the city is horrible and it's street parking only for this place. Thankfully we were able to walk from our Airbnb.",
					videoLink: '',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Reviews', null, {});
	}
};
