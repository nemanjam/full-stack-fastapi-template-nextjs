export async function GET() {
  return Response.json({
    processEnv: process.env,
  });
}
