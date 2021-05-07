import {saySomething} from "./fakeSecondary";

export async function handler(event) {
    return {
        statusCode: 200,
        body: 'Hello from Lambda' + saySomething()
    }
}
