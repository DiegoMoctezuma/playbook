const facebook = {
  user: "Rafael Moctezuma",
  userName: "RafaRM",
  followers: 567,
  following: 434,
  posts: 67,
  delatedPosts: 23,
  created: 2014,
  like: 2415,
  love: 3652,
  care: 1245,
  haha: 9765,
  wow: 2356,
  sad: 1723,
  angry: 3764,
  getTotalLikes: function () {
    return (
      this.like +
      this.love +
      this.care +
      this.haha +
      this.wow +
      this.sad +
      this.angry
    );
  },
  getTotalPosts: function () {
    return this.posts + this.delatedPosts;
  },
};

console.log(`Nombre de la cuenta: ${facebook.userName}`);
console.log(`Cuenta creada en: ${facebook.created}`);
console.log(
  `Numero de seguidores: ${facebook.followers}, Cuentas seguidas: ${facebook.following}`
);
console.log(`Likes totales: ${facebook.getTotalLikes()}`);
console.log(`Publicaciones totales: ${facebook.getTotalPosts()}`);
