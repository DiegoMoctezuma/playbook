const twitter = {
  user: "Rafael Moctezuma",
  userName: "RafaMz",
  followers: 247,
  following: 614,
  tweets: 27,
  retweets: 43,
  created: 2022,
  getTotaltweets: function () {
    return this.tweets + this.retweets;
  },
};

console.log(`Nombre de la cuenta: ${twitter.userName}`);
console.log(`Cuenta creada en: ${twitter.created}`);
console.log(
  `Numero de seguidores: ${twitter.followers}, Cuentas seguidas: ${twitter.following}`
);
console.log(`Tweets y Retweets totales: ${twitter.getTotaltweets()}`);
