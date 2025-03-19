import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { SidebarMenuItem } from '@/Types';

// Path to the JSON file
const sidebarFilePath = path.join(process.cwd(), 'data', 'sidebar.json');

// Helper function to ensure the data directory exists
const ensureDataDirExists = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Helper function to ensure the sidebar file exists
const ensureSidebarFileExists = () => {
  ensureDataDirExists();

  if (!fs.existsSync(sidebarFilePath)) {
    // Initial sidebar data
    const initialData: SidebarMenuItem[] = [
      {
        id: "1",
        title: "Dashboard",
        href: "/",
        target: "",
        visible: true,
        childs: []
      },
    ];

    fs.writeFileSync(sidebarFilePath, JSON.stringify(initialData, null, 2));
  }
};

// GET handler
export async function GET() {
  // Make sure the file exists
  ensureSidebarFileExists();

  try {
    const sidebarData = fs.readFileSync(sidebarFilePath, 'utf8');
    return NextResponse.json(JSON.parse(sidebarData));
  } catch (error) {
    console.error('Error reading sidebar data:', error);
    return NextResponse.json({ error: 'Failed to read sidebar data' }, { status: 500 });
  }
}

// POST handler
export async function POST(request: NextRequest) {
  // Make sure the file exists
  ensureSidebarFileExists();

  try {
    const sidebarData = await request.json() as SidebarMenuItem[];

    // Validate the data (basic validation)
    if (!Array.isArray(sidebarData)) {
      return NextResponse.json({ error: 'Invalid sidebar data format' }, { status: 400 });
    }

    // Write to the file
    fs.writeFileSync(sidebarFilePath, JSON.stringify(sidebarData, null, 2));

    return NextResponse.json({ message: 'Sidebar data updated successfully' });
  } catch (error) {
    console.error('Error updating sidebar data:', error);
    return NextResponse.json({ error: 'Failed to update sidebar data' }, { status: 500 });
  }
}