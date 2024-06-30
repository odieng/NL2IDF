import { NextRequest, NextResponse } from 'next/server';
import { OpenAIStream } from '../../utils/translator';

export const config = {
  runtime: 'edge',
};

const translateHandler = async (req: NextRequest) => {
  const { input, direction, model, key } = await req.json();

  try {
    let stream;
    if (direction === 'toIDF') {
      stream = await OpenAIStream('Generation', input, 'IDF', model, key);
    } else if (direction === 'toNaturalLanguage') {
      stream = await OpenAIStream('Interpretation', input, 'Natural Language', model, key);
    }

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain' },
    });
  } catch (error: any) {
    console.error("Error occurred in translate API:", error);

    if (error.response?.status === 429 || error.code === 'insufficient_quota') {
      return NextResponse.json({
        error: 'You have exceeded your current quota. Please check your plan and billing details.',
      }, { status: 429 });
    } else {
      return NextResponse.json({ error: 'An internal error occurred. Please try again later.' }, { status: 500 });
    }
  }
};

export default translateHandler;