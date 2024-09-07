import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function createCall() {
  try {
    const call = await client.calls.create({
      from: '+19179204123', // Your Twilio verified phone number
      to: '+18452348191', // The phone number to call
      url: 'https://handler.twilio.com/twiml/EH39eca0e883fe9f6f0080966492127bbe', // Your TwiML URL
    });
    console.log(call);
    console.log('Call SID:', call.sid);
    return call.sid;
  } catch (error: any) {
    console.log(error);
    console.error('Error creating call:', error.message);
    throw new Error('Failed to create a call');
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  //   try {
  //     const callSid = await createCall();
  //     console.log(callSid);
  //     return NextResponse.json({ success: true, callSid });
  //   } catch (error: any) {
  //     return NextResponse.json(
  //       { success: false, message: error.message },
  //       { status: 500 },
  //     );
  //   }

  return NextResponse.json({ success: true });
}
