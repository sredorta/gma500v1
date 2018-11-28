import { IApiNotif } from "../_services/api.service";


//Use Notif as Notification is reserved class
export class Notif {
    id: number;
    text: string;
    isRead: boolean;
    created_at: string;  

    constructor(notif: IApiNotif) {
        if (notif != null) {
            this.id = notif.id;
            this.isRead = notif.isRead;
            this.text = notif.text;
            this.created_at = notif.created_at;
        } 
    }

}