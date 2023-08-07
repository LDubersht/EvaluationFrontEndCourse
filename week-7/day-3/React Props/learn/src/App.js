import logo from './logo.svg';
import './App.css';
import Company from './Components/Company';
import Wardrobe from './Components/Wardrobe';


const upperName = name => name.toUpperCase()

const generateCompanyTags = (companies) => {
  let companyTags = []
  for (let c of companies) {
    companyTags.push(<Company name={c.name} revenue={c.revenue} />)
  }
  return companyTags
}

export function App() {
  let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }]

      let foods = [
        { name: "Cake" },
        { name: "Melon"},
        { name: "Tee"}]

  return (
      // generateCompanyTags(companies)
      // <div>
      //   {companies.map(c => <Company name={upperName(c.name)} revenue={c.revenue} />)}
      // </div>
      // <Company name={companies[0].name} revenue={companies[0].revenue} />
     <Wardrobe />

  )
}

export default App;
