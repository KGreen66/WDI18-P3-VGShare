const User = require('../models/User')
const Media = require('../models/Media')
const Friends = require('../models/Friends')
const Message = require('../models/Messages')
const Game = require('../models/Game')
const mongoose = require('./connections')

const rl = new Game({
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

const rdr2 = new Game({
    title: 'Red Dead Redemption 2',
    description: '',
    typeOfGame: 'Action, RPG',
    media: []
})

const pubg = new Game({
    title: "PlayerUknown's Battlegrounds",
    description: '',
    typeOfGame: 'Battle-Royale, First-Person Shooter',
    media: []
})

const minecraft = new Game({
    title: 'Minecraft',
    description: '',
    typeOfGame: 'World-builder',
    media: []
})

const rocketLeagueClip = new Media({
    title: 'Rocket League Compilation 1',
    url: 'https://xboxdvr.com/gamer/sleepysliders13/video/63773213',
    description: 'compilation of goals and saves I made in Rocket League, compiled from games before March 2017',
    user: [],
    game: [rl]
})

const keith = new User({
    gamertag: 'Sleepysliders13',
    name: 'Keith Green',
    info: 'Plays video games',
    media: [rocketLeagueClip]
})

const jack = new User({
    gamertag: 'Jack from CA',
    name: "Jack Seaton",
    info: 'Back-end web developer from california, currently residing in Boise',
    media: []
})

const bubba = new User({
    gamertag: 'Kjintroverted',
    name: 'Williamrobert Green',
    info: '',
    media: []
})

Media.remove({})
User.remove({})
Game.remove({})
    .then(() => console.log('SUCCESSFUL SAVE!!!'))
    .then(() => mongoose.connection.close())