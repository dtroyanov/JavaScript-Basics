function soothsayer(numsArr, langsArr, citiesArr, carsArr) {
    var result = [numsArr[Math.floor(Math.random() * 5)], langsArr[Math.floor(Math.random() * 5)], citiesArr[Math.floor(Math.random() * 5)], carsArr[Math.floor(Math.random() * 5)]]
    console.log("You will work " + result[0] + " years on " + result[1] + ". You will live in " + result[2] + " and drive " + result[3] + ".");
}

soothsayer([3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'], ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'], ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']);