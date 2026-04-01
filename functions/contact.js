export async function handleRequest(request) {
    const { name, email, message } = await request.json();
    // Validate inputs
    if (!name || !email || !message) {
        return new Response('Missing fields', { status: 400 });
    }
    // Send email logic or other processing can go here
    return new Response('Form submitted successfully!', { status: 200 });
}