let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
const firstCompany = companies[0]
console.log(firstCompany) // prints "Tesla"
companies.push("Blizzard Entertainment")
let employees = []
employees.push(...companies)
employees.push(companies[0], companies[1], companies[2])
console.log(companies)
companies.splice(1, 1)
console.log(companies)

const animalCounts = {
    lion: 2,
    zebra: 11,
    ostrich: 1,
    tortoise: 4
  }
  
  //Suddenly the zoo acquired two dozen eagles
  
  animalCounts.eagle = 24
  //or
  //animalCounts["eagle"] = 24

  console.log(animalCounts)