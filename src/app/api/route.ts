import { NextRequest, NextResponse } from "next/server";
import { getBudgets, updateBudget } from "../db/actions/budgetAction";

export async function POST(req: NextRequest) {
  const { _id, active, amountTotal } = await req.json();

  if (!_id || typeof active !== "boolean" || typeof amountTotal !== "number") {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  try {
    const { success, errMsg, data } = await updateBudget(_id, { active, amountTotal });
    if (success) {
      return NextResponse.json({ success: true, data }, { status: 200 });
    } else {
      return NextResponse.json({ error: errMsg }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to update budget" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { data, errMsg } = await getBudgets();
    if (!errMsg) {
      return NextResponse.json({ data });
    } else {
      return NextResponse.json({ error: errMsg }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch budget data" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { _id, active } = await req.json();

  if (!_id || typeof active !== "boolean") {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  try {
    const { success, errMsg, data } = await updateBudget(_id, { active });
    if (success) {
      return NextResponse.json({ success: true, data }, { status: 200 });
    } else {
      return NextResponse.json({ error: errMsg }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to update budget" }, { status: 500 });
  }
}