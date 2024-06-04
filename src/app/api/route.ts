import { NextRequest, NextResponse } from 'next/server';
import  {getBudgets}  from '../db/actions/budgetAction';

export async function GET(req: NextRequest) {
  try {
    console.log('API request received');
    const { data, errMsg } = await getBudgets();
    if (!errMsg) {
      console.log('Returning budget data:', data);
      return NextResponse.json({ data });
    } else {
      console.error('Error message received:', errMsg);
      return NextResponse.json({ error: errMsg }, { status: 500 });
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Failed to fetch budget data' }, { status: 500 });
  }
}
