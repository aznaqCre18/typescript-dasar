/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance

abstract class Root {
    abstract done: boolean;
}

class User extends Root {
    id: number;
    firstName: string;
    lastName: string;
    protected save: boolean;
    private token: string;
    static MAX_FAILED_LOGIN = 5;
    private retryLogin = 0;
    done: boolean;

    login(username: string, password: string) {
        this.retryLogin += 1;
        if(username == 'admin' && password === 'admin') {
            return true
        }
        
        if(this.retryLogin >= User.MAX_FAILED_LOGIN) {
            return 'Batas percobaan login anda sudah habis!'
        }

        return false;
    }

    constructor(id: number, firstName: string, lastName: string) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.save = false;
        this.token = "";
        this.retryLogin = 0;
        this.done = false;
    }
}

const newUser = new User(1, 'Aziz', 'Nur');
console.log(newUser);

User.MAX_FAILED_LOGIN = 5
console.log(newUser.login('', ''));

class UserEnhancment extends User {
    location: string;
    constructor(id: number, firstName: string, lastName: string, location: string ) {
        super(id, firstName, lastName);
        this.location = location;
        // this.save;
    }
}

const userEnhance = new UserEnhancment(2, 'Darmawan', 'Doni', 'Medan');
console.log(userEnhance)