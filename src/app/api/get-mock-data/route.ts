import { NextResponse } from 'next/server';
import { getMockData } from '../../../actions/serverActions';

export async function GET() {
  const data = await getMockData();
  return NextResponse.json(data);
}
