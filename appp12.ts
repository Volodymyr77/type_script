// let name2 = 'Volod';
// console.log(name2);

// // var age;

// let age: number;
// age = 0;
// console.log(age);

// function numberChanger(numberToChange: number | string): string {
//   if (typeof numberToChange === 'number') {
//     return numberToChange.toFixed(2);
//   }
//   return numberToChange;
// }
// let s = numberChanger('Hello');
// console.log(s);

// let chand = numberChanger(3.55555);
// console.log(chand);
//
// class car {
//     protected year: number;
//     private producer: string;
//     // public power: number;
//
//     constructor(ric: number, prod: string) {
//         this.year = ric;
//         this.producer = prod;
//     }
// }
//
// class superCar extends car {
//      color: string;
//
//      constructor(year: number, producer: string, color: string) {
//          super(year, producer);
//          this.color = color;
//          this.year = year;
//          this.
//      }
//  }
//
// let car1 = new car(2000, 'Yamaha');
// let car2 = new superCar(2002, 'Domaha', 'pink');
// console.log(car1);
// console.log(car2);

// class user {
//   private password: string;
//   email: string;
//
//   constructor(pass: string, mail: string) {
//     this.email = mail;
//     this.password = pass;
//   }
//
//   loginUser(pass?: string, email?: string): boolean {
//
//     if (pass === this.password && email === this.email) {
//       return true;
//     }
//
//     return false;
//   }
// }
//
// let victor = new user('12345', 'victor@owu.com.ua');
//
// let success = victor.loginUser('12345')
// console.log(success);

// let names: string[] = ['Ivan', 'Dima', 'Ira'];
// let names2: Array<string> = ['Ivan', 'Dima', 'Ira'];
//
//  interface IUser {
//    name: string;
//    age?: number;
//    phone: {
//      model: string;
//      price: number;
//      isNew: boolean;
//    };
//    buyNewOne?: Function;
//  }
//
//  let usersWithPhones: IUser[] = [
//    { name: 'Ivan', phone: { isNew: true, model: 'Samsung A7', price: 6000 } },
//  ];
//
// console.log(usersWithPhones);

// const accccct: Array<keyof IUser> = [];

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

 enum Ecolors {
   RED = 0,
   WHITE = 1,
   BLUE = 11,
 }
//
// function setNewColor(Ecolors) {
//    console.log(Ecolors);
//  }
//
//  setNewColor(Ecolors.BLUE);
//
//  enum EEmailTyopes {
//    WELCOME = 0,
//    FORGOT_PASS = 1,
//  }
//  function sendEmail(emailType: EEmailTyopes) {
//    if (emailType === EEmailTyopes.WELCOME) {
//      console.log('welcome to platform');
//      return;
//    }
//  }
//
//  sendEmail(EEmailTyopes.WELCOME);

// class man {
//   weight: number;
//   high: number;

//   constructor(weight: number, high: number) {
//     this.weight = weight;
//     this.high = high;
//   }
// }

// class deputy extends man {
//   surname: string;
//   name: string;
//   age: number;
//   bribe: boolean;
//   bribeSum: number;

//   constructor(
//     weight: number,
//     high: number,
//     surname: string,
//     name: string,
//     age: number,
//     bribe: boolean,
//     bribeSum: number,
//   ) {
//     this.name = name;
//     this.id = id;
//   }
// }

// interface deputy {
//   name: string;
//   id: number;
// }


abstract class  absCar {
  wheels: number;
  power: number;

  constructor(power: number, wheels: number = 4) {
    this.power = power
    this.wheels = wheels
  }
  bzzzz() {
   console.log('bzzzzzzzzzz');
  }
}

class gazel extends absCar {
  polomka: boolean;
  color: Ecolors;

  constructor(power: number, color: Ecolors, wheels: number = 4) {
    super(power, wheels);
    this.polomka = true
    this.color = color
  }

}

const killMachine = new gazel(40, Ecolors.BLUE);

console.log(killMachine);

killMachine.bzzzz();
