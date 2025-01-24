export async function GET() {
    const items = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Hi I'm ${i + 1}`,
      dob: `200${i % 10}-01-01`,
      age: new Date().getFullYear() - (2000 + (i % 10)),
    }));
  
    return new Response(JSON.stringify(items), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  