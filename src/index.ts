export class log {
    static success(msg: string): void {
        console.log(`%c ${msg},'color:green'`);

    }

    static danger(msg: string): void {
        console.log(`%c ${msg},'color:red'`);

    }

    static highlight(msg: string): void {
        console.log(`%c ${msg},'color:red;background:yellow'`);

    }
}