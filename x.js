import * as fs from 'fs'
let a=[
    {
      Subject: "Weight Loss Awareness Month",
      description: "Weight Loss Awareness Month is observed in January to raise awareness about the importance of maintaining a healthy weight and promoting healthy lifestyle choices.",
      tags: [
        "Health",
        "Fitness",
        "Wellness"
      ]
    },
    {
      Subject: "National Blood Donor Month",
      description: "National Blood Donor Month is observed in January to encourage people to donate blood and raise awareness about the importance of regular blood donations.",
      tags: [
        "Health",
        "Charity"
      ]
    },
    {
      Subject: "National Thank You Month",
      description: "National Thank You Month is observed in January to express gratitude and appreciation towards others. It is a time to acknowledge and thank people for their kindness and support.",
      tags: [
        "Appreciation",
        "Gratitude"
      ]
    },
    {
      Subject: "National Hobby Month",
      description: "National Hobby Month is observed in January to encourage people to pursue their hobbies and explore new interests. It is a time to engage in activities that bring joy and relaxation.",
      tags: [
        "Hobbies",
        "Leisure"
      ]
    },
    {
      Subject: "National Tea Month",
      description: "National Tea Month is observed in January to celebrate the love for tea and promote its various flavors and health benefits. It is a time to enjoy and appreciate different types of teas.",
      tags: [
        "Beverages",
        "Tea"
      ]
    },
    {
      Subject: "Girl Scout Cookie Season Begins",
      description: "Girl Scout Cookie Season begins in January, where Girl Scouts sell cookies to raise funds for their activities and learn important entrepreneurial skills.",
      tags: [
        "Charity",
        "Food"
      ]
    },
    {
      Subject: "Diet Resolution Week",
      description: "Diet Resolution Week is observed in January to encourage people to make healthy eating resolutions and adopt better dietary habits for overall well-being.",
      tags: [
        "Health",
        "Fitness",
        "Wellness"
      ]
    },
    {
      Subject: "Hunt For Happiness Week",
      description: "Hunt For Happiness Week is observed in January to promote happiness and well-being. It encourages people to engage in activities that bring joy and positivity.",
      tags: [
        "Wellness",
        "Happiness"
      ]
    },
    {
      Subject: "Clean Out Your Inbox Week",
      description: "Clean Out Your Inbox Week is observed in January to encourage people to declutter and organize their email inboxes for better productivity and reduced digital clutter.",
      tags: [
        "Productivity",
        "Organization"
      ]
    },
    {
      Subject: "National School Choice Week",
      description: "National School Choice Week is observed in January to raise awareness about the importance of educational options and empower parents to choose the best schooling for their children.",
      tags: [
        "Education",
        "Parenting"
      ]
    },
    {
      Subject: "Meat Week",
      description: "Meat Week is observed in January to celebrate and appreciate various types of meats. It is a time to enjoy meat-based dishes and explore different culinary traditions.",
      tags: [
        "Food",
        "Cuisine"
      ]
    },
    {
      Subject: "New Year’s Day",
      description: "New Year's Day is celebrated on January 1st to mark the beginning of the new year. It is a time for reflection, resolutions, and spending time with loved ones.",
      tags: [
        "Holiday",
        "Celebration"
      ]
    },
    {
      Subject: "National Hangover Day",
      description: "National Hangover Day is observed on January 1st to acknowledge the effects of excessive alcohol consumption during New Year's Eve celebrations and promote responsible drinking.",
      tags: [
        "Health",
        "Wellness"
      ]
    },
    {
      Subject: "Outback Bowl",
      description: "The Outback Bowl is an annual college football bowl game held on New Year's Day in Tampa, Florida. It features teams from the Big Ten Conference and Southeastern Conference.",
      tags: [
        "Sports",
        "Football"
      ]
    },
    {
      Subject: "Rose Bowl",
      description: "The Rose Bowl is an annual college football bowl game held on New Year's Day in Pasadena, California. It is one of the oldest and most prestigious bowl games.",
      tags: [
        "Sports",
        "Football"
      ]
    },
    {
      Subject: "NHL Winter Classic",
      description: "The NHL Winter Classic is an annual outdoor ice hockey game held on New Year's Day. It features teams from the National Hockey League playing in an outdoor stadium.",
      tags: [
        "Sports",
        "Hockey"
      ]
    },
    {
      Subject: "Science Fiction Day",
      description: "Science Fiction Day is observed on January 2nd to celebrate and appreciate the genre of science fiction. It is a time to enjoy science fiction literature, movies, and TV shows.",
      tags: [
        "Entertainment",
        "Science Fiction"
      ]
    },
    {
      Subject: "Festival of Sleep Day",
      description: "Festival of Sleep Day is observed on January 3rd to promote the importance of a good night's sleep and encourage relaxation. It is a day to prioritize rest and rejuvenation.",
      tags: [
        "Wellness",
        "Relaxation"
      ]
    },
    {
      Subject: "Trivia Day",
      description: "Trivia Day is observed on January 4th to celebrate and enjoy trivia games and facts. It is a day to test knowledge, have fun, and learn interesting tidbits.",
      tags: [
        "Entertainment",
        "Trivia"
      ]
    },
    {
      Subject: "National Bird Day",
      description: "National Bird Day is observed on January 5th to raise awareness about the importance of bird conservation and appreciate the beauty and diversity of birds.",
      tags: [
        "Nature",
        "Conservation"
      ]
    },
    {
      Subject: "PGA Tournament of Champions",
      description: "The PGA Tournament of Champions is an annual golf tournament held in Hawaii. It features a select field of golfers who have won a PGA Tour event in the previous year. The tournament marks the beginning of the PGA Tour season and showcases top-level golfing talent.",
      tags: [
        "Sports",
        "Golf",
        "Competition"
      ]
    },
    {
      Subject: "National Bean Day",
      description: "National Bean Day is a celebration of beans, a versatile and nutritious food source. It promotes awareness of the various types of beans and their culinary uses. This day encourages people to incorporate beans into their meals and appreciate their health benefits.",
      tags: [
        "Food",
        "Cooking",
        "Nutrition"
      ]
    },
    {
      Subject: "Cuddle Up Day",
      description: "Cuddle Up Day is a cozy holiday that encourages people to snuggle up with their loved ones or furry friends. It's a perfect opportunity to show affection, enjoy warmth, and create a sense of comfort. Cuddling promotes bonding and relaxation, making it a delightful day for relaxation and affectionate gestures.",
      tags: [
        "Relationships",
        "Love",
        "Comfort"
      ]
    },
    {
      Subject: "Elvis’s Birthday",
      description: "Elvis’s Birthday commemorates the birth anniversary of the legendary musician Elvis Presley. It is a day to celebrate his life, music, and cultural impact. Fans of Elvis Presley often organize events, tribute concerts, and gatherings to honor his legacy and enjoy his iconic songs.",
      tags: [
        "Music",
        "Celebrity",
        "Tribute"
      ]
    },
    {
      Subject: "Golden Globes",
      description: "The Golden Globes is an annual awards ceremony honoring outstanding achievements in film and television. It recognizes excellence in various categories, including acting, directing, and production. The event brings together renowned actors, filmmakers, and industry professionals for a glamorous night of celebration.",
      tags: [
        "Entertainment",
        "Film",
        "Television",
        "Awards"
      ]
    },
    {
      Subject: "National Bittersweet Chocolate Day",
      description: "National Bittersweet Chocolate Day celebrates the rich and indulgent flavor of bittersweet chocolate. It's a day to savor and appreciate the unique taste and versatility of this type of chocolate. People often enjoy bittersweet chocolate in various forms, such as bars, desserts, and beverages.",
      tags: [
        "Food",
        "Chocolate",
        "Desserts"
      ]
    },
    {
      Subject: "Houseplant Appreciation Day",
      description: "Houseplant Appreciation Day is dedicated to recognizing the beauty and benefits of indoor plants. It encourages people to appreciate and care for their houseplants, which can enhance indoor air quality, provide a calming environment, and add aesthetic appeal to homes and offices.",
      tags: [
        "Home Decor",
        "Plants",
        "Wellness"
      ]
    },
    {
      Subject: "College Football Playoff National Championship",
      description: "The College Football Playoff National Championship is the culmination of the college football season. It determines the national champion among the top teams in the sport. The game showcases exceptional athleticism, strategic gameplay, and intense competition, captivating football fans across the nation.",
      tags: [
        "Sports",
        "Football",
        "Competition"
      ]
    },
    {
      Subject: "National Clean Off Your Desk Day",
      description: "National Clean Off Your Desk Day encourages individuals to declutter and organize their workspaces. It promotes productivity, reduces stress, and creates a more efficient work environment. This day serves as a reminder to tidy up desks, discard unnecessary items, and start the year with a clean slate.",
      tags: [
        "Organization",
        "Productivity",
        "Workplace"
      ]
    },
    {
      Subject: "National Human Trafficking Awareness Day",
      description: "National Human Trafficking Awareness Day aims to raise awareness about the global issue of human trafficking. It seeks to educate the public, advocate for victims, and support efforts to combat this form of modern-day slavery. Various organizations and individuals participate in events and campaigns to shed light on this critical issue.",
      tags: [
        "Social Justice",
        "Awareness",
        "Human Rights"
      ]
    },
    {
      Subject: "National Take the Stairs Day",
      description: "National Take the Stairs Day encourages individuals to choose stairs over elevators or escalators as a simple way to incorporate physical activity into their daily routine. It promotes a healthier lifestyle, increases cardiovascular fitness, and reduces energy consumption. This day serves as a reminder to prioritize movement and make small changes for better health.",
      tags: [
        "Fitness",
        "Health",
        "Wellness"
      ]
    },
    {
      Subject: "National Sticker Day",
      description: "National Sticker Day celebrates the joy and versatility of stickers. It's a day to appreciate the colorful, adhesive creations that can be used for decoration, expression, and personalization. Stickers are popular among children and adults alike, offering a fun and creative way to add flair to various items.",
      tags: [
        "Art",
        "Crafts",
        "Personalization"
      ]
    },
    {
      Subject: "Dress Up Your Pet Day",
      description: "Dress Up Your Pet Day is a lighthearted holiday that encourages pet owners to have fun and showcase their pets' personalities through costumes and accessories. It's a day to celebrate the bond between humans and their furry companions, while also providing entertainment and laughter.",
      tags: [
        "Pets",
        "Fashion",
        "Fun"
      ]
    },
    {
      Subject: "National Hat Day",
      description: "National Hat Day celebrates the wide variety of hats and their fashion and functional significance. It's a day to showcase different hat styles, express personal style, and appreciate the practicality of hats in protecting from the elements. People often wear hats of various types and share their hat-related experiences.",
      tags: [
        "Fashion",
        "Accessories",
        "Style"
      ]
    },
    {
      Subject: "Ditch New Year’s Resolutions Day",
      description: "Ditch New Year’s Resolutions Day humorously acknowledges the common trend of abandoning New Year's resolutions shortly after making them. It's a day to reflect on the challenges of sticking to resolutions and embrace self-acceptance. People often share their experiences, funny anecdotes, or alternative approaches to personal growth.",
      tags: [
        "Humor",
        "Self-Improvement",
        "Reflection"
      ]
    },
    {
      Subject: "Martin Luther King, Jr. Day",
      description: "Martin Luther King, Jr. Day commemorates the life and legacy of civil rights leader Martin Luther King, Jr. It is a day to honor his contributions to the advancement of racial equality, justice, and peace. Many communities organize events, marches, and educational programs to promote King's teachings and continue the fight against discrimination.",
      tags: [
        "History",
        "Civil Rights",
        "Equality"
      ]
    },
    {
      Subject: "Winnie the Pooh Day (Author A.A. Milne’s birthday)",
      description: "Winnie the Pooh Day celebrates the beloved children's book character Winnie the Pooh and the birthday of author A.A. Milne. It's a day to revisit the enchanting stories, embrace the innocence of childhood, and appreciate the enduring charm of Winnie the Pooh and his friends in the Hundred Acre Wood.",
      tags: [
        "Literature",
        "Children",
        "Imagination"
      ]
    },
    {
      Subject: "National Popcorn Day",
      description: "National Popcorn Day is a celebration of the popular snack, popcorn. It's a day to enjoy the crunchy and flavorful treat while watching movies, socializing, or simply indulging in a tasty snack. Popcorn comes in various flavors and is a versatile snack enjoyed by people of all ages.",
      tags: [
        "Food",
        "Snacks",
        "Entertainment"
      ]
    },
    {
      Subject: "Get To Know Your Customer’s Day",
      description: "Get To Know Your Customer’s Day is an opportunity for businesses to connect with their customers on a deeper level. It encourages building relationships, understanding customer needs, and providing personalized experiences. Businesses often organize special events, promotions, or surveys to gather feedback and enhance customer satisfaction.",
      tags: [
        "Business",
        "Customer Service",
        "Relationships"
      ]
    },
    {
      Subject: "Penguin Awareness Day",
      description: "Penguin Awareness Day aims to raise awareness about penguins, their habitats, and conservation efforts. It highlights the unique characteristics and challenges faced by these fascinating flightless birds. Various organizations, zoos, and individuals participate in educational activities and events to promote penguin conservation and appreciation.",
      tags: [
        "Animals",
        "Conservation",
        "Education"
      ]
    },
    {
      Subject: "National Cheese Lover’s Day",
      description: "National Cheese Lover’s Day is a celebration of all things cheese. It is a day dedicated to indulging in and appreciating the various types and flavors of cheese.",
      tags: [
        "Holiday",
        "Food"
      ]
    },
    {
      Subject: "Sundance Film Festival begins",
      description: "The Sundance Film Festival is an annual event that showcases independent films from around the world. It is a platform for filmmakers to present their work and for audiences to discover unique and thought-provoking cinema.",
      tags: [
        "Festival",
        "Film"
      ]
    },
    {
      Subject: "National Hugging Day",
      description: "National Hugging Day is a day to celebrate the power of hugs and promote the importance of physical affection. It encourages people to embrace the act of hugging and spread warmth and love through simple gestures.",
      tags: [
        "Holiday",
        "Wellness"
      ]
    },
    {
      Subject: "Chinese New Year",
      description: "Chinese New Year, also known as the Spring Festival, is a traditional Chinese holiday that marks the beginning of the lunar calendar year. It is a time for family reunions, feasts, fireworks, and various cultural activities to welcome good luck and prosperity.",
      tags: [
        "Holiday",
        "Cultural"
      ]
    },
    {
      Subject: "National Pie Day",
      description: "National Pie Day is a celebration of the beloved pastry dessert. It is a day to enjoy and appreciate the wide variety of sweet and savory pies, from classic apple pie to savory meat pies.",
      tags: [
        "Holiday",
        "Food"
      ]
    },
    {
      Subject: "Community Manager Appreciation Day #CMAD",
      description: "Community Manager Appreciation Day, also known as #CMAD, is a day dedicated to recognizing and appreciating the hard work and dedication of community managers. It is a time to acknowledge their efforts in building and nurturing online communities.",
      tags: [
        "Holiday",
        "Social Media"
      ]
    },
    {
      Subject: "Compliment Day",
      description: "Compliment Day is a day to spread positivity and uplift others by giving sincere compliments. It encourages people to recognize and appreciate the good qualities in others, fostering a sense of kindness and connection.",
      tags: [
        "Holiday",
        "Wellness"
      ]
    },
    {
      Subject: "National Peanut Butter Day",
      description: "National Peanut Butter Day celebrates the popular spread made from ground peanuts. It is a day to enjoy peanut butter in various forms, such as sandwiches, cookies, or simply by the spoonful.",
      tags: [
        "Holiday",
        "Food"
      ]
    },
    {
      Subject: "Opposite Day",
      description: "Opposite Day is a playful and lighthearted day where people humorously do or say the opposite of what is expected. It is a day to have fun and embrace the unexpected.",
      tags: [
        "Holiday",
        "Fun"
      ]
    },
    {
      Subject: "Spouse’s Day",
      description: "Spouse’s Day is a day to celebrate and appreciate one's spouse or partner. It is a time to show love, gratitude, and support for the person who shares life's journey.",
      tags: [
        "Holiday",
        "Relationships"
      ]
    },
    {
      Subject: "Chocolate Cake Day",
      description: "Chocolate Cake Day is a day dedicated to the indulgence of chocolate cake. It is a time to savor the rich and decadent flavors of this beloved dessert.",
      tags: [
        "Holiday",
        "Food"
      ]
    },
    {
      Subject: "Data Privacy Day",
      description: "Data Privacy Day is an annual event that raises awareness about the importance of protecting personal information and promoting privacy rights. It aims to educate individuals and organizations about privacy issues and best practices for safeguarding data.",
      tags: [
        "Holiday",
        "Technology"
      ]
    },
    {
      Subject: "Fun at Work Day",
      description: "Fun at Work Day is a day to bring joy and laughter into the workplace. It encourages employers and employees to engage in fun activities, team-building exercises, and lighthearted moments to boost morale and create a positive work environment.",
      tags: [
        "Holiday",
        "Workplace"
      ]
    },
    {
      Subject: "Winter X Games",
      description: "The Winter X Games is an annual extreme sports event that showcases the world's best athletes in disciplines such as snowboarding, skiing, and snowmobiling. It is a thrilling competition that pushes the boundaries of action sports.",
      tags: [
        "Festival",
        "Sports"
      ]
    },
    {
      Subject: "National Puzzle Day",
      description: "National Puzzle Day celebrates the joy of puzzles and brainteasers. It is a day to challenge the mind, solve puzzles, and appreciate the mental stimulation and entertainment they provide.",
      tags: [
        "Holiday",
        "Games"
      ]
    },
    {
      Subject: "Backward Day",
      description: "Backward Day is a day to do things in reverse or opposite order. It is a fun and whimsical day where people can embrace the unexpected and break from routine.",
      tags: [
        "Holiday",
        "Fun"
      ]
    },
    {
      Subject: "Black History Month",
      description: "Black History Month is an annual observance in the United States and Canada that celebrates the achievements and contributions of African Americans throughout history. It is a time to honor the rich cultural heritage and recognize the struggles and triumphs of the Black community.",
      tags: [
        "Month",
        "Cultural"
      ]
    },
    {
      Subject: "American Heart Month",
      description: "American Heart Month is a month-long campaign dedicated to raising awareness about heart health and promoting cardiovascular wellness. It aims to educate individuals about the risk factors for heart disease and encourage healthy lifestyle choices.",
      tags: [
        "Month",
        "Health"
      ]
    },
    {
      Subject: "National Heart Month",
      description: "National Heart Month is an observance that focuses on raising awareness about heart disease and promoting heart-healthy habits. It aims to educate individuals about the importance of cardiovascular health and encourage preventive measures.",
      tags: [
        "Month",
        "Health"
      ]
    },
    {
      Subject: "National Weddings Month",
      description: "National Weddings Month is a month-long celebration of love and marriage. It is a time to honor the institution of marriage, celebrate wedding traditions, and provide inspiration for couples planning their special day.",
      tags: [
        "Month",
        "Weddings"
      ]
    },
    {
      Subject: "National Cherry Month",
      description: "National Cherry Month is a celebration of cherries and their significance. It is observed during the month of February, and it promotes the consumption of cherries and highlights their health benefits.",
      tags: [
        "Holiday",
        "Food"
      ]
    },
    {
      Subject: "Eating Disorder Awareness Week",
      description: "Eating Disorder Awareness Week is a dedicated week to raise awareness about eating disorders, their prevention, and treatment. It aims to educate the public, support individuals affected by eating disorders, and promote a healthy body image.",
      tags: [
        "Awareness",
        "Health"
      ]
    },
    {
      Subject: "New York Fashion Week",
      description: "New York Fashion Week is a major event in the fashion industry. It showcases the latest collections of renowned designers and sets the trends for the upcoming seasons. Fashion enthusiasts, designers, models, and media professionals gather to witness the glamorous runway shows.",
      tags: [
        "Fashion",
        "Event"
      ]
    },
    {
      Subject: "Freelance Writers Appreciation Week",
      description: "Freelance Writers Appreciation Week is a week-long celebration dedicated to recognizing and appreciating the work of freelance writers. It acknowledges their contributions to various industries and highlights the importance of their skills and creativity.",
      tags: [
        "Writing",
        "Appreciation"
      ]
    },
    {
      Subject: "Condom Week",
      description: "Condom Week is an annual event that aims to promote safe sex practices and raise awareness about the importance of using condoms to prevent sexually transmitted infections (STIs) and unintended pregnancies. It provides education, resources, and encourages open discussions about sexual health.",
      tags: [
        "Health",
        "Awareness"
      ]
    },
    {
      Subject: "Random Acts of Kindness Week",
      description: "Random Acts of Kindness Week is a week-long observance that encourages individuals to perform acts of kindness towards others. It promotes compassion, empathy, and making a positive impact on people's lives through simple gestures of kindness.",
      tags: [
        "Holiday",
        "Kindness"
      ]
    },
    {
      Subject: "International Flirting Week",
      description: "International Flirting Week is a playful and lighthearted observance that celebrates the art of flirting. It encourages people to engage in harmless flirting, boost their confidence, and create connections with others in a fun and flirtatious manner.",
      tags: [
        "Holiday",
        "Social"
      ]
    },
    {
      Subject: "Milan Fashion Week",
      description: "Milan Fashion Week is a prestigious fashion event held in Milan, Italy. It showcases the latest collections from renowned Italian and international designers. The event attracts fashion industry professionals, celebrities, and fashion enthusiasts from around the world.",
      tags: [
        "Fashion",
        "Event"
      ]
    },
    {
      Subject: "London Fashion Week",
      description: "London Fashion Week is a prominent fashion event held in London, United Kingdom. It showcases the latest trends and collections from established and emerging designers. The event includes runway shows, presentations, and industry networking opportunities.",
      tags: [
        "Fashion",
        "Event"
      ]
    },
    {
      Subject: "Paris Fashion Week",
      description: "Paris Fashion Week is one of the most prestigious fashion events in the world. It takes place in Paris, France, and showcases the latest haute couture and ready-to-wear collections from top designers. The event attracts fashion industry professionals, celebrities, and fashion enthusiasts.",
      tags: [
        "Fashion",
        "Event"
      ]
    },
    {
      Subject: "National Freedom Day",
      description: "National Freedom Day is a commemorative day that celebrates the signing of the 13th Amendment to the United States Constitution, which abolished slavery. It serves as a reminder of the importance of freedom, equality, and the ongoing fight against injustice.",
      tags: [
        "Holiday",
        "History"
      ]
    },
    {
      Subject: "Groundhog Day",
      description: "Groundhog Day is a traditional holiday observed on February 2nd. According to folklore, if a groundhog emerges from its burrow and sees its shadow, it signifies six more weeks of winter. It is a lighthearted event that attracts attention and curiosity.",
      tags: [
        "Holiday",
        "Tradition"
      ]
    },
    {
      Subject: "Bubble Gum Day",
      description: "Bubble Gum Day is a fun and playful observance that encourages people to enjoy and celebrate bubble gum. It is a day to indulge in chewing gum, blowing bubbles, and embracing the joy and nostalgia associated with this popular confectionery.",
      tags: [
        "Holiday",
        "Food"
      ]
    },
    {
      Subject: "World Cancer Day",
      description: "World Cancer Day is an international day dedicated to raising awareness about cancer, its prevention, detection, and treatment. It aims to inspire action, promote research, and support individuals and communities affected by cancer.",
      tags: [
        "Awareness",
        "Health"
      ]
    },
    {
      Subject: "Give Kids a Smile Day",
      description: "Give Kids a Smile Day is an annual event that provides free dental care and education to children in need. It aims to improve oral health, raise awareness about dental issues, and ensure that all children have access to proper dental care.",
      tags: [
        "Health",
        "Charity"
      ]
    },
    {
      Subject: "Grammy's",
      description: "The Grammy Awards, also known as the Grammys, is an annual music awards ceremony that honors outstanding achievements in the music industry. It recognizes artists, songwriters, producers, and other professionals for their contributions to the world of music.",
      tags: [
        "Music",
        "Event"
      ]
    },
    {
      Subject: "World Nutella Day",
      description: "World Nutella Day is a day dedicated to celebrating Nutella, a popular chocolate-hazelnut spread. It encourages people to enjoy Nutella in various ways, such as spreading it on toast, using it in recipes, or simply indulging in its deliciousness.",
      tags: [
        "Holiday",
        "Food"
      ]
    },
    {
      Subject: "National Weatherperson’s Day",
      description: "National Weatherperson's Day is a day to honor and appreciate weather forecasters and meteorologists. It recognizes their important role in providing weather information, forecasts, and warnings to help keep people safe and informed.",
      tags: [
        "Holiday",
        "Appreciation"
      ]
    },
    {
      Subject: "National Chopsticks Day",
      description: "National Chopsticks Day celebrates the traditional Asian eating utensils known as chopsticks. It promotes the cultural significance of chopsticks, their usage, and encourages people to try using them while enjoying Asian cuisine.",
      tags: [
        "Holiday",
        "Food"
      ]
    },
    {
      Subject: "Send a Card to a Friend Day #SendACardToAFriendDay",
      description: "Send a Card to a Friend Day is a day dedicated to sending heartfelt cards to friends to show appreciation, love, or simply to brighten their day. It encourages people to reconnect, express gratitude, and strengthen friendships through the act of sending cards.",
      tags: [
        "Holiday",
        "Friendship"
      ]
    },
    {
      Subject: "Oscar Nomination Announcement",
      description: "The Oscar Nomination Announcement is an annual event where the nominees for the prestigious Academy Awards are revealed. It is an exciting time for the film industry and movie enthusiasts as they eagerly anticipate the recognition of outstanding cinematic achievements.",
      tags: [
        "Event",
        "Film"
      ]
    },
    {
      Subject: "Boy Scout’s Day",
      description: "Boy Scout's Day is a celebration of the Boy Scouts of America, an organization that promotes character development, leadership skills, and outdoor activities for young boys. It is a day to honor the contributions of Boy Scouts and recognize their commitment to community service and personal growth.",
      tags: [
        "Holiday",
        "Community"
      ]
    },
    {
      Subject: "National Pizza Day",
      description: "National Pizza Day is a day dedicated to the beloved Italian dish, pizza. It is a celebration of the various flavors and styles of pizza, from classic Margherita to creative gourmet combinations. People indulge in their favorite pizzas and share their love for this universally enjoyed food.",
      tags: [
        "Food",
        "Celebration"
      ]
    },
    {
      Subject: "Umbrella Day",
      description: "Umbrella Day is a day to appreciate and recognize the importance of umbrellas in protecting us from rain and sun. It is a reminder of the practicality and usefulness of this everyday item. On this day, people may share umbrella-related stories, facts, or even showcase unique umbrella designs.",
      tags: [
        "Accessory",
        "Weather"
      ]
    },
    {
      Subject: "Make a Friend Day",
      description: "Make a Friend Day is a day dedicated to fostering new friendships and strengthening existing ones. It encourages people to reach out, connect, and engage with others in meaningful ways. It is an opportunity to spread kindness, build social connections, and create a more inclusive and friendly community.",
      tags: [
        "Social",
        "Community"
      ]
    },
    {
      Subject: "Lincoln’s Birthday",
      description: "Lincoln's Birthday is a commemoration of the birth anniversary of Abraham Lincoln, the 16th President of the United States. It is a day to honor his leadership, contributions to the nation, and his role in abolishing slavery. Various events and ceremonies may take place to remember and reflect upon his legacy.",
      tags: [
        "Holiday",
        "History"
      ]
    },
    {
      Subject: "Superbowl Sunday",
      description: "Superbowl Sunday is the day of the annual championship game of the National Football League (NFL). It is one of the biggest sporting events in the United States, where millions of people gather to watch the game, enjoy halftime performances, and indulge in food and drinks. It has become a cultural phenomenon beyond football, with commercials and social gatherings being a significant part of the experience.",
      tags: [
        "Sports",
        "Entertainment"
      ]
    },
    {
      Subject: "Valentine’s Day",
      description: "Valentine's Day is a day dedicated to celebrating love and affection. It is a time to express romantic feelings towards partners, friends, and family through gestures like exchanging gifts, cards, or spending quality time together. The day is associated with symbols like hearts, roses, and Cupid, and is often seen as an opportunity to show appreciation and affection to loved ones.",
      tags: [
        "Holiday",
        "Romance"
      ]
    },
    {
      Subject: "Susan B. Anthony’s Birthday",
      description: "Susan B. Anthony's Birthday commemorates the birth anniversary of Susan B. Anthony, a prominent figure in the women's suffrage movement. It is a day to honor her tireless efforts in advocating for women's rights, including the right to vote. The day may involve discussions, events, or actions that promote gender equality and women's empowerment.",
      tags: [
        "Holiday",
        "History",
        "Women's Rights"
      ]
    },
    {
      Subject: "Singles Awareness Day",
      description: "Singles Awareness Day, also known as S.A.D., is a day dedicated to celebrating and embracing the single life. It is an opportunity for single individuals to focus on self-love, self-care, and personal growth. The day may involve activities that promote independence, self-reflection, and appreciation of the single journey.",
      tags: [
        "Holiday",
        "Self-Care"
      ]
    },
    {
      Subject: "Random Acts of Kindness Day",
      description: "Random Acts of Kindness Day is a day to encourage and inspire acts of kindness towards others. It promotes the idea of making the world a better place through small, unexpected acts of generosity, compassion, and empathy. People may engage in various acts of kindness, such as helping strangers, volunteering, or spreading positivity.",
      tags: [
        "Holiday",
        "Kindness"
      ]
    },
    {
      Subject: "Drink Wine Day",
      description: "Drink Wine Day is a day to appreciate and enjoy the art of wine tasting and the pleasures of drinking wine. It celebrates the rich history, diverse flavors, and cultural significance of wine. Wine enthusiasts may gather to share their favorite wines, learn about different varieties, or simply savor a glass of their preferred vintage.",
      tags: [
        "Beverage",
        "Celebration"
      ]
    },
    {
      Subject: "Love Your Pet Day",
      description: "Love Your Pet Day is a day to show extra love, care, and appreciation for our beloved pets. It is an opportunity to pamper them, spend quality time together, and acknowledge the joy and companionship they bring to our lives. People may engage in activities like pet grooming, special treats, or outdoor adventures with their furry friends.",
      tags: [
        "Holiday",
        "Pets"
      ]
    },
    {
      Subject: "Presidents Day",
      description: "Presidents Day is a federal holiday in the United States that honors and celebrates the country's presidents, past and present. It is a day to reflect on the leadership, achievements, and contributions of the nation's leaders. Various events, parades, or educational activities may take place to commemorate this day.",
      tags: [
        "Holiday",
        "History"
      ]
    },
    {
      Subject: "Fat Tuesday/Mardi Gras",
      description: "Fat Tuesday, also known as Mardi Gras, is a festive celebration that takes place before the Christian season of Lent. It is a day of indulgence, feasting, and revelry, often associated with colorful parades, costumes, and lively music. People enjoy traditional foods, participate in carnival-like activities, and embrace the festive spirit.",
      tags: [
        "Holiday",
        "Celebration"
      ]
    },
    {
      Subject: "Washington’s Birthday",
      description: "Washington's Birthday, also known as Presidents Day, is a federal holiday in the United States that honors the first President of the country, George Washington. It is a day to commemorate his birth and reflect on his significant contributions to the nation. The day may involve ceremonies, historical discussions, or events that highlight Washington's legacy.",
      tags: [
        "Holiday",
        "History"
      ]
    },
    {
      Subject: "Margarita Day",
      description: "Margarita Day is a day dedicated to celebrating the popular cocktail, the Margarita. It is a time to enjoy this refreshing drink made with tequila, lime juice, and orange liqueur. Margarita enthusiasts may gather at bars, restaurants, or host their own parties to savor different variations of this classic cocktail.",
      tags: [
        "Beverage",
        "Celebration"
      ]
    },
    {
      Subject: "Walk Your Dog Day",
      description: "Walk Your Dog Day is a day to promote the health and well-being of dogs through regular exercise. It encourages dog owners to take their furry companions for walks, hikes, or other outdoor activities. The day also emphasizes the importance of responsible pet ownership and strengthening the bond between humans and their canine friends.",
      tags: [
        "Pets",
        "Health"
      ]
    },
    {
      Subject: "Ash Wednesday",
      description: "Ash Wednesday marks the beginning of the Christian season of Lent. It is a day of repentance, reflection, and preparation for Easter. Many Christians attend church services where ashes are applied to their foreheads in the shape of a cross, symbolizing mortality and the need for spiritual renewal.",
      tags: [
        "Religious",
        "Observance"
      ]
    },
    {
      Subject: "National Tortilla Chip Day",
      description: "National Tortilla Chip Day is a day to celebrate the popular snack, tortilla chips. It is a time to enjoy these crispy, corn-based chips often served with salsa, guacamole, or other dips. People may gather for parties, cookouts, or simply indulge in their favorite tortilla chip flavors and combinations.",
      tags: [
        "Food",
        "Celebration"
      ]
    }
  ]

  let b=[
    {
     Subject: "Weight Loss Awareness Month",
     StartDate: "01/01/2023",
     EndDate: "01/31/2023"
    },
    {
     Subject: "National Blood Donor Month",
     StartDate: "01/01/2023",
     EndDate: "01/31/2023"
    },
    {
     Subject: "National Thank You Month",
     StartDate: "01/01/2023",
     EndDate: "01/31/2023"
    },
    {
     Subject: "National Hobby Month",
     StartDate: "01/01/2023",
     EndDate: "01/31/2023"
    },
    {
     Subject: "National Tea Month",
     StartDate: "01/01/2023",
     EndDate: "01/31/2023"
    },
    {
     Subject: "Girl Scout Cookie Season Begins",
     StartDate: "01/01/2023",
     EndDate: "01/31/2023"
    },
    {
     Subject: "Diet Resolution Week",
     StartDate: "01/02/2023",
     EndDate: "01/08/2023"
    },
    {
     Subject: "Hunt For Happiness Week",
     StartDate: "01/16/2023",
     EndDate: "01/22/2023"
    },
    {
     Subject: "Clean Out Your Inbox Week",
     StartDate: "01/23/2023",
     EndDate: "01/29/2023"
    },
    {
     Subject: "National School Choice Week",
     StartDate: "01/23/2023",
     EndDate: "01/29/2023",
     "Column6": " "
    },
    {
     Subject: "Meat Week",
     StartDate: "01/29/2023",
     EndDate: "02/24/2023"
    },
    {
     Subject: "New Year’s Day",
     StartDate: "01/01/2023"
    },
    {
     Subject: "National Hangover Day",
     StartDate: "01/01/2023"
    },
    {
     Subject: "Outback Bowl",
     StartDate: "01/01/2023"
    },
    {
     Subject: "Rose Bowl",
     StartDate: "01/01/2023"
    },
    {
     Subject: "NHL Winter Classic",
     StartDate: "01/01/2023"
    },
    {
     Subject: "Science Fiction Day",
     StartDate: "01/02/2023"
    },
    {
     Subject: "Festival of Sleep Day",
     StartDate: "01/03/2023"
    },
    {
     Subject: "Trivia Day",
     StartDate: "01/04/2023"
    },
    {
     Subject: "National Bird Day",
     StartDate: "01/05/2023"
    },
    {
     Subject: "PGA Tournament of Champions",
     StartDate: "01/05/2023",
     EndDate: "01/08/2023"
    },
    {
     Subject: "National Bean Day",
     StartDate: "01/06/2023"
    },
    {
     Subject: "Cuddle Up Day",
     StartDate: "01/06/2023"
    },
    {
     Subject: "Elvis’s Birthday",
     StartDate: "01/08/2023"
    },
    {
     Subject: "Golden Globes",
     StartDate: "01/09/2023"
    },
    {
     Subject: "National Bittersweet Chocolate Day",
     StartDate: "01/10/2023"
    },
    {
     Subject: "Houseplant Appreciation Day",
     StartDate: "01/10/2023"
    },
    {
     Subject: "College Football Playoff National Championship",
     StartDate: "01/10/2023"
    },
    {
     Subject: "National Clean Off Your Desk Day",
     StartDate: "01/10/2023"
    },
    {
     Subject: "National Human Trafficking Awareness Day",
     StartDate: "01/11/2023"
    },
    {
     Subject: "National Take the Stairs Day",
     StartDate: "01/12/2023"
    },
    {
     Subject: "National Sticker Day",
     StartDate: "01/13/2023"
    },
    {
     Subject: "Dress Up Your Pet Day",
     StartDate: "01/14/2023"
    },
    {
     Subject: "National Hat Day",
     StartDate: "01/15/2023"
    },
    {
     Subject: "Ditch New Year’s Resolutions Day",
     StartDate: "01/17/2023"
    },
    {
     Subject: "Martin Luther King, Jr. Day",
     StartDate: "01/17/2023"
    },
    {
     Subject: "Winnie the Pooh Day (Author A.A. Milne’s birthday)",
     StartDate: "01/18/2023"
    },
    {
     Subject: "National Popcorn Day",
     StartDate: "01/19/2023"
    },
    {
     Subject: "Get To Know Your Customer’s Day",
     StartDate: "01/20/2023"
    },
    {
     Subject: "Penguin Awareness Day",
     StartDate: "01/20/2023"
    },
    {
     Subject: "National Cheese Lover’s Day",
     StartDate: "01/20/2023"
    },
    {
     Subject: "Sundance Film Festival begins",
     StartDate: "01/20/2023"
    },
    {
     Subject: "National Hugging Day",
     StartDate: "01/21/2023"
    },
    {
     Subject: "Chinese New Year",
     StartDate: "01/02/2023"
    },
    {
     Subject: "National Pie Day",
     StartDate: "01/23/2023"
    },
    {
     Subject: "Community Manager Appreciation Day #CMAD",
     StartDate: "01/24/2023"
    },
    {
     Subject: "Compliment Day",
     StartDate: "01/24/2023"
    },
    {
     Subject: "National Peanut Butter Day",
     StartDate: "01/24/2023"
    },
    {
     Subject: "Opposite Day",
     StartDate: "01/25/2023"
    },
    {
     Subject: "Spouse’s Day",
     StartDate: "01/26/2023"
    },
    {
     Subject: "Chocolate Cake Day",
     StartDate: "01/27/2023"
    },
    {
     Subject: "Data Privacy Day",
     StartDate: "01/28/2023"
    },
    {
     Subject: "Fun at Work Day",
     StartDate: "01/28/2023"
    },
    {
     Subject: "Winter X Games",
     StartDate: "01/27/2023",
     EndDate: "01/29/2023"
    },
    {
     Subject: "National Puzzle Day",
     StartDate: "01/29/2023"
    },
    {
     Subject: "Backward Day",
     StartDate: "01/31/2023"
    },
    {
     Subject: "Black History Month",
     StartDate: "02/01/2023",
     EndDate: "02/28/2023"
    },
    {
     Subject: "American Heart Month",
     StartDate: "02/01/2023",
     EndDate: "02/28/2023"
    },
    {
     Subject: "National Heart Month",
     StartDate: "02/01/2023",
     EndDate: "02/28/2023"
    },
    {
     Subject: "National Weddings Month",
     StartDate: "02/01/2023",
     EndDate: "02/28/2023"
    },
    {
     Subject: "National Cherry Month",
     StartDate: "02/01/2023",
     EndDate: "02/28/2023"
    },
    {
     Subject: "Eating Disorder Awareness Week",
     StartDate: "02/07/2023",
     EndDate: "02/13/2023"
    },
    {
     Subject: "New York Fashion Week",
     StartDate: "02/09/2023",
     EndDate: "02/15/2023"
    },
    {
     Subject: "Freelance Writers Appreciation Week",
     StartDate: "02/12/2023",
     EndDate: "02/18/2023"
    },
    {
     Subject: "Condom Week",
     StartDate: "02/14/2023",
     EndDate: "02/21/2023"
    },
    {
     Subject: "Random Acts of Kindness Week",
     StartDate: "02/14/2023",
     EndDate: "02/20/2023"
    },
    {
     Subject: "International Flirting Week",
     StartDate: "02/12/2023",
     EndDate: "02/18/2023"
    },
    {
     Subject: "Milan Fashion Week",
     StartDate: "02/07/2023",
     EndDate: "02/13/2023"
    },
    {
     Subject: "London Fashion Week",
     StartDate: "02/07/2023",
     EndDate: "02/13/2023"
    },
    {
     Subject: "Paris Fashion Week",
     StartDate: "02/07/2023",
     EndDate: "02/13/2023"
    },
    {
     Subject: "National Freedom Day",
     StartDate: "02/01/2023"
    },
    {
     Subject: "Groundhog Day",
     StartDate: "02/02/2023"
    },
    {
     Subject: "Bubble Gum Day",
     StartDate: "02/04/2023"
    },
    {
     Subject: "World Cancer Day",
     StartDate: "02/04/2023"
    },
    {
     Subject: "Give Kids a Smile Day",
     StartDate: "02/04/2023"
    },
    {
     Subject: "Grammy's",
     StartDate: "02/05/2023"
    },
    {
     Subject: "World Nutella Day",
     StartDate: "02/05/2023"
    },
    {
     Subject: "National Weatherperson’s Day",
     StartDate: "02/05/2023"
    },
    {
     Subject: "National Chopsticks Day",
     StartDate: "02/06/2023"
    },
    {
     Subject: "Send a Card to a Friend Day #SendACardToAFriendDay",
     StartDate: "02/07/2023"
    },
    {
     Subject: "Oscar Nomination Announcement",
     StartDate: "02/08/2023"
    },
    {
     Subject: "Boy Scout’s Day",
     StartDate: "02/08/2023"
    },
    {
     Subject: "National Pizza Day",
     StartDate: "02/09/2023"
    },
    {
     Subject: "Umbrella Day",
     StartDate: "02/10/2023"
    },
    {
     Subject: "Make a Friend Day",
     StartDate: "02/11/2023"
    },
    {
     Subject: "Lincoln’s Birthday",
     StartDate: "02/12/2023"
    },
    {
     Subject: "Superbowl Sunday",
     StartDate: "02/12/2023"
    },
    {
     Subject: "Valentine’s Day",
     StartDate: "02/14/2023"
    },
    {
     Subject: "Susan B. Anthony’s Birthday",
     StartDate: "02/15/2023"
    },
    {
     Subject: "Singles Awareness Day",
     StartDate: "02/15/2023"
    },
    {
     Subject: "Random Acts of Kindness Day",
     StartDate: "02/17/2023"
    },
    {
     Subject: "Drink Wine Day",
     StartDate: "02/18/2023"
    },
    {
     Subject: "Love Your Pet Day",
     StartDate: "02/20/2023"
    },
    {
     Subject: "Presidents Day",
     StartDate: "02/20/2023"
    },
    {
     Subject: "Fat Tuesday/Mardi Gras",
     StartDate: "02/21/2023"
    },
    {
     Subject: "Washington’s Birthday",
     StartDate: "02/22/2023",
     "Column4": 1
    },
    {
     Subject: "Margarita Day",
     StartDate: "02/22/2023"
    },
    {
     Subject: "Walk Your Dog Day",
     StartDate: "02/22/2023"
    },
    {
     Subject: "Ash Wednesday",
     StartDate: "03/02/2023"
    },
    {
     Subject: "National Tortilla Chip Day",
     StartDate: "02/24/2023"
    },
    {
     Subject: "National Pistachio Day",
     StartDate: "02/26/2023"
    },
    {
     Subject: "Floral Design Day",
     StartDate: "02/28/2023"
    },
    {
     Subject: "Women’s History Month",
     StartDate: "03/01/2023",
     EndDate: "03/31/2023"
    },
    {
     Subject: "Nutrition Month",
     StartDate: "03/01/2023",
     EndDate: "03/31/2023"
    },
    {
     Subject: "Peanut Month",
     StartDate: "03/01/2023",
     EndDate: "03/31/2023"
    },
    {
     Subject: "Music in Our Schools Month",
     StartDate: "03/01/2023",
     EndDate: "03/31/2023"
    },
    {
     Subject: "Craft Month",
     StartDate: "03/01/2023",
     EndDate: "03/31/2023"
    },
    {
     Subject: "Irish Heritage Month",
     StartDate: "03/01/2023",
     EndDate: "03/31/2023"
    },
    {
     Subject: "American Red Cross Month",
     StartDate: "03/01/2023",
     EndDate: "03/31/2023"
    },
    {
     Subject: "March for Meals",
     StartDate: "03/01/2023",
     EndDate: "03/31/2023"
    },
    {
     Subject: "The Great American Cleanup",
     StartDate: "03/01/2023",
     EndDate: "03/31/2023"
    },
    {
     Subject: "National Sleep Awareness Week",
     StartDate: "03/13/2023",
     EndDate: "03/19/2023"
    },
    {
     Subject: "Girl Scout Week",
     StartDate: "03/06/2023",
     EndDate: "03/12/2023"
    },
    {
     Subject: "Campfire Birthday Week",
     StartDate: "03/14/2023",
     EndDate: "03/18/2023"
    },
    {
     Subject: "National Cleaning Week",
     StartDate: "03/27/2023",
     EndDate: "04/02/2023"
    },
    {
     Subject: "Peanut Butter Lover’s Day",
     StartDate: "03/01/2023"
    },
    {
     Subject: "National Read Across America Day (Dr. Seuss Day)",
     StartDate: "03/02/2023"
    },
    {
     Subject: "World Wildlife Day",
     StartDate: "03/03/2023"
    },
    {
     Subject: "Grammar Day",
     StartDate: "03/04/2023"
    },
    {
     Subject: "Day of Unplugging",
     StartDate: "03/04/2023"
    },
    {
     Subject: "Dentist’s Day",
     StartDate: "03/06/2023"
    },
    {
     Subject: "Oreo Day",
     StartDate: "03/06/2023"
    },
    {
     Subject: "Shaq’s Birthday",
     StartDate: "03/06/2023"
    },
    {
     Subject: "Cereal Day",
     StartDate: "03/07/2023"
    },
    {
     Subject: "International Women’s Day",
     StartDate: "03/08/2023"
    },
    {
     Subject: "Popcorn Lover’s Day",
     StartDate: "03/10/2023"
    },
    {
     Subject: "95th Academy Awards",
     StartDate: "03/12/2023"
    },
    {
     Subject: "Girl Scout Birthday",
     StartDate: "03/12/2023"
    },
    {
     Subject: "Jewel Day",
     StartDate: "03/13/2023"
    },
    {
     Subject: "Daylight Savings",
     StartDate: "03/13/2023"
    },
    {
     Subject: "Pi Day",
     StartDate: "03/14/2023"
    },
    {
     Subject: "Napping Day",
     StartDate: "03/14/2023"
    },
    {
     Subject: "The Ides of March",
     StartDate: "03/15/2023"
    },
    {
     Subject: "St. Patrick’s Day",
     StartDate: "03/17/2023"
    },
    {
     Subject: "World Sleep Day",
     StartDate: "03/18/2023"
    },
    {
     Subject: "Awkward Moments Day",
     StartDate: "03/18/2023"
    },
    {
     Subject: "First Day of Spring",
     StartDate: "03/20/2023"
    },
    {
     Subject: "World Down Syndrome Day",
     StartDate: "03/21/2023"
    },
    {
     Subject: "International Day for the Elimination of Racial Discrimination",
     StartDate: "03/21/2023"
    },
    {
     Subject: "Agriculture Day",
     StartDate: "03/22/2023"
    },
    {
     Subject: "Ramadan",
     StartDate: "03/22/2023",
     EndDate: "04/21/2023"
    },
    {
     Subject: "World Water Day",
     StartDate: "03/22/2023"
    },
    {
     Subject: "American Diabetes Association Alert Day",
     StartDate: "03/22/2023"
    },
    {
     Subject: "Puppy Day",
     StartDate: "03/23/2023"
    },
    {
     Subject: "Purple Day for Epilepsy Awareness",
     StartDate: "03/26/2023"
    },
    {
     Subject: "Earth Hour Day",
     StartDate: "03/26/2023"
    },
    {
     Subject: "Oscar's Ceremony",
     StartDate: "03/27/2023"
    },
    {
     Subject: "Mom & Pop Business Owners Day",
     StartDate: "03/29/2023"
    },
    {
     Subject: "National Doctor’s Day",
     StartDate: "03/30/2023"
    },
    {
     Subject: "Crayon Day",
     StartDate: "03/31/2023"
    },
    {
     Subject: "Transgender Day of Visibility",
     StartDate: "03/31/2023"
    },
    {
     Subject: "Baseball Opening Day",
     StartDate: "03/30/2023"
    },
    {
     Subject: "Earth Month",
     StartDate: "04/01/2023",
     EndDate: "04/30/2023"
    },
    {
     Subject: "National Volunteer Month",
     StartDate: "04/01/2023",
     EndDate: "04/30/2023"
    },
    {
     Subject: "National Autism Awareness Month",
     StartDate: "04/01/2023",
     EndDate: "04/30/2023"
    },
    {
     Subject: "Keep America Beautiful Month",
     StartDate: "04/01/2023",
     EndDate: "04/30/2023"
    },
    {
     Subject: "National Garden Month",
     StartDate: "04/01/2023",
     EndDate: "04/30/2023"
    },
    {
     Subject: "Stress Awareness Month",
     StartDate: "04/01/2023",
     EndDate: "04/30/2023"
    },
    {
     Subject: "National Poetry Month",
     StartDate: "04/01/2023",
     EndDate: "04/30/2023"
    },
    {
     Subject: "National Volunteer Week",
     StartDate: "04/17/2023",
     EndDate: "04/23/2023"
    },
    {
     Subject: "Animal Cruelty/Human Violence Awareness Week",
     StartDate: "04/17/2023",
     EndDate: "04/23/2023"
    },
    {
     Subject: "Administrative Professionals Week",
     StartDate: "04/24/2023",
     EndDate: "04/30/2023"
    },
    {
     Subject: "Every Kid Healthy Week",
     StartDate: "04/25/2023",
     EndDate: "04/29/2023"
    },
    {
     Subject: "National Princess Week",
     StartDate: "04/24/2023",
     EndDate: "04/30/2023"
    },
    {
     Subject: "April Fool’s Day",
     StartDate: "04/01/2023"
    },
    {
     Subject: "Palm Sunday",
     StartDate: "04/02/2023"
    },
    {
     Subject: "World Autism Awareness Day",
     StartDate: "04/02/2023"
    },
    {
     Subject: "Equal Pay Day",
     StartDate: "04/02/2023"
    },
    {
     Subject: "National Peanut Butter and Jelly Day",
     StartDate: "04/02/2023"
    },
    {
     Subject: "Don’t Go To Work Unless it’s Fun Day",
     StartDate: "04/03/2023"
    },
    {
     Subject: "Find a Rainbow Day",
     StartDate: "04/03/2023"
    },
    {
     Subject: "School Librarian Day",
     StartDate: "04/04/2023"
    },
    {
     Subject: "Masters Tournament PGA",
     StartDate: "04/03/2023",
     EndDate: "04/09/2023"
    },
    {
     Subject: "National Walking Day",
     StartDate: "04/06/2023"
    },
    {
     Subject: "Good Friday",
     StartDate: "04/07/2023"
    },
    {
     Subject: "National Beer Day",
     StartDate: "04/07/2023"
    },
    {
     Subject: "World Health Day",
     StartDate: "04/07/2023"
    },
    {
     Subject: "Winston Churchill Day",
     StartDate: "04/09/2023"
    },
    {
     Subject: "Easter Sunday",
     StartDate: "04/09/2023"
    },
    {
     Subject: "Golfer’s Day",
     StartDate: "04/10/2023"
    },
    {
     Subject: "National Pet Day",
     StartDate: "04/11/2023"
    },
    {
     Subject: "National Grilled Cheese Day",
     StartDate: "04/12/2023"
    },
    {
     Subject: "Coachella Music Festival",
     StartDate: "04/14/2023",
     EndDate: "04/18/2023"
    },
    {
     Subject: "National Titanic Remembrance Day",
     StartDate: "04/15/2023"
    },
    {
     Subject: "Tax Day",
     StartDate: "04/15/2023"
    },
    {
     Subject: "Patriot’s Day",
     StartDate: "04/17/2023"
    },
    {
     Subject: "Boston Marathon",
     StartDate: "04/18/2023"
    },
    {
     Subject: "Lookalike Day",
     StartDate: "04/20/2023"
    },
    {
     Subject: "National High-Five Day",
     StartDate: "04/21/2023"
    },
    {
     Subject: "Earth Day",
     StartDate: "04/22/2023"
    },
    {
     Subject: "Administrative Professional’s Day",
     StartDate: "04/27/2023"
    },
    {
     Subject: "Denim Day",
     StartDate: "04/27/2023"
    },
    {
     Subject: "National Superhero Day",
     StartDate: "04/28/2023"
    },
    {
     Subject: "Take Your Daughter and/or Son to Work Day",
     StartDate: "04/28/2023"
    },
    {
     Subject: "Arbor Day",
     StartDate: "04/29/2023"
    },
    {
     Subject: "National Honesty Day",
     StartDate: "04/30/2023"
    },
    {
     Subject: "National Adopt a Shelter Pet Day",
     StartDate: "04/30/2023"
    },
    {
     Subject: "ALS Awareness",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "National Golf Month",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "Asthma Awareness",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "National Celiac Disease Awareness Month",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "Clean Air Month",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "Global Employee Health and Fitness Month",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "National Barbecue Month",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "National Bike Month",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "National Hamburger Month",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "National Salad Month",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "National Photograph Month",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "Gifts from the Garden Month",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "Lupus Awareness Month",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "Military Family Appreciation Month",
     StartDate: "05/01/2023",
     EndDate: "05/31/2023"
    },
    {
     Subject: "Food Allergy Awareness Week",
     StartDate: "05/08/2023",
     EndDate: "05/14/2023"
    },
    {
     Subject: "National Tourism Week",
     StartDate: "05/01/2023",
     EndDate: "05/07/2023"
    },
    {
     Subject: "Drinking Water Week",
     StartDate: "05/01/2023",
     EndDate: "05/07/2023"
    },
    {
     Subject: "National Pet Week",
     StartDate: "05/01/2023",
     EndDate: "05/07/2023"
    },
    {
     Subject: "Teacher Appreciation Week",
     StartDate: "05/02/2023",
     EndDate: "05/06/2023"
    },
    {
     Subject: "Nurse’s Week",
     StartDate: "05/06/2023",
     EndDate: "05/12/2023"
    },
    {
     Subject: "May Day",
     StartDate: "05/01/2023"
    },
    {
     Subject: "Mother Goose Day",
     StartDate: "05/01/2023"
    },
    {
     Subject: "Thank A Teacher Day",
     StartDate: "05/03/2023"
    },
    {
     Subject: "National Teacher’s Day",
     StartDate: "05/03/2023"
    },
    {
     Subject: "Star Wars Day",
     StartDate: "05/04/2023"
    },
    {
     Subject: "International Firefighters Day",
     StartDate: "05/04/2023"
    },
    {
     Subject: "Cinco De Mayo",
     StartDate: "05/05/2023"
    },
    {
     Subject: "World Password Day",
     StartDate: "05/05/2023"
    },
    {
     Subject: "National Nurses Day",
     StartDate: "05/06/2023"
    },
    {
     Subject: "Kentucky Derby",
     StartDate: "05/06/2023"
    },
    {
     Subject: "World Red Cross and Red Crescent Day",
     StartDate: "05/08/2023"
    },
    {
     Subject: "Mother's Day",
     StartDate: "05/14/2023"
    },
    {
     Subject: "Eat What You Want Day",
     StartDate: "05/11/2023"
    },
    {
     Subject: "National Receptionists Day",
     StartDate: "05/11/2023"
    },
    {
     Subject: "World Fair Trade Day",
     StartDate: "05/14/2023"
    },
    {
     Subject: "National Chocolate Chip Day",
     StartDate: "05/15/2023"
    },
    {
     Subject: "Love a Tree Day",
     StartDate: "05/16/2023"
    },
    {
     Subject: "PGA Championship",
     StartDate: "05/16/2023",
     EndDate: "05/22/2023"
    },
    {
     Subject: "NASCAR Day",
     StartDate: "05/19/2023"
    },
    {
     Subject: "Be a Millionaire Day",
     StartDate: "05/20/2023"
    },
    {
     Subject: "National Bike to Work Day",
     StartDate: "05/20/2023"
    },
    {
     Subject: "Armed Forces Day",
     StartDate: "05/20/2023"
    },
    {
     Subject: "Red Nose Day",
     StartDate: "05/23/2023"
    },
    {
     Subject: "Victoria Day (Canada)",
     StartDate: "05/23/2023"
    },
    {
     Subject: "Geek Pride Day",
     StartDate: "05/25/2023"
    },
    {
     Subject: "National Wine Day",
     StartDate: "05/25/2023"
    },
    {
     Subject: "Sally Ride Day",
     StartDate: "05/26/2023"
    },
    {
     Subject: "French Open",
     StartDate: "05/28/2023",
     EndDate: "06/11/2023"
    },
    {
     Subject: "Indianapolis 500",
     StartDate: "05/28/2023"
    },
    {
     Subject: "Memorial Day",
     StartDate: "05/29/2023"
    },
    {
     Subject: "World No-Tobacco Day",
     StartDate: "05/31/2023"
    },
    {
     Subject: "Men’s Health Month",
     StartDate: "06/01/2023",
     EndDate: "06/30/2023"
    },
    {
     Subject: "National Safety Month",
     StartDate: "06/01/2023",
     EndDate: "06/30/2023"
    },
    {
     Subject: "Acne Awareness Month",
     StartDate: "06/01/2023",
     EndDate: "06/30/2023"
    },
    {
     Subject: "LGBTQ Pride Month",
     StartDate: "06/01/2023",
     EndDate: "06/30/2023"
    },
    {
     Subject: "National Adopt a Cat Month",
     StartDate: "06/01/2023",
     EndDate: "06/30/2023"
    },
    {
     Subject: "Aquarium Month",
     StartDate: "06/01/2023",
     EndDate: "06/30/2023"
    },
    {
     Subject: "Candy Month",
     StartDate: "06/01/2023",
     EndDate: "06/30/2023"
    },
    {
     Subject: "Stanley Cup Finals",
     StartDate: "06/01/2023",
     EndDate: "06/30/2023"
    },
    {
     Subject: "NBA Finals",
     StartDate: "06/01/2023",
     EndDate: "06/30/2023"
    },
    {
     Subject: "Pet Appreciation Week",
     StartDate: "06/04/2023",
     EndDate: "06/10/2023"
    },
    {
     Subject: "National Rocky Road Day",
     StartDate: "06/02/2023"
    },
    {
     Subject: "National Donut Day",
     StartDate: "06/03/2023"
    },
    {
     Subject: "Hug Your Cat Day",
     StartDate: "06/04/2023"
    },
    {
     Subject: "National Cheese Day",
     StartDate: "06/04/2023"
    },
    {
     Subject: "World Environment Day",
     StartDate: "06/05/2023"
    },
    {
     Subject: "National Chocolate Ice Cream Day",
     StartDate: "06/07/2023"
    },
    {
     Subject: "World Oceans Day",
     StartDate: "06/08/2023"
    },
    {
     Subject: "National Best Friends Day",
     StartDate: "06/08/2023"
    },
    {
     Subject: "Donald Duck Day",
     StartDate: "06/09/2023"
    },
    {
     Subject: "Iced Tea Day",
     StartDate: "06/10/2023"
    },
    {
     Subject: "Men’s Health Week",
     StartDate: "06/12/2023",
     EndDate: "06/18/2023"
    },
    {
     Subject: "National Weed Your Garden Day",
     StartDate: "06/13/2023"
    },
    {
     Subject: "Flag Day",
     StartDate: "06/14/2023"
    },
    {
     Subject: "U.S. Open PGA",
     StartDate: "06/15/2023",
     EndDate: "06/18/2023"
    },
    {
     Subject: "Bonnaroo Music Festival",
     StartDate: "06/16/2023",
     EndDate: "6/219/2023"
    },
    {
     Subject: "National Splurge Day",
     StartDate: "06/18/2023"
    },
    {
     Subject: "Juneteenth",
     StartDate: "06/19/2023"
    },
    {
     Subject: "World Juggler’s Day",
     StartDate: "06/19/2023"
    },
    {
     Subject: "Father’s Day",
     StartDate: "06/19/2023"
    },
    {
     Subject: "First Day of Summer / Summer Solstice",
     StartDate: "06/21/2023"
    },
    {
     Subject: "National Selfie Day",
     StartDate: "06/21/2023"
    },
    {
     Subject: "National Kissing Day",
     StartDate: "06/22/2023"
    },
    {
     Subject: "Wimbledon",
     StartDate: "06/22/2023",
     EndDate: "07/10/2023"
    },
    {
     Subject: "National Take a Dog to Work Day",
     StartDate: "06/24/2023"
    },
    {
     Subject: "Camera Day",
     StartDate: "06/29/2023"
    },
    {
     Subject: "National Handshake Day",
     StartDate: "06/30/2023"
    },
    {
     Subject: "Social Media Day",
     StartDate: "06/30/2023"
    },
    {
     Subject: "Ice Cream Month",
     StartDate: "07/01/2023",
     EndDate: "07/31/2023"
    },
    {
     Subject: "National Grilling Month",
     StartDate: "07/01/2023",
     EndDate: "07/31/2023"
    },
    {
     Subject: "National Picnic Month",
     StartDate: "07/01/2023",
     EndDate: "07/31/2023"
    },
    {
     Subject: "National Independent Retailer Month",
     StartDate: "07/01/2023",
     EndDate: "07/31/2023"
    },
    {
     Subject: "National Blueberry Month",
     StartDate: "07/01/2023",
     EndDate: "07/31/2023"
    },
    {
     Subject: "Capture the Sunset Week",
     StartDate: "07/17/2023",
     EndDate: "07/23/2023"
    },
    {
     Subject: "World Lumberjack Championships",
     StartDate: "07/28/2023",
     EndDate: "07/30/2023"
    },
    {
     Subject: "National Postal Worker Day",
     StartDate: "07/01/2023"
    },
    {
     Subject: "International Joke Day",
     StartDate: "07/01/2023"
    },
    {
     Subject: "Tour de France",
     StartDate: "07/01/2023",
     EndDate: "07/23/2023"
    },
    {
     Subject: "World UFO Day",
     StartDate: "07/02/2023"
    },
    {
     Subject: "Independence Day",
     StartDate: "07/04/2023"
    },
    {
     Subject: "Nathan's Hot Dog Eating Contest",
     StartDate: "07/04/2023"
    },
    {
     Subject: "National Bikini Day",
     StartDate: "07/05/2023"
    },
    {
     Subject: "Chocolate Day",
     StartDate: "07/07/2023"
    },
    {
     Subject: "Video Games Day",
     StartDate: "07/08/2023"
    },
    {
     Subject: "National 7-Eleven Day",
     StartDate: "07/11/2023"
    },
    {
     Subject: "Pecan Pie Day",
     StartDate: "07/12/2023"
    },
    {
     Subject: "Rock Worldwide Day",
     StartDate: "07/13/2023"
    },
    {
     Subject: "French Fry Day",
     StartDate: "07/13/2023"
    },
    {
     Subject: "World Snake Day",
     StartDate: "07/16/2023"
    },
    {
     Subject: "Summer X Games",
     StartDate: "07/21/2023",
     EndDate: "07/23/2023"
    },
    {
     Subject: "World Emoji Day",
     StartDate: "07/17/2023"
    },
    {
     Subject: "National Ice Cream Day",
     StartDate: "07/17/2023"
    },
    {
     Subject: "Amazon Prime Day",
     StartDate: "07/12/2023"
    },
    {
     Subject: "National Daiquiri Day",
     StartDate: "07/19/2023"
    },
    {
     Subject: "Hot Dog Day",
     StartDate: "07/20/2023"
    },
    {
     Subject: "National Moon Day",
     StartDate: "07/20/2023"
    },
    {
     Subject: "Amelia Earhart Day",
     StartDate: "07/24/2023"
    },
    {
     Subject: "Parents’ Day",
     StartDate: "07/24/2023"
    },
    {
     Subject: "Aunt and Uncle Day",
     StartDate: "07/26/2023"
    },
    {
     Subject: "Father-in-Law Day",
     StartDate: "07/30/2023"
    },
    {
     Subject: "International Day of Friendship",
     StartDate: "07/30/2023"
    },
    {
     Subject: "Friendship Day",
     StartDate: "07/30/2023"
    },
    {
     Subject: "Back to School Month",
     StartDate: "08/01/2023",
     EndDate: "08/31/2023"
    },
    {
     Subject: "Peach Month",
     StartDate: "08/01/2023",
     EndDate: "08/31/2023"
    },
    {
     Subject: "National Breastfeeding Month",
     StartDate: "08/01/2023",
     EndDate: "08/31/2023"
    },
    {
     Subject: "Family Fun Month",
     StartDate: "08/01/2023",
     EndDate: "08/31/2023"
    },
    {
     Subject: "National Farmers’ Market Week",
     StartDate: "08/06/2023",
     EndDate: "08/12/2023"
    },
    {
     Subject: "National Motorcycle Week",
     StartDate: "08/14/2023",
     EndDate: "08/20/2023"
    },
    {
     Subject: "Feeding Pets of the Homeless Week",
     StartDate: "08/14/2023",
     EndDate: "08/20/2023"
    },
    {
     Subject: "National Girlfriends Day",
     StartDate: "08/01/2023"
    },
    {
     Subject: "National Ice Cream Sandwich Day",
     StartDate: "08/02/2023"
    },
    {
     Subject: "NFL Preseason Begins",
     StartDate: "08/03/2023"
    },
    {
     Subject: "World Golf Championship-FedEx St. Jude Invitational",
     StartDate: "08/08/2023",
     EndDate: "08/14/2023"
    },
    {
     Subject: "International Beer Day",
     StartDate: "08/05/2023"
    },
    {
     Subject: "International Cat Day",
     StartDate: "08/08/2023"
    },
    {
     Subject: "Book Lover’s Day",
     StartDate: "08/09/2023"
    },
    {
     Subject: "National S’mores Day",
     StartDate: "08/10/2023"
    },
    {
     Subject: "Middle Child’s Day (Go Jan Brady!)",
     StartDate: "08/12/2023"
    },
    {
     Subject: "Lefthander’s Day",
     StartDate: "08/13/2023"
    },
    {
     Subject: "National Tell a Joke Day",
     StartDate: "08/16/2023"
    },
    {
     Subject: "Bad Poetry Day",
     StartDate: "08/18/2023"
    },
    {
     Subject: "World Humanitarian Day",
     StartDate: "08/19/2023"
    },
    {
     Subject: "National Lemonade Day",
     StartDate: "08/20/2023"
    },
    {
     Subject: "Senior Citizens Day",
     StartDate: "08/21/2023"
    },
    {
     Subject: "National Dog Day",
     StartDate: "08/26/2023"
    },
    {
     Subject: "Women’s Equality Day",
     StartDate: "08/26/2023"
    },
    {
     Subject: "Frankenstein Day",
     StartDate: "08/30/2023"
    },
    {
     Subject: "National Trail Mix Day",
     StartDate: "08/31/2023"
    },
    {
     Subject: "Wilderness Month",
     StartDate: "09/01/2023",
     EndDate: "09/30/2023"
    },
    {
     Subject: "National Preparedness Month",
     StartDate: "09/01/2023",
     EndDate: "09/30/2023"
    },
    {
     Subject: "National Food Safety Education Month",
     StartDate: "09/01/2023",
     EndDate: "09/30/2023"
    },
    {
     Subject: "Fruit and Veggies—More Matters Month",
     StartDate: "09/01/2023",
     EndDate: "09/30/2023"
    },
    {
     Subject: "National Yoga Awareness Month",
     StartDate: "09/01/2023",
     EndDate: "09/30/2023"
    },
    {
     Subject: "Whole Grains Month",
     StartDate: "09/01/2023",
     EndDate: "09/30/2023"
    },
    {
     Subject: "Hispanic Heritage Month",
     StartDate: "09/15/2023",
     EndDate: "10/15/2023"
    },
    {
     Subject: "Little League Month",
     StartDate: "09/01/2023",
     EndDate: "09/30/2023"
    },
    {
     Subject: "Better Breakfast Month",
     StartDate: "09/01/2023",
     EndDate: "09/30/2023"
    },
    {
     Subject: "National Suicide Prevention Week",
     StartDate: "09/10/2023",
     EndDate: "09/16/2023"
    },
    {
     Subject: "Pollution Prevention Week",
     StartDate: "09/19/2023",
     EndDate: "09/25/2023"
    },
    {
     Subject: "National Indoor Plant Week",
     StartDate: "09/18/2023",
     EndDate: "09/24/2023"
    },
    {
     Subject: "National Dog Week",
     StartDate: "09/20/2023",
     EndDate: "09/27/2023"
    },
    {
     Subject: "International Bacon Day",
     StartDate: "09/03/2023"
    },
    {
     Subject: "9/11",
     StartDate: "09/04/2023"
    },
    {
     Subject: "Cheese Pizza Day",
     StartDate: "09/05/2023"
    },
    {
     Subject: "International Day of Charity",
     StartDate: "09/05/2023"
    },
    {
     Subject: "Labor Day",
     StartDate: "09/05/2023"
    },
    {
     Subject: "Read a Book Day",
     StartDate: "09/06/2023"
    },
    {
     Subject: "National Video Games Day",
     StartDate: "09/12/2023"
    },
    {
     Subject: "Uncle Sam Day",
     StartDate: "09/13/2023"
    },
    {
     Subject: "Greenpeace Day",
     StartDate: "09/15/2023"
    },
    {
     Subject: "Rosh Hashanah",
     StartDate: "09/15/2023",
     EndDate: "09/17/2023"
    },
    {
     Subject: "Constitution Day",
     StartDate: "09/17/2023"
    },
    {
     Subject: "Citizenship Day",
     StartDate: "09/17/2023"
    },
    {
     Subject: "Oktoberfest Begins",
     StartDate: "09/17/2023"
    },
    {
     Subject: "Boys' and Girls' Club Day for Kids",
     StartDate: "09/17/2023"
    },
    {
     Subject: "Wife Appreciation Day",
     StartDate: "09/18/2023"
    },
    {
     Subject: "International Talk Like a Pirate",
     StartDate: "09/19/2023"
    },
    {
     Subject: "International Day of Peace",
     StartDate: "09/21/2023"
    },
    {
     Subject: "Car-free Day",
     StartDate: "09/22/2023"
    },
    {
     Subject: "First Day of Fall",
     StartDate: "09/22/2023"
    },
    {
     Subject: "Checkers Day",
     StartDate: "09/23/2023"
    },
    {
     Subject: "Native American Day",
     StartDate: "09/22/2023"
    },
    {
     Subject: "World Tourism Day",
     StartDate: "09/27/2023"
    },
    {
     Subject: "National Voter Registration Day",
     StartDate: "09/27/2023"
    },
    {
     Subject: "World Rabies Day",
     StartDate: "09/28/2023"
    },
    {
     Subject: "National Good Neighbor Day",
     StartDate: "09/28/2023"
    },
    {
     Subject: "World Heart Day",
     StartDate: "09/29/2023"
    },
    {
     Subject: "International Podcast Day",
     StartDate: "09/30/2023"
    },
    {
     Subject: "Breast Cancer Awareness Month",
     StartDate: "10/01/2023",
     EndDate: "10/31/2023"
    },
    {
     Subject: "AIDS Awareness Month",
     StartDate: "10/01/2023",
     EndDate: "10/31/2023"
    },
    {
     Subject: "Bully Prevention Month",
     StartDate: "10/01/2023",
     EndDate: "10/31/2023"
    },
    {
     Subject: "Adopt a Shelter Dog Month",
     StartDate: "10/01/2023",
     EndDate: "10/31/2023"
    },
    {
     Subject: "Celiac Disease Awareness Month",
     StartDate: "10/01/2023",
     EndDate: "10/31/2023"
    },
    {
     Subject: "Financial Planning Month",
     StartDate: "10/01/2023",
     EndDate: "10/31/2023"
    },
    {
     Subject: "National Pizza Month",
     StartDate: "10/01/2023",
     EndDate: "10/31/2023"
    },
    {
     Subject: "Great Books Week",
     StartDate: "10/02/2023",
     EndDate: "10/08/2023"
    },
    {
     Subject: "National Work From Home Week",
     StartDate: "10/02/2023",
     EndDate: "10/08/2023"
    },
    {
     Subject: "Mediation Week",
     StartDate: "10/16/2023",
     EndDate: "10/22/2023"
    },
    {
     Subject: "National Business Women’s Week",
     StartDate: "10/16/2023",
     EndDate: "10/22/2023"
    },
    {
     Subject: "National Red Ribbon Week",
     StartDate: "10/23/2023",
     EndDate: "10/31/2023"
    },
    {
     Subject: "Coffee Day",
     StartDate: "10/01/2023"
    },
    {
     Subject: "World Vegetarian Day",
     StartDate: "10/01/2023"
    },
    {
     Subject: "Name Your Car Day",
     StartDate: "10/02/2023"
    },
    {
     Subject: "Brow Day",
     StartDate: "10/02/2023"
    },
    {
     Subject: "Oktoberfest Ends",
     StartDate: "10/03/2023"
    },
    {
     Subject: "National Techies Day",
     StartDate: "10/03/2023"
    },
    {
     Subject: "National Boyfriends Day",
     StartDate: "10/03/2023"
    },
    {
     Subject: "Yom Kippur",
     StartDate: "10/04/2023",
     EndDate: "10/05/2023"
    },
    {
     Subject: "National Taco Day",
     StartDate: "10/04/2023"
    },
    {
     Subject: "World Teacher’s Day",
     StartDate: "10/05/2023"
    },
    {
     Subject: "National Kale Day",
     StartDate: "10/07/2023"
    },
    {
     Subject: "World Smile Day",
     StartDate: "10/07/2023"
    },
    {
     Subject: "Indigenous Peoples' Day",
     StartDate: "10/09/2023"
    },
    {
     Subject: "Thanksgiving Day (Canada)",
     StartDate: "10/09/2023"
    },
    {
     Subject: "Leif Erikson Day",
     StartDate: "10/09/2023"
    },
    {
     Subject: "Columbus Day",
     StartDate: "10/09/2023"
    },
    {
     Subject: "World Mental Health Day",
     StartDate: "10/10/2023"
    },
    {
     Subject: "It’s My Party Day",
     StartDate: "10/11/2023"
    },
    {
     Subject: "Sweetest Day",
     StartDate: "10/15/2023"
    },
    {
     Subject: "World Food Day",
     StartDate: "10/16/2023"
    },
    {
     Subject: "Boss’s Day",
     StartDate: "10/16/2023"
    },
    {
     Subject: "Spirit Day (anti-bullying)",
     StartDate: "10/17/2023"
    },
    {
     Subject: "Make a Difference Day",
     StartDate: "10/22/2023"
    },
    {
     Subject: "United Nations Day",
     StartDate: "10/24/2023"
    },
    {
     Subject: "MLB World Series begins",
     StartDate: "10/28/2023"
    },
    {
     Subject: "Mischief Night",
     StartDate: "10/30/2023"
    },
    {
     Subject: "Checklist Day",
     StartDate: "10/30/2023"
    },
    {
     Subject: "Halloween",
     StartDate: "10/31/2023"
    },
    {
     Subject: "Movember",
     StartDate: "11/01/2023",
     EndDate: "11/31/2023"
    },
    {
     Subject: "National Healthy Skin Month",
     StartDate: "11/01/2023",
     EndDate: "11/31/2023"
    },
    {
     Subject: "Gluten-Free Diet Awareness Month",
     StartDate: "11/01/2023",
     EndDate: "11/31/2023"
    },
    {
     Subject: "National Adoption Month",
     StartDate: "11/01/2023",
     EndDate: "11/31/2023"
    },
    {
     Subject: "National Gratitude Month",
     StartDate: "11/01/2023",
     EndDate: "11/31/2023"
    },
    {
     Subject: "Peanut Butter Lovers’ Month",
     StartDate: "11/01/2023",
     EndDate: "11/31/2023"
    },
    {
     Subject: "National Diabetes Awareness Month",
     StartDate: "11/01/2023",
     EndDate: "11/31/2023"
    },
    {
     Subject: "World Kindness Week",
     StartDate: "11/07/2023",
     EndDate: "11/13/2023"
    },
    {
     Subject: "American Education Week",
     StartDate: "11/14/2023",
     EndDate: "11/20/2023"
    },
    {
     Subject: "Day of the Dead Begins",
     StartDate: "11/01/2023"
    },
    {
     Subject: "All Saint’s Day",
     StartDate: "11/01/2023"
    },
    {
     Subject: "World Vegan Day",
     StartDate: "11/01/2023"
    },
    {
     Subject: "Day of the Dead Ends",
     StartDate: "11/02/2023"
    },
    {
     Subject: "Sandwich Day",
     StartDate: "11/03/2023"
    },
    {
     Subject: "King Tut Day",
     StartDate: "11/04/2023"
    },
    {
     Subject: "Cappuccino Day",
     StartDate: "11/08/2023"
    },
    {
     Subject: "World Kindness Week",
     StartDate: "11/08/2023",
     EndDate: "11/14/2023"
    },
    {
     Subject: "STEM Day",
     StartDate: "11/08/2023"
    },
    {
     Subject: "Marine Corp Birthday",
     StartDate: "11/10/2023"
    },
    {
     Subject: "Veterans Day",
     StartDate: "11/11/2023"
    },
    {
     Subject: "Chicken Soup for the Soul Day",
     StartDate: "11/12/2023"
    },
    {
     Subject: "World Kindness Day",
     StartDate: "11/13/2023"
    },
    {
     Subject: "Sadie Hawkins Day",
     StartDate: "11/13/2023"
    },
    {
     Subject: "World Diabetes Day",
     StartDate: "11/14/2023"
    },
    {
     Subject: "America Recycles Day",
     StartDate: "11/15/2023"
    },
    {
     Subject: "National Entrepreneurs Day",
     StartDate: "11/15/2023"
    },
    {
     Subject: "International Tolerance Day",
     StartDate: "11/16/2023"
    },
    {
     Subject: "Homemade Bread Day",
     StartDate: "11/17/2023"
    },
    {
     Subject: "Transgender Day Of Remembrance",
     StartDate: "11/20/2023"
    },
    {
     Subject: "Thanksgiving Day (United States)",
     StartDate: "11/23/2023"
    },
    {
     Subject: "Black Friday",
     StartDate: "11/24/2023"
    },
    {
     Subject: "Small Business Saturday",
     StartDate: "11/25/2023"
    },
    {
     Subject: "Cyber Monday",
     StartDate: "11/27/2023"
    },
    {
     Subject: "Giving Tuesday",
     StartDate: "11/28/2023"
    },
    {
     Subject: "National Human Rights Month",
     StartDate: "12/01/2023",
     EndDate: "12/31/2023"
    },
    {
     Subject: "Operation Santa Paws",
     StartDate: "12/01/2023",
     EndDate: "12/31/2023"
    },
    {
     Subject: "Bingo Month",
     StartDate: "12/01/2023",
     EndDate: "12/31/2023"
    },
    {
     Subject: "World Aids Day",
     StartDate: "12/01/2023"
    },
    {
     Subject: "Presidents Cup PGA (Dates TBD)",
     StartDate: "12/01/2023"
    },
    {
     Subject: "Rosa Parks Day",
     StartDate: "12/01/2023"
    },
    {
     Subject: "International Day of Persons with Disabilities",
     StartDate: "12/03/2023"
    },
    {
     Subject: "Cookie Day",
     StartDate: "12/04/2023"
    },
    {
     Subject: "St. Nicholas Day",
     StartDate: "12/06/2023"
    },
    {
     Subject: "Hanukkah",
     StartDate: "12/07/2023",
     EndDate: "12/15/2023"
    },
    {
     Subject: "Pearl Harbor Remembrance Day",
     StartDate: "12/07/2023"
    },
    {
     Subject: "Christmas Card Day",
     StartDate: "12/09/2023"
    },
    {
     Subject: "Nobel Prize Day",
     StartDate: "12/10/2023"
    },
    {
     Subject: "Poinsettia Day",
     StartDate: "12/12/2023"
    },
    {
     Subject: "Roast Chestnuts Day",
     StartDate: "12/14/2023"
    },
    {
     Subject: "Bill of Rights Day",
     StartDate: "12/15/2023"
    },
    {
     Subject: "National Ugly Christmas Sweater Day",
     StartDate: "12/16/2023"
    },
    {
     Subject: "Free Shipping Day",
     StartDate: "12/18/2023"
    },
    {
     Subject: "Bake Cookies Day",
     StartDate: "12/18/2023"
    },
    {
     Subject: "Go Caroling Day",
     StartDate: "12/20/2023"
    },
    {
     Subject: "First Day of Winter / Winter Solstice",
     StartDate: "12/21/2023"
    },
    {
     Subject: "Festivus",
     StartDate: "12/23/2023"
    },
    {
     Subject: "Christmas Eve",
     StartDate: "12/24/2023"
    },
    {
     Subject: "Christmas Day",
     StartDate: "12/25/2023"
    },
    {
     Subject: "Kwanzaa",
     StartDate: "12/26/2023",
     EndDate: "01/01/2024"
    },
    {
     Subject: "Boxing Day",
     StartDate: "12/26/2023"
    },
    {
     Subject: "National Fruitcake Day",
     StartDate: "12/27/2023"
    },
    {
     Subject: "New Year’s Eve",
     StartDate: "12/31/2023"
    }
   ]


   let score=[
    { Subject: 'Weight Loss Awareness Month', score: 10 },
    { Subject: 'National Blood Donor Month', score: 5 },
    { Subject: 'National Thank You Month', score: 5 },
    { Subject: 'National Hobby Month', score: 5 },
    { Subject: 'National Tea Month', score: 5 },
    { Subject: 'Girl Scout Cookie Season Begins', score: 80 },
    { Subject: 'Diet Resolution Week', score: 20 },
    { Subject: 'Hunt For Happiness Week', score: 10 },
    { Subject: 'Clean Out Your Inbox Week', score: 5 },
    { Subject: 'National School Choice Week', score: 10 },
    { Subject: 'Meat Week', score: 30 },
    { Subject: 'New Year’s Day', score: 5 },
    { Subject: 'National Hangover Day', score: 5 },
    { Subject: 'Outback Bowl', score: 5 },
    { Subject: 'Rose Bowl', score: 5 },
    { Subject: 'NHL Winter Classic', score: 5 },
    { Subject: 'Science Fiction Day', score: 5 },
    { Subject: 'Festival of Sleep Day', score: 5 },
    { Subject: 'Trivia Day', score: 5 },
    { Subject: 'National Bird Day', score: 5 },
    { Subject: 'PGA Tournament of Champions', score: 10 },
    { Subject: 'National Bean Day', score: 5 },
    { Subject: 'Cuddle Up Day', score: 20 },
    { Subject: 'Elvis’s Birthday', score: 5 },
    { Subject: 'Golden Globes', score: 5 },
    { Subject: 'National Bittersweet Chocolate Day', score: 15 },
    { Subject: 'Houseplant Appreciation Day', score: 30 },
    {
      Subject: 'College Football Playoff National Championship',
      score: 10
    },
    { Subject: 'National Clean Off Your Desk Day', score: 10 },
    { Subject: 'National Human Trafficking Awareness Day', score: 5 },
    { Subject: 'National Take the Stairs Day', score: 10 },
    { Subject: 'National Sticker Day', score: 5 },
    { Subject: 'Dress Up Your Pet Day', score: 10 },
    { Subject: 'National Hat Day', score: 15 },
    { Subject: 'Ditch New Year’s Resolutions Day', score: 5 },
    { Subject: 'Martin Luther King, Jr. Day', score: 5 },
    {
      Subject: 'Winnie the Pooh Day (Author A.A. Milne’s birthday)',
      score: 5
    },
    { Subject: 'National Popcorn Day', score: 15 },
    { Subject: 'Get To Know Your Customer’s Day', score: 5 },
    { Subject: 'Penguin Awareness Day', score: 10 },
    { Subject: 'National Cheese Lover’s Day', score: 10 },
    { Subject: 'Sundance Film Festival begins', score: 20 },
    { Subject: 'National Hugging Day', score: 5 },
    { Subject: 'Chinese New Year', score: 0 },
    { Subject: 'National Pie Day', score: 15 },
    { Subject: 'Community Manager Appreciation Day #CMAD', score: 0 },
    { Subject: 'Compliment Day', score: 0 },
    { Subject: 'National Peanut Butter Day', score: 5 },
    { Subject: 'Opposite Day', score: 0 },
    { Subject: 'Spouse’s Day', score: 0 },
    { Subject: 'Chocolate Cake Day', score: 15 },
    { Subject: 'Data Privacy Day', score: 0 },
    { Subject: 'Fun at Work Day', score: 0 },
    { Subject: 'Winter X Games', score: 0 },
    { Subject: 'National Puzzle Day', score: 5 },
    { Subject: 'Backward Day', score: 0 },
    { Subject: 'Black History Month', score: 0 },
    { Subject: 'American Heart Month', score: 0 },
    { Subject: 'National Heart Month', score: 0 },
    { Subject: 'National Weddings Month', score: 0 },
    { Subject: 'National Cherry Month', score: 20 },
    { Subject: 'Eating Disorder Awareness Week', score: 10 },
    { Subject: 'New York Fashion Week', score: 100 },
    { Subject: 'Freelance Writers Appreciation Week', score: 5 },
    { Subject: 'Condom Week', score: 5 },
    { Subject: 'Random Acts of Kindness Week', score: 10 },
    { Subject: 'International Flirting Week', score: 10 },
    { Subject: 'Milan Fashion Week', score: 100 },
    { Subject: 'London Fashion Week', score: 100 },
    { Subject: 'Paris Fashion Week', score: 100 },
    { Subject: 'National Freedom Day', score: 5 },
    { Subject: 'Groundhog Day', score: 5 },
    { Subject: 'Bubble Gum Day', score: 5 },
    { Subject: 'World Cancer Day', score: 5 },
    { Subject: 'Give Kids a Smile Day', score: 5 },
    { Subject: "Grammy's", score: 5 },
    { Subject: 'World Nutella Day', score: 5 },
    { Subject: 'National Weatherperson’s Day', score: 5 },
    { Subject: 'National Chopsticks Day', score: 5 },
    {
      Subject: 'Send a Card to a Friend Day #SendACardToAFriendDay',
      score: 5
    },
    { Subject: 'Oscar Nomination Announcement', score: 10 },
    { Subject: 'Boy Scout’s Day', score: 0 },
    { Subject: 'National Pizza Day', score: 20 },
    { Subject: 'Umbrella Day', score: 0 },
    { Subject: 'Make a Friend Day', score: 5 },
    { Subject: 'Lincoln’s Birthday', score: 0 },
    { Subject: 'Superbowl Sunday', score: 0 },
    { Subject: 'Valentine’s Day', score: 30 },
    { Subject: 'Susan B. Anthony’s Birthday', score: 0 },
    { Subject: 'Singles Awareness Day', score: 10 },
    { Subject: 'Random Acts of Kindness Day', score: 5 },
    { Subject: 'Drink Wine Day', score: 10 },
    { Subject: 'Love Your Pet Day', score: 5 },
    { Subject: 'Presidents Day', score: 0 },
    { Subject: 'Fat Tuesday/Mardi Gras', score: 0 },
    { Subject: 'Washington’s Birthday', score: 0 },
    { Subject: 'Margarita Day', score: 10 },
    { Subject: 'Walk Your Dog Day', score: 5 },
    { Subject: 'Ash Wednesday', score: 0 },
    { Subject: 'National Tortilla Chip Day', score: 10 }
  ]
   let final=a.map((item)=>{
    const match=score.find((thing)=>thing.Subject==item.Subject)
    return {
        Subject:item.Subject,
        description:item.description,
        Score:match.score
    }
})

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
fs.writeFile('new.json',JSON.stringify(final))
console.log(JSON.stringify(final));