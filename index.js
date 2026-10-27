function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


const gameInstance = gameObject()

function playerStats(playerName){    
    let playerfound 

    playerfound = Object.keys(gameInstance.home.players).find(key => key === playerName)
    if (typeof(playerfound) === "string"){
        return gameInstance.home.players[playerName]
    }
    playerfound = Object.keys(gameInstance.away.players).find(key => key === playerName)
    if (typeof(playerfound) === "string"){
        return gameInstance.away.players[playerName]
    }else{
        return "Not Found"
    }
}

function numPointsScored(playerName){
    const playerObject = playerStats(playerName)

    if (playerObject === "Not Found") {
        return "Player not Found"
    } else {
        return playerObject.points
    }
}

function shoeSize(playerName){
    const playerObject = playerStats(playerName)

    if (playerObject === "Not Found") {
        return "Player not Found"
    } else {
        return playerObject.shoe
    }    
}

function teamColors(teamName){
    // for...in returns each key individually during each iteration
    for (let team in gameInstance){
        if (gameInstance[team]["teamName"] === teamName){
            return gameInstance[team].colors
        }
    }
    return "Team not Found"    
}

function teamNames(){
    let teamNamesList = []

    // Let's use object.values
    for (let team of Object.values(gameInstance)){
        teamNamesList.push(team.teamName)
    }
    if (teamNamesList.length === 0){
        return "No teams!"
    }else{
        return teamNamesList
    }
}

function playerNumbers(teamName){
    let numberList = []

    for (let team of Object.values(gameInstance)){
        if (team.teamName === teamName){
            for (let player of Object.values(team.players)){
                numberList.push(player.number)
            }
        return numberList
        }
    }
    return "Team not Found"    
}

function bigShoeRebounds(){
    let players = Object.values(gameInstance.home.players)
    players.concat(Object.values(gameInstance.away.players))
    players.sort((a, b) => b.shoe - a.shoe)
    
    return players[0].rebounds
}

bigShoeRebounds()

