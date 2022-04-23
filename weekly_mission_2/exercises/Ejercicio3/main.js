class RedSocial {
  constructor(nombre, usuario, edad) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.edad = edad;
  }
}

class Facebook extends RedSocial {
  constructor(nombre, usuario, edad) {
    super(nombre, usuario, edad);
    this.post = 0;
    this.followers = 0;
    this.following = 0;
  }

  set setPost(numero) {
    this.post = numero;
  }

  set setFollowers(numero) {
    this.followers = numero;
  }

  set setFollowing(numero) {
    this.following = numero;
  }
}

class GitHub extends RedSocial {
  constructor(nombre, usuario, edad) {
    super(nombre, usuario, edad);
    this.language = "";
    this.numberOfCommits = 0;
    this.stars = 0;
    this.forks = 0;
    this.issues_open = 0;
    this.issues_close = 0;
  }

  set setLanguage(nombre) {
    this.language = nombre;
  }

  set setNumbersOfCommits(numero) {
    this.numberOfCommits = numero;
  }

  set setStars(numero) {
    this.stars = numero;
  }

  set setForks(numero) {
    this.forks = numero;
  }

  set setIssues_open(numero) {
    this.issues_open = numero;
  }

  set setIssues_close(numero) {
    this.issues_close = numero;
  }

  get getTotalIssues() {
    return this.issues_open + this.issues_close;
  }
  get getGeneralInfo() {
    return `This repository ${this.name} was created by ${this.author}`;
  }
}

class Twitter extends RedSocial {
  constructor(nombre, usuario, edad) {
    super(nombre, usuario, edad);
    this.followers = 0;
    this.following = 0;
    this.tweets = 0;
    this.retweets = 0;
  }

  set setRetweets(numero) {
    this.retweets = numero;
  }

  set setTweets(numero) {
    this.tweets = numero;
  }

  set setFollowers(numero) {
    this.followers = numero;
  }

  set setFollowing(numero) {
    this.following = numero;
  }
}

class Uber extends RedSocial {
  constructor(nombre, usuario, edad) {
    super(nombre, usuario, edad);
    this.travels = 0;
    this.canceledTravels = 0;
  }

  set setTravels(numero) {
    this.travels = numero;
  }

  set setCanceledTravels(numero) {
    this.canceledTravels = numero;
  }

  get getTotalTrips() {
    return this.travels + this.canceledTravels;
  }
}
