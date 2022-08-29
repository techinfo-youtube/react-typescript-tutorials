import { IUser } from './../models/IUser';


export class UserService{
    private static users:IUser[] = [
        { sno: 1, name: "Techinfoyt", age: 25 },
      { sno: 2, name: "Tushar", age: 28 },
      { sno: 3, name: "noname", age: 21 },
    ]

    public static getAllUsers() {
        return this.users
    }
}
