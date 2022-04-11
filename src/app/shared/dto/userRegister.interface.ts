export class UserRegister {

email: string;
userName: string;
password: string;
mobileNumber: string;
    constructor(email?: string, userName?: string, mobileNumber?: string, password?: string) {
    this.email = email || '';
    this.userName = userName || '';
    this.mobileNumber = mobileNumber || '';
    this.password = password || '';
}

}
