export async function handler(event) {
    throw new Error('ahhh')
    return {
        statusCode: 200,
        body: 'Hello from Lambda3'
    }
}
