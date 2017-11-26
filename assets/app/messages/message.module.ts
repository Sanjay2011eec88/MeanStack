export class Message{
    content: string;
    username: string;
    messaeId?: string; //optional
    userId?: string; //optional

    constructor(content: string, username: string,messageId?: string, userId?: string ){
        this.content = content;
        this.username = username;
        this.messaeId = messageId;
        this.userId = userId;
    }
}