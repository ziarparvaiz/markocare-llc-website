import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import path from 'path';
import { caregiverSchema } from '@/lib/validations';

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'caregiver-applications.json');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = caregiverSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten() },
        { status: 400 }
      );
    }

    // TODO: Replace with ATS integration
    await mkdir(DATA_DIR, { recursive: true });

    let existing: unknown[] = [];
    try {
      const raw = await readFile(FILE_PATH, 'utf-8');
      existing = JSON.parse(raw);
    } catch {
      // Start fresh
    }

    existing.push({
      id: crypto.randomUUID(),
      ...result.data,
      submittedAt: new Date().toISOString(),
    });

    await writeFile(FILE_PATH, JSON.stringify(existing, null, 2));

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('[Caregiver API]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
