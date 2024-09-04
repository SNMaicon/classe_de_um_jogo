class hero{
  constructor (name, age, type){
    this.name = name
    this.age = age
    this.type = type
  }

  toAttack (){
    let attack

    switch (this.type) {
      case "Mago":
        attack = "magia"
      break;

      case "Guerreiro":
        attack = "espada"
      break;

      case "Monge":
        attack = "artes marcias"
      break;

      case "Ninja":
        attack = "shuriken"
      break;      
    }

    console.log(`O ${this.type} ${this.name}, atacou usando ${attack}!`)

  }
}

const hero1 = new hero("Blainoc", 82, "Mago")
const hero2 = new hero("Darius", 40, "Guerreiro")
const hero3 = new hero("Lun", 28, "Ninja")
const hero4 = new hero("Nie-li", 82, "Monge")

hero1.toAttack()
hero2.toAttack()
hero3.toAttack()
hero4.toAttack()