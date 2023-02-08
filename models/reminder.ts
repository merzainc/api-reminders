export default class Reminder {
    completed: boolean;

    constructor(public id: number, public title: string) {
        this.completed = false;
    }

}