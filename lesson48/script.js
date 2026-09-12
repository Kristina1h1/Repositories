console.log("Клиент: хочу получить список пользователей");
console.log("...");
 
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Сервер: запрашиваю список пользователей в БД");
        console.log("...");
        resolve();
    }, 1000)
})
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                let users = [
                    {uid: 'id1', name: 'Igor'},
                    {uid: 'id2', name: 'Irina'},
                ]
                console.log("БД: формирую список пользователей", users);
                console.log("...");
                resolve(users);
            }, 500);
        })
    })
    .then(function (dbUsers) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("Сервер: трансформирую данные для клиента");
                console.log("...");
                let users = dbUsers.map(function(user){
                    return {
                        id: user.uid,
                        firstName: user.name,
                        timestamp: Date.now()
                    }
                })
                resolve(users);
            }, 500);
        })
    })
    .then(function (users) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("Клиент: получил данные и отображаю их", users);
                resolve();
            }, 1000);
        })
    })
    .catch(function(error){
        console.log(error);        
    })
    .finally(function(){
        console.log("Finally");        
    })
 





















    let test = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    })
}
 
let p1 = test(1000).then(() => ({name: "Promise 1000"}));
let p2 = test(2000).then(() => ({name: "Promise 2000"}));
 
Promise.all([p1, p2]).then((data) => {
    console.log("All", data);    
})
 
Promise.race([p1, p2]).then((data) => {
    console.log("Race", data);    
})
 







fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))