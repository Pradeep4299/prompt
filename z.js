let scoreData=[
    { Subject: 'Weight Loss Awareness Month', score: 10 },
    { Subject: 'National Blood Donor Month', score: 20 },
    { Subject: 'National Thank You Month', score: 30 },
    { Subject: 'National Hobby Month', score: 40 },
    { Subject: 'National Tea Month', score: 50 },
    { Subject: 'Girl Scout Cookie Season Begins', score: 60 },
    { Subject: 'Diet Resolution Week', score: 70 },
    { Subject: 'Hunt For Happiness Week', score: 80 },
    { Subject: 'Clean Out Your Inbox Week', score: 90 },
    { Subject: 'National School Choice Week', score: 100 },
    { Subject: 'Meat Week', score: 10 },
    { Subject: 'New Year’s Day', score: 20 },
    { Subject: 'National Hangover Day', score: 30 },
    { Subject: 'Outback Bowl', score: 40 },
    { Subject: 'Rose Bowl', score: 50 },
    { Subject: 'NHL Winter Classic', score: 60 },
    { Subject: 'Science Fiction Day', score: 70 },
    { Subject: 'Festival of Sleep Day', score: 80 },
    { Subject: 'Trivia Day', score: 90 },
    { Subject: 'National Bird Day', score: 100 },
    { Subject: 'PGA Tournament of Champions', score: 0 },
    { Subject: 'National Bean Day', score: 0 },
    { Subject: 'Cuddle Up Day', score: 0 },
    { Subject: 'Elvis’s Birthday', score: 0 },
    { Subject: 'Golden Globes', score: 0 },
    { Subject: 'National Bittersweet Chocolate Day', score: 0 },
    { Subject: 'Houseplant Appreciation Day', score: 0 },
    {Subject: 'College Football Playoff National Championship',score: 0},
    { Subject: 'National Clean Off Your Desk Day', score: 0 },
    { Subject: 'National Human Trafficking Awareness Day', score: 0 },
    { Subject: 'National Take the Stairs Day', score: 0 },
    { Subject: 'National Sticker Day', score: 0 },
    { Subject: 'Dress Up Your Pet Day', score: 0 },
    { Subject: 'National Hat Day', score: 0 },
    { Subject: 'Ditch New Year’s Resolutions Day', score: 0 },
    { Subject: 'Martin Luther King, Jr. Day', score: 0 },
    { Subject: 'Winnie the Pooh Day (Author A.A. Milne’s birthday)',score: 0},
    { Subject: 'National Popcorn Day', score: 0 },
    { Subject: 'Get To Know Your Customer’s Day', score: 0 },
    { Subject: 'Penguin Awareness Day', score: 0 },
    { Subject: 'National Cheese Lover’s Day', score: 80 },
    { Subject: 'Sundance Film Festival begins', score: 40 },
    { Subject: 'National Hugging Day', score: 60 },
    { Subject: 'Chinese New Year', score: 70 },
    { Subject: 'National Pie Day', score: 90 },
    { Subject: 'Community Manager Appreciation Day #CMAD', score: 50 },
    { Subject: 'Compliment Day', score: 70 },
    { Subject: 'National Peanut Butter Day', score: 80 },
    { Subject: 'Opposite Day', score: 30 },
    { Subject: 'Spouse’s Day', score: 40 },
    { Subject: 'Chocolate Cake Day', score: 90 },
    { Subject: 'Data Privacy Day', score: 50 },
    { Subject: 'Fun at Work Day', score: 60 },
    { Subject: 'Winter X Games', score: 30 },
    { Subject: 'National Puzzle Day', score: 70 },
    { Subject: 'Backward Day', score: 30 },
    { Subject: 'Black History Month', score: 40 },
    { Subject: 'American Heart Month', score: 40 },
    { Subject: 'National Heart Month', score: 40 },
    { Subject: 'National Weddings Month', score: 50 },
    { Subject: 'National Cherry Month', score: 75 },
    { Subject: 'Eating Disorder Awareness Week', score: 20 },
    { Subject: 'New York Fashion Week', score: 95 },
    { Subject: 'Freelance Writers Appreciation Week', score: 40 },
    { Subject: 'Condom Week', score: 10 },
    { Subject: 'Random Acts of Kindness Week', score: 80 },
    { Subject: 'International Flirting Week', score: 15 },
    { Subject: 'Milan Fashion Week', score: 95 },
    { Subject: 'London Fashion Week', score: 95 },
    { Subject: 'Paris Fashion Week', score: 95 },
    { Subject: 'National Freedom Day', score: 50 },
    { Subject: 'Groundhog Day', score: 30 },
    { Subject: 'Bubble Gum Day', score: 60 },
    { Subject: 'World Cancer Day', score: 60 },
    { Subject: 'Give Kids a Smile Day', score: 70 },
    { Subject: "Grammy's", score: 30 },
    { Subject: 'World Nutella Day', score: 40 },
    { Subject: 'National Weatherperson’s Day', score: 40 },
    { Subject: 'National Chopsticks Day', score: 60 },
    {Subject: 'Send a Card to a Friend Day #SendACardToAFriendDay',score: 80},
    { Subject: 'Oscar Nomination Announcement', score: 0 },
    { Subject: 'Boy Scout’s Day', score: 0 },
    { Subject: 'National Pizza Day', score: 80 },
    { Subject: 'Umbrella Day', score: 10 },
    { Subject: 'Make a Friend Day', score: 60 },
    { Subject: 'Lincoln’s Birthday', score: 0 },
    { Subject: 'Superbowl Sunday', score: 20 },
    { Subject: 'Valentine’s Day', score: 70 },
    { Subject: 'Susan B. Anthony’s Birthday', score: 0 },
    { Subject: 'Singles Awareness Day', score: 50 },
    { Subject: 'Random Acts of Kindness Day', score: 70 },
    { Subject: 'Drink Wine Day', score: 50 },
    { Subject: 'Love Your Pet Day', score: 90 },
    { Subject: 'Presidents Day', score: 0 },
    { Subject: 'Fat Tuesday/Mardi Gras', score: 30 },
    { Subject: 'Washington’s Birthday', score: 0 },
    { Subject: 'Margarita Day', score: 20 },
    { Subject: 'Walk Your Dog Day', score: 90 },
    { Subject: 'Ash Wednesday', score: 0 },
    { Subject: 'National Tortilla Chip Day', score: 80 },
  ]

  let eventsList=[
    {
      id: 1,
      Subject: 'Weight Loss Awareness Month',
      StartDate: '2023-01-01T05:00:00.000Z'
    },
    {
      id: 2,
      Subject: 'National Blood Donor Month',
      StartDate: '2023-01-01T05:00:00.000Z'
    },
    {
      id: 3,
      Subject: 'National Thank You Month',
      StartDate: '2023-01-01T05:00:00.000Z'
    },
    {
      id: 4,
      Subject: 'National Hobby Month',
      StartDate: '2023-01-01T05:00:00.000Z'
    },
    {
      id: 5,
      Subject: 'National Tea Month',
      StartDate: '2023-01-01T05:00:00.000Z'
    },
    {
      id: 6,
      Subject: 'Girl Scout Cookie Season Begins',
      StartDate: '2023-01-01T05:00:00.000Z'
    },
    {
      id: 7,
      Subject: 'Diet Resolution Week',
      StartDate: '2023-01-02T05:00:00.000Z'
    },
    {
      id: 8,
      Subject: 'Hunt For Happiness Week',
      StartDate: '2023-01-16T05:00:00.000Z'
    },
    {
      id: 9,
      Subject: 'Clean Out Your Inbox Week',
      StartDate: '2023-01-23T05:00:00.000Z'
    },
    {
      id: 10,
      Subject: 'National School Choice Week',
      StartDate: '2023-01-23T05:00:00.000Z'
    },
    {
      id: 11,
      Subject: 'Meat Week',
      StartDate: '2023-01-29T05:00:00.000Z'
    },
    {
      id: 12,
      Subject: 'New Year’s Day',
      StartDate: '2023-01-01T05:00:00.000Z'
    },
    {
      id: 13,
      Subject: 'National Hangover Day',
      StartDate: '2023-01-01T05:00:00.000Z'
    },
    {
      id: 14,
      Subject: 'Outback Bowl',
      StartDate: '2023-01-01T05:00:00.000Z'
    },
    {
      id: 15,
      Subject: 'Rose Bowl',
      StartDate: '2023-01-01T05:00:00.000Z'
    },
    {
      id: 16,
      Subject: 'NHL Winter Classic',
      StartDate: '2023-01-01T05:00:00.000Z'
    },
    {
      id: 17,
      Subject: 'Science Fiction Day',
      StartDate: '2023-01-02T05:00:00.000Z'
    },
    {
      id: 18,
      Subject: 'Festival of Sleep Day',
      StartDate: '2023-01-03T05:00:00.000Z'
    },
    {
      id: 19,
      Subject: 'Trivia Day',
      StartDate: '2023-01-04T05:00:00.000Z'
    },
    {
      id: 20,
      Subject: 'National Bird Day',
      StartDate: '2023-01-05T05:00:00.000Z'
    },
    {
      id: 21,
      Subject: 'PGA Tournament of Champions',
      StartDate: '2023-01-05T05:00:00.000Z'
    },
    {
      id: 22,
      Subject: 'National Bean Day',
      StartDate: '2023-01-06T05:00:00.000Z'
    },
    {
      id: 23,
      Subject: 'Cuddle Up Day',
      StartDate: '2023-01-06T05:00:00.000Z'
    },
    {
      id: 24,
      Subject: 'Elvis’s Birthday',
      StartDate: '2023-01-08T05:00:00.000Z'
    },
    {
      id: 25,
      Subject: 'Golden Globes',
      StartDate: '2023-01-09T05:00:00.000Z'
    },
    {
      id: 26,
      Subject: 'National Bittersweet Chocolate Day',
      StartDate: '2023-01-10T05:00:00.000Z'
    },
    {
      id: 27,
      Subject: 'Houseplant Appreciation Day',
      StartDate: '2023-01-10T05:00:00.000Z'
    },
    {
      id: 28,
      Subject: 'College Football Playoff National Championship',
      StartDate: '2023-01-10T05:00:00.000Z'
    },
    {
      id: 29,
      Subject: 'National Clean Off Your Desk Day',
      StartDate: '2023-01-10T05:00:00.000Z'
    },
    {
      id: 30,
      Subject: 'National Human Trafficking Awareness Day',
      StartDate: '2023-01-11T05:00:00.000Z'
    },
    {
      id: 31,
      Subject: 'National Take the Stairs Day',
      StartDate: '2023-01-12T05:00:00.000Z'
    },
    {
      id: 32,
      Subject: 'National Sticker Day',
      StartDate: '2023-01-13T05:00:00.000Z'
    },
    {
      id: 33,
      Subject: 'Dress Up Your Pet Day',
      StartDate: '2023-01-14T05:00:00.000Z'
    },
    {
      id: 34,
      Subject: 'National Hat Day',
      StartDate: '2023-01-15T05:00:00.000Z'
    },
    {
      id: 35,
      Subject: 'Ditch New Year’s Resolutions Day',
      StartDate: '2023-01-17T05:00:00.000Z'
    },
    {
      id: 36,
      Subject: 'Martin Luther King, Jr. Day',
      StartDate: '2023-01-17T05:00:00.000Z'
    },
    {
      id: 37,
      Subject: 'Winnie the Pooh Day (Author A.A. Milne’s birthday)',
      StartDate: '2023-01-18T05:00:00.000Z'
    },
    {
      id: 38,
      Subject: 'National Popcorn Day',
      StartDate: '2023-01-19T05:00:00.000Z'
    },
    {
      id: 39,
      Subject: 'Get To Know Your Customer’s Day',
      StartDate: '2023-01-20T05:00:00.000Z'
    },
    {
      id: 40,
      Subject: 'Penguin Awareness Day',
      StartDate: '2023-01-20T05:00:00.000Z'
    },
    {
      id: 41,
      Subject: 'National Cheese Lover’s Day',
      StartDate: '2023-01-20T05:00:00.000Z'
    },
    {
      id: 42,
      Subject: 'Sundance Film Festival begins',
      StartDate: '2023-01-20T05:00:00.000Z'
    },
    {
      id: 43,
      Subject: 'National Hugging Day',
      StartDate: '2023-01-21T05:00:00.000Z'
    },
    {
      id: 44,
      Subject: 'Chinese New Year',
      StartDate: '2023-01-02T05:00:00.000Z'
    },
    {
      id: 45,
      Subject: 'National Pie Day',
      StartDate: '2023-01-23T05:00:00.000Z'
    },
    {
      id: 46,
      Subject: 'Community Manager Appreciation Day #CMAD',
      StartDate: '2023-01-24T05:00:00.000Z'
    },
    {
      id: 47,
      Subject: 'Compliment Day',
      StartDate: '2023-01-24T05:00:00.000Z'
    },
    {
      id: 48,
      Subject: 'National Peanut Butter Day',
      StartDate: '2023-01-24T05:00:00.000Z'
    },
    {
      id: 49,
      Subject: 'Opposite Day',
      StartDate: '2023-01-25T05:00:00.000Z'
    },
    {
      id: 50,
      Subject: 'Spouse’s Day',
      StartDate: '2023-01-26T05:00:00.000Z'
    },
    {
      id: 51,
      Subject: 'Chocolate Cake Day',
      StartDate: '2023-01-27T05:00:00.000Z'
    },
    {
      id: 52,
      Subject: 'Data Privacy Day',
      StartDate: '2023-01-28T05:00:00.000Z'
    },
    {
      id: 53,
      Subject: 'Fun at Work Day',
      StartDate: '2023-01-28T05:00:00.000Z'
    },
    {
      id: 54,
      Subject: 'Winter X Games',
      StartDate: '2023-01-27T05:00:00.000Z'
    },
    {
      id: 55,
      Subject: 'National Puzzle Day',
      StartDate: '2023-01-29T05:00:00.000Z'
    },
    {
      id: 56,
      Subject: 'Backward Day',
      StartDate: '2023-01-31T05:00:00.000Z'
    },
    {
      id: 57,
      Subject: 'Black History Month',
      StartDate: '2023-02-01T05:00:00.000Z'
    },
    {
      id: 58,
      Subject: 'American Heart Month',
      StartDate: '2023-02-01T05:00:00.000Z'
    },
    {
      id: 59,
      Subject: 'National Heart Month',
      StartDate: '2023-02-01T05:00:00.000Z'
    },
    {
      id: 60,
      Subject: 'National Weddings Month',
      StartDate: '2023-02-01T05:00:00.000Z'
    },
    {
      id: 61,
      Subject: 'National Cherry Month',
      StartDate: '2023-02-01T05:00:00.000Z'
    },
    {
      id: 62,
      Subject: 'Eating Disorder Awareness Week',
      StartDate: '2023-02-07T05:00:00.000Z'
    },
    {
      id: 63,
      Subject: 'New York Fashion Week',
      StartDate: '2023-02-09T05:00:00.000Z'
    },
    {
      id: 64,
      Subject: 'Freelance Writers Appreciation Week',
      StartDate: '2023-02-12T05:00:00.000Z'
    },
    {
      id: 65,
      Subject: 'Condom Week',
      StartDate: '2023-02-14T05:00:00.000Z'
    },
    {
      id: 66,
      Subject: 'Random Acts of Kindness Week',
      StartDate: '2023-02-14T05:00:00.000Z'
    },
    {
      id: 67,
      Subject: 'International Flirting Week',
      StartDate: '2023-02-12T05:00:00.000Z'
    },
    {
      id: 68,
      Subject: 'Milan Fashion Week',
      StartDate: '2023-02-07T05:00:00.000Z'
    },
    {
      id: 69,
      Subject: 'London Fashion Week',
      StartDate: '2023-02-07T05:00:00.000Z'
    },
    {
      id: 70,
      Subject: 'Paris Fashion Week',
      StartDate: '2023-02-07T05:00:00.000Z'
    },
    {
      id: 71,
      Subject: 'National Freedom Day',
      StartDate: '2023-02-01T05:00:00.000Z'
    },
    {
      id: 72,
      Subject: 'Groundhog Day',
      StartDate: '2023-02-02T05:00:00.000Z'
    },
    {
      id: 73,
      Subject: 'Bubble Gum Day',
      StartDate: '2023-02-04T05:00:00.000Z'
    },
    {
      id: 74,
      Subject: 'World Cancer Day',
      StartDate: '2023-02-04T05:00:00.000Z'
    },
    {
      id: 75,
      Subject: 'Give Kids a Smile Day',
      StartDate: '2023-02-04T05:00:00.000Z'
    },
    {
      id: 76,
      Subject: "Grammy's",
      StartDate: '2023-02-05T05:00:00.000Z'
    },
    {
      id: 77,
      Subject: 'World Nutella Day',
      StartDate: '2023-02-05T05:00:00.000Z'
    },
    {
      id: 78,
      Subject: 'National Weatherperson’s Day',
      StartDate: '2023-02-05T05:00:00.000Z'
    },
    {
      id: 79,
      Subject: 'National Chopsticks Day',
      StartDate: '2023-02-06T05:00:00.000Z'
    },
    {
      id: 80,
      Subject: 'Send a Card to a Friend Day #SendACardToAFriendDay',
      StartDate: '2023-02-07T05:00:00.000Z'
    },
    {
      id: 81,
      Subject: 'Oscar Nomination Announcement',
      StartDate: '2023-02-08T05:00:00.000Z'
    },
    {
      id: 82,
      Subject: 'Boy Scout’s Day',
      StartDate: '2023-02-08T05:00:00.000Z'
    },
    {
      id: 83,
      Subject: 'National Pizza Day',
      StartDate: '2023-02-09T05:00:00.000Z'
    },
    {
      id: 84,
      Subject: 'Umbrella Day',
      StartDate: '2023-02-10T05:00:00.000Z'
    },
    {
      id: 85,
      Subject: 'Make a Friend Day',
      StartDate: '2023-02-11T05:00:00.000Z'
    },
    {
      id: 86,
      Subject: 'Lincoln’s Birthday',
      StartDate: '2023-02-12T05:00:00.000Z'
    },
    {
      id: 87,
      Subject: 'Superbowl Sunday',
      StartDate: '2023-02-12T05:00:00.000Z'
    },
    {
      id: 88,
      Subject: 'Valentine’s Day',
      StartDate: '2023-02-14T05:00:00.000Z'
    },
    {
      id: 89,
      Subject: 'Susan B. Anthony’s Birthday',
      StartDate: '2023-02-15T05:00:00.000Z'
    },
    {
      id: 90,
      Subject: 'Singles Awareness Day',
      StartDate: '2023-02-15T05:00:00.000Z'
    },
    {
      id: 91,
      Subject: 'Random Acts of Kindness Day',
      StartDate: '2023-02-17T05:00:00.000Z'
    },
    {
      id: 92,
      Subject: 'Drink Wine Day',
      StartDate: '2023-02-18T05:00:00.000Z'
    },
    {
      id: 93,
      Subject: 'Love Your Pet Day',
      StartDate: '2023-02-20T05:00:00.000Z'
    },
    {
      id: 94,
      Subject: 'Presidents Day',
      StartDate: '2023-02-20T05:00:00.000Z'
    },
    {
      id: 95,
      Subject: 'Fat Tuesday/Mardi Gras',
      StartDate: '2023-02-21T05:00:00.000Z'
    },
    {
      id: 96,
      Subject: 'Washington’s Birthday',
      StartDate: '2023-02-22T05:00:00.000Z'
    },
    {
      id: 97,
      Subject: 'Margarita Day',
      StartDate: '2023-02-22T05:00:00.000Z'
    },
    {
      id: 98,
      Subject: 'Walk Your Dog Day',
      StartDate: '2023-02-22T05:00:00.000Z'
    },
    {
      id: 99,
      Subject: 'Ash Wednesday',
      StartDate: '2023-03-02T05:00:00.000Z'
    },
    {
      id: 100,
      Subject: 'National Tortilla Chip Day',
      StartDate: '2023-02-24T05:00:00.000Z'
    }]

    let final=scoreData.map((item)=>{
        const match=eventsList.find((thing)=>thing.Subject==item.Subject)
        return {
            id:match.id,
            subject:item.Subject,
            score:item.score
        }
    })

    console.log(final);