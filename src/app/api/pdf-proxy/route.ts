import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response('URL parameter is required', { status: 400 });
  }

  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'arraybuffer',
    });

    // Set headers
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Access-Control-Allow-Origin', '*');

    return new Response(response.data, {
      status: 200,
      headers,
    });
  } catch (error) {
    return new Response('Error fetching PDF', { status: 500 });
  }
}
