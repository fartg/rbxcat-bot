<h1 align="center"> rbxcat-bot: </h1>
<h2 align="center">Discord integration to your rbxcat-server instance!</h2>

![logo](https://i.imgur.com/7VPmqik.png)

<h1 align="center"> Introduction </h1>
Let's say you already have spun up an instance of rbxcat-server and you want to connect it to a discord bot for ease of access. Well, think no longer, for rbxcat-bot is here to save the day!



This bot comes with a few preconfigured commands, but let's be honest, if you're hosting rbxcat-server yourself, you already know how to do most things in it.


This bot will allow you to interface directly to your rbxcat-server webserver, enabling Roblox's OpenCloudMessaging api to be used from the comfort of your favorite developer-only discord server.

Want to find out what server your friend is in (in your game)?

`/findplayer player:"watchconnector"` (thanks Leah!) will do the trick.

Want to see the statistics of one, or all, of your game servers?

`/server rbx_ocm_apikey:"obby_wallrun" server:"all"`

Want to send a message to a certain server with a certain someone in it?

`/sendmessage rbx_ocm_apikey:"obby_megarainbow" server:"server-id-here" message:"Leah please take me back!"`

The possibilities are as large as your imagination (and your programming skills)!

<h1 align="center"> Media </h1>

https://github.com/fartg/rbxcat-bot/assets/70608092/8d96aa01-06ae-4c42-8642-07f83f5dea8d


<h1 align="center"> Installation </h1>
To install and serve rbxcat-bot, you will need to meet a few prereqs.

1. Installed [node.js and npm](https://nodejs.org/en/download).
2. Installed [the latest release](https://github.com/fartg/rbxcat-bot/releases) of rbxcat-bot.
3. Successfully deployed your own instance of [rbxcat-server](https://github.com/lostmedia/rbxcat-server).

Meet all 3 of those criteria? Perfect! Let's install.

To install via git, simply do:
```bash
git clone https://github.com/fartg/rbxcat-bot.git
```
inside of your directory, and install our dependencies via:
```node
npm install package.json
```

Running "npm install package.json" SHOULD install all of our dependencies automagically, but if not please install all the dependencies located in our package.json file.

<h1 align="center"> Setup </h1>
By now, everyone should know how to set up a discord.js bot. If you don't, that's no problem. Here we're going to outline how to go from no bot user to fully running rbxcat-bot instance.


# Set up a developer application on Discord.com
1. Head to [this](https://discord.com/developers/applications) link. (https://discord.com/developers/applications)
2. Click "New Application" on the top right.
3. Give it a name. I named mine catbot_dev, but you can choose your own.
4. Click the Bot button on the left of the page that it redirected you to.
5. Click "Reset Token" in the middle of your screen and make sure to write down what it populates with. (We'll need it later)
6. Give it a profile picture. (I chose a cute fish.)

# Configure .env variables
1. Create a new file in your projects main directory (where main.js & register-commands.js are)
2. Name it ".env"
3. Configure it as the following:
```
token="your_bot_token_here"
client_id="your_bots_client_id"
guild_id="server_where_the_bot_goes"
```
( make sure to change the values to what yours are!);

# Configure config.json inside of commands/webserver
1. Rename config-example.json to config.json
2. Change the webserver to your currently hosted rbxcat-server site.
3. Change your auth token to your self supplied auth token (from rbxcat-server).
4. Save the file.

# Serve the bot
1. If you followed all of the steps correctly, you should have a fully finished bot ready to be hosted!
2. Right click your bots file directory and "Open in Terminal".
3. Serve via `node main.js`
4. Profit!
