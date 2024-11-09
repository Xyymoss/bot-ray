const { Client, GatewayIntentBits } = require("discord.js");

// Token bot Anda
const token =
  "MTMwNDYxNjQ3NjQxMzY1NzE1OQ.GyeOTG.Ns2p_ZecI4MJGnvy5kFOOsst5GL0PNobZIQzkY"; // Gantilah ini dengan token bot Anda

// Inisialisasi client dengan intent yang diperlukan
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Event ketika bot berhasil login
client.once("ready", () => {
  console.log("Bot telah online!");
});

// Event untuk menangani pesan masuk
client.on("messageCreate", (message) => {
  // Pastikan bot tidak merespon dirinya sendiri
  if (message.author.bot) return;

  // Autorespon untuk pesan tertentu
  const content = message.content.toLowerCase();
  if (content.includes("anjing")) {
    message.reply(
      "<:hillary_abigail:1304710942163992616> : no no ngomong kasar mylofly!!"
    );
  } else if (content.includes("cara verif")) {
    message.reply(
      "<:mutiara_azzahra:1304710973319417877> : niiih https://discordapp.com/channels/941972748157206528/1287342767403569162"
    );
  } else if (content.includes("hai")) {
    message.reply(
      "<:fiony_alveria:1304710926292877414> : Hai jugaaa kaaak !!!!"
    );
  } else if (content.includes("admin")) {
    message.reply(
      "<:mutiara_azzahra:1304710973319417877> : Sebentaar yaaahh!! aku panggilin"
    );
  }
});

// Login ke Discord dengan token bot
client.login(token).catch((err) => {
  console.error("Gagal login:", err);
});
