
function numberChanger(numberToChange: number | string): string| number  {

    if (typeof numberToChange === "number") {
        return numberToChange.toFixed(3)
    }
    return numberToChange;
}

let s = numberChanger('hello');
console.log(s);

let changer = numberChanger(3.34243);
console.log(changer);

// class user {
//   private password: string;
//   email: string;

//   constructor(pass: string, mail: string) {
//     this.email = mail;
//     this.password = pass;
//   }

//   loginUser(pass: string, email: string) {
//     if (pass === this.password && email === this.email) {
//       return true;
//     }

//     return false;
//   }
// }

// let victor = new user('12345', 'victor@owu.com.ua');

// console.log(victor.email);

// let names: string[] = ['Ivan', 'Dima', 'Ira'];
// let names2: Array<string> = ['Ivan', 'Dima', 'Ira'];
// interface IUser {
//   name: string;
//   age?: number;
//   phone: {
//     model: string;
//     price: number;
//     isNew: boolean;
//   };
//   buyNewOne?: Function;
// }
//
// let usersWithPhones: IUser[] = [
//   { name: 'Ivan', phone: { isNew: true, model: 'Samsung A7', price: 6000 } },
// ];
//
// console.log(usersWithPhones);
//
// let IromBird: IUser = {
//   phone: {
//     price: 999,
//     model: 'SD',
//     isNew: false,
//   },
//   name: 'Iron',
//   age: 10,
//   buyNewOne: () => {},
// };
