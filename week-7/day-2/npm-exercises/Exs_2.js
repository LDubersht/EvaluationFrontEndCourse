const { faker } = require('@faker-js/faker');

const createRandomUser = function() {
    return {
      username: faker.person.fullName(),
      avatar: faker.image.url({ width: 128, height: 128 }),
      companyname: faker.company.name(),
    };
  }

  const createUsers = (numUsers = 1) => {
    return new Array(numUsers)
      .fill(undefined)
      .map(createRandomUser);
  }
  
  
  let fakeUsers = createUsers(5)
  console.log(fakeUsers)