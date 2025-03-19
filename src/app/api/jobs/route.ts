import { NextResponse } from 'next/server';

import fs from 'fs';
import path from 'path';

// Path to the JSON file
const jobsFilePath = path.join(process.cwd(), 'data', 'jobs.json');

// GET handler
export async function GET() {
  try {
    const sidebarData = fs.readFileSync(jobsFilePath, 'utf8');
    return NextResponse.json(JSON.parse(sidebarData));
  } catch (error) {
    console.error('Error reading sidebar data:', error);
    return NextResponse.json({ error: 'Failed to read sidebar data' }, { status: 500 });
  }
}
