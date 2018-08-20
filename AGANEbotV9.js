(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "zEjoxx";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = [''];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: 'GO AGANE bot',
        language: 'english',
        chatLink: 'https://rawgit.com/zEjoxx/custom/master/lang/eng.json',
        scriptLink: 'https://rawgit.com/basicBot/source/master/basicBot.js',
        roomLock: false, // Requires an extension to re-load the script
        startupCap: 200, // 1-200
        startupVolume: 4, // 0-100
        startupEmoji: true, // true or false
        autowoot: true,
        autoskip: false,
        smartSkip: true,
        cmdDeletion: true,
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        historySkip: true,
        timeGuard: true,
        strictTimeGuard: false,
        maximumSongLength: 8,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: false,
        thorCommand: false,
        thorCooldown: 10,
        skipPosition: null,
        skipReasons: [
            ['theme', 'This song does not fit the room theme. '],
            ['op', 'This song is overplayed. '],
            ['history', 'This song is in the history. Choose a different song. '],
            ['outro', 'You played an outro song, which is against the rules. '],
            ['quality', 'The song you played had bad sound quality or no sound. '],
            ['nsfw', 'The song you contained was NSFW (offensive or explicit. Image or sound). '],
            ['unavailable', 'The song you played was unavailable for some users. ']
            ['earrape', 'The song you played was earrape, it is not allowed. ']
        ],
        afkpositionCheck: 15,
        afkRankCheck: 'rdj',
        motdEnabled: false,
        motdInterval: 15,
        motd: 'If you´re new here, please take a moment to read the community rules to avoid getting banned.',
        filterChat: false,
        etaRestriction: false,
        welcome: false,
        opLink: null,
        rulesLink: 'https://bit.ly/2AZldps',
        themeLink: null,
        fbLink: null,
        youtubeLink: 'https://www.youtube.com/channel/UCmDTrq0LNgPodDOFZiSbsww',
        website: 'https://www.twitch.tv/xqcow',
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: '!',
        blacklists: {
            NSFW: 'https://rawgit.com/basicBot/custom/master/blacklists/NSFWlist.json',
            OP: 'https://rawgit.com/basicBot/custom/master/blacklists/OPlist.json',
            BANNED: 'https://rawgit.com/zEjoxx/custom/master/blacklists/BannedSongList.json',
            OUTRO: 'https://rawgit.com/zEjoxx/custom/master/blacklists/OutroSongs.json'
        }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);
