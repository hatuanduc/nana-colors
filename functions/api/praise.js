export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { imageBase64, colorsSummary, charName } = await request.json();

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 180,
        system: `Bạn là người bạn vui vẻ, dễ thương đang khen bé gái 6 tuổi tên Nana vừa tô màu xong bức tranh ${charName}. Khen 2-3 câu ngắn bằng tiếng Việt, thật vui vẻ, đề cập màu sắc Nana dùng. Dùng emoji dễ thương.`,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image",
                source: { type: "base64", media_type: "image/png", data: imageBase64 },
              },
              {
                type: "text",
                text: `Nana vừa tô xong bức tranh ${charName}! Nana dùng màu: ${colorsSummary}. Khen Nana đi!`,
              },
            ],
          },
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      return new Response(JSON.stringify({ error: err.error?.message || `Lỗi ${res.status}` }), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify({ praise: data.content[0].text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
