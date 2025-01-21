// src/utils/peopleGenerator.js

const generateRandomEmail = () => {
    const names = ['john', 'jane', 'bob', 'alice', 'charlie', 'dave', 'eve']
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com']
    const name = names[Math.floor(Math.random() * names.length)]
    const domain = domains[Math.floor(Math.random() * domains.length)]
    return `${name}${Math.floor(Math.random() * 1000)}@${domain}`
  }
  
  const generateRandomName = () => {
    const firstNames = ['John', 'Jane', 'Robert', 'Mary', 'William', 'Elizabeth']
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia']
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`
  }
  
  const generatePeople = (count) => {
    const potatoes = Array.from({ length: count }, (_, i) => i + 1)
    
    for (let i = potatoes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [potatoes[i], potatoes[j]] = [potatoes[j], potatoes[i]]
    }
  
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      email: generateRandomEmail(),
      potatoes: potatoes[i],
      tags: ['Customers'],
      fullName: generateRandomName(),
      location: 'Lithuania'
    }))
  }
  
  export { generatePeople }