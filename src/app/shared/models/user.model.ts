export class User {
    constructor(
        public email: string,
        public password: string,
        public profile: {
            first_name: string,
            last_name: string
            },
        public id? : number
    ){}
}