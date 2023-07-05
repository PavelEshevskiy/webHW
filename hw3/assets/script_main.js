let name = prompt('Введите имя');
alert(`Привет, ${name}`)
let age = prompt('Укажите ваш возраст');
switch (age) {
    case 18:{
        alert("Добро Пожаловать");
        break;
    }
    case 10:{
        alert("Ты слишком мал, иди учи уроки!");
        break;
    }
    default:{
        alert("Вы уже староваты для этого, но можете попробовать");
        break;
    }
}
