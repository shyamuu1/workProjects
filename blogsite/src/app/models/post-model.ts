export class PostModel {
    authorId: Number;
    title: string;
    body: string;
    createdDate: Date;

    constructor( title, body){
        this.title = title;
        this.body =body;

    }

    getCreatedDate(){
        return this.createdDate.toString();
    }
}
