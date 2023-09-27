'use a srict'

let tueur = "Jason"
let pv = 100
let decompteSurvivant =5


let clichés = [blonde,sportif,nerd,intello,populaire,squatteur,emo,gothique]


  class survivant {
    // Le constructeur initialise les attributs du personnage lors de sa création
    constructor(nom, probMourir, probDegat, probMortDegat) { //définir l'objet et les paramètres
      this.nom = nom
    this.probMourir = probMourir
    this.probDegat = probDegat
    this.probMortDegat = probMortDegat
  }}

  let = new survivant(blonde,0.3,0.2,0.6) // décrire chaque comportements des victimes et paramètrese
  let = new survivant(sportif,0.1,0.4,0.5)
  let = new survivant(nerd,0.3,0.,0.5)
  let = new survivant(intello,0.2,0.5,0.3)
  let = new survivant(populaire,0.5,0.4,0.1)
  let = new survivant(squatteur,0.6,0.2,0.2)
  let = new survivant(emo,0.4,0.2,0.4)
  let = new survivant(gothique,0.1,0.6,0.3)

  function attaquer(victime) {
    if (math.random()<this.probDegat ){ //attaque réussi 
      console.log(`${this.nom} esquive Jordan et inflige 10 point de dégats`);//partage de message de réussite 
      pv =-10

    }else if
      (math.random()<this.probMortDegat){ //attaque pas réussie donc on essaye de mourrir avec des dégats
        console.log(`Malheureusement ${this.nom} nous quitte mais il a réussi à infliger 15 points de dégats à Jordan`);
        pv =-15
        decompteSurvivant--

      }else{
        console.log(`${this.nom} nous a quitté, RIP`);
        decompteSurvivant--
      }
    }

      const cible = Math.floor(math.random() * 6)+1;

      while (decompteSurvivant>0) {//tous les combats
        const combat = attaquer
        console.log("Il reste "+pv+ " à Jordan !"); //annoncer la vie restante de jordan
      }

      console.log(); //je ne sais pas comment afficher les morts mais peut-être faire un tableau et les morts se rajoute un par un quand ils meurent

      //je ne sais pas pourquoi mais le programme n'a pas tourné