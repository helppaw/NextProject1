export class AppUser {
    constructor(
        public userId = 0,
        public username = '',
        public password = '',
        public firstname = '',
        public lastname = '',
        public role = '',
        public active = ''
    ) {}

}