import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import path from 'path';
import { assessmentSchema } from '@/lib/validations';

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'assessments.json');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate
    const result = assessmentSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten() },
        { status: 400 }
      );
    }

    // TODO: Replace with CRM (HubSpot, Sanity, etc.)
    await mkdir(DATA_DIR, { recursive: true });

    let existing: unknown[] = [];
    try {
      const raw = await readFile(FILE_PATH, 'utf-8');
      existing = JSON.parse(raw);
    } catch {
      // File doesn't exist yet — start fresh
    }

    existing.push({
      id: crypto.randomUUID(),
      ...result.data,
      submittedAt: new Date().toISOString(),
    });

    await writeFile(FILE_PATH, JSON.stringify(existing, null, 2));

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('[Assessment API]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
