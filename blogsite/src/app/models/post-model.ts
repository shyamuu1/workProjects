export class PostModel {
    authorId: Number;
    title: string;
    body: string;
    createdDate: Date;

    constructor( title, body){
        //this.authorId = authorId;
        this.title = title;
        this.body =body;

    }
}
