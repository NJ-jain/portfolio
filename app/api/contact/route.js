export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Format message for Telegram
    const telegramMessage = `🚀 *New contact form submission!*
👤 *Name:* ${name}
📧 *Email:* ${email}
📝 *Subject:* ${subject}
💬 *Message:* ${message}`;

    // Send to Telegram bot
    const telegramResponse = await fetch(
      'https://api.telegram.org/bot8449169830:AAG1b-yVU3hvm0mHzIzJyKtdRe9EQJies24/sendMessage',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '-4816608061',
          text: telegramMessage,
          parse_mode: 'Markdown'
        }),
      }
    );

    if (!telegramResponse.ok) {
      throw new Error('Failed to send message to Telegram');
    }

    return Response.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return Response.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 