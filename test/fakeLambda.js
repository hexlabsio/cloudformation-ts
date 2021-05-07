export async function handler(event) {
    console.log(JSON.parse(event.body));
    return {
        statusCode: 200,
        body: 'Hello from Lambda4'
    }
}
