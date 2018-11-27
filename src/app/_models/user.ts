
import {IApiUserAuth} from '../_services/api.service';

export class User {
    id : number;
    firstName:string;
    lastName:string;
    email:string;
    mobile:string;
    language:string;
    updated_at:string;
    created_at:string;
    account:string;   
    notifications:number;
    messages:number;
    roles:Array<String>;
    groups:Array<String>;
    avatar:any;
    constructor(user: IApiUserAuth) {
        if (user !== null) {
            this.id = user.id;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.email = user.email;
            this.mobile = user.mobile;
            this.updated_at = user.updated_at;
            this.created_at = user.created_at;
            this.account = user.account;
            this.notifications = user.notifications;
            this.messages = user.messages;
            this.roles = user.roles;
            this.groups = user.groups;
            this.avatar = user.avatar;
        } else {
            this.id = null;
        }
        console.log("Resulting user: ");
        console.log(this);
    }

    //Returns if we have an user (i.e. we are logged in for current user!)
    isAvailable() :boolean {
        if ((this.id !== null) && (this.id !== undefined)) return true;
        return false;
    }

    getAvatar(size:string) : string {
        return "url(" + this.avatar.orig.url + ")";
    }

    /////////////////////////////////////////////////////////////////////////
    // Token related
    /////////////////////////////////////////////////////////////////////////
    public static removeToken() {
        localStorage.removeItem('jwt-token')
    }

    public static saveToken(token:string) {
        localStorage.setItem('jwt-token',token);
    }
    public static getToken() : string {
        return localStorage.getItem('jwt-token');
    }

    public static hasValidToken() : boolean {
        //Here we need to validate the token
        if (localStorage.getItem('jwt-token')== null) 
           return false;
        return true;
    }    
}