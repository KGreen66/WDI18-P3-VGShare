const User = require('../models/User')
const Media = require('../models/Media')
const Game = require('../models/Game')
const mongoose = require('./connections')

const rocketLeague = new Game({
    title: 'Rocket League',
    description: 'Play soccar, basketball, hockey, and more game modes, all while controlling a rocket powered car',
    typeOfGame: 'Competitive, Sports',
    media: []
})

const overwatch = new Game({
    title: 'Overwatch',
    description: 'In a time of global crisis, an international task force of heroes banded together to restore peace to a war-torn world: OVERWATCH. It ended the crisis and helped to maintain peace in the decades that followed, inspiring an era of exploration, innovation, and discovery.',
    typeOfGame: 'Competitive, First-Person Shooter',
    media: []
})

const rocketLeagueClip = new Media({
    title: 'Rocket League Compilation',
    url: 'https://www.youtube.com/watch?v=bvkvGOM4Wcs',
    description: 'compilation of goals and saves I made in Rocket League, compiled from games before March 2017',
    creator: [],
    game: [rocketLeague]
})

const owClip = new Media({
    title: 'Overwatch Clip',
    url: 'https://www.youtube.com/watch?v=o6XPZa6qrEg',
    description: 'short clip of me playing OW',
    creator: [],
    game: [overwatch]
})

const keith = new User({
    gamertag: 'Sleepysliders13',
    name: 'Keith Green',
    info: 'Plays video games',
    media: [rocketLeagueClip, owClip],
    games: [rocketLeague, overwatch],
    password: 'wincup17'
})

Media.remove({})
Game.remove({})
User.remove({})
    .then(() => Media.insertMany(rocketLeagueClip, owClip))
    .then(() => Game.insertMany(overwatch, rocketLeague))
    .then(() => keith.save())
    .then(() => rocketLeague.media.push(rocketLeagueClip))
    .then(() => rocketLeague.save())
    .then(() => overwatch.media.push(owClip))
    .then(() => overwatch.save())
    .then(() => rocketLeagueClip.creator.push(keith))
    .then(() => rocketLeagueClip.save())
    .then(() => owClip.creator.push(keith))
    .then(() => owClip.save())
    .then(() => console.log('SUCCESSFUL SAVE!!!'))
    .then(() => mongoose.connection.close())