export async function POST(request: Request, response: Response) {
    try {
        const { username, password } = await request.json();

        if (!username || !password) {
            return Response.json({
                success: false,
                message: "Username and password are required",
                data: null
            }, { status: 400 });
        }

        if (username === 'admin' && password === '123') {
            return Response.json({
                success: true,
                message: "Login successful",
                data: { username: "Harshan Morawaka" }
            }, { status: 200 });
        }

        return Response.json({
            success: false,
            message: "Invalid username or password  ",
            data: null
        }, { status: 400 });
    } catch {
        return Response.json({
            success: false,
            message: "Unexpected Error ",
            data: null
        }, { status: 500 });
    }
}