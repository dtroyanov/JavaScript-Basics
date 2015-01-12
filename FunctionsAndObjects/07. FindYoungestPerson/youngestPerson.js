function findYoungestPerson(persons) {
    var youngest;
    var minAge = Number.MAX_VALUE;

    for (var i in persons) {
        if (persons[i].age < minAge) {
            youngest = persons[i].firstname + ' ' + persons[i].lastname;
            minAge = persons[i].age;
        }
    }
    console.log('The youngest person is ' + youngest);
}


findYoungestPerson([
  { firstname: 'George', lastname: 'Kolev', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'Baba', lastname: 'Ginka', age: 40 }]
);