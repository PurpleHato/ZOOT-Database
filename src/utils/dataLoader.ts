import { DataItem } from '../types';

export const parseCSV = (csvText: string): DataItem[] => {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];
  
  const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, ''));
  const rows = lines.slice(1);
  
  return rows.map(row => {
    const values = row.split(',').map(value => value.trim().replace(/"/g, ''));
    const item: DataItem = {};
    
    headers.forEach((header, index) => {
      item[header] = values[index] || '';
    });
    
    return item;
  });
};

export const loadDataFromFile = async (filePath: string): Promise<DataItem[]> => {
  // In development, access files directly from public folder
  // In production (GitHub Pages), use the base path from homepage
  const baseUrl = process.env.NODE_ENV === 'development' ? '' : process.env.PUBLIC_URL || '';
  const fullPath = baseUrl ? `${baseUrl}/${filePath}` : filePath;
  
  const response = await fetch(fullPath);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch ${fullPath}: ${response.status}`);
  }
  
  const text = await response.text();
  
  if (filePath.endsWith('.csv')) {
    return parseCSV(text);
  } else if (filePath.endsWith('.json')) {
    return JSON.parse(text);
  } else {
    throw new Error(`Unsupported file type: ${filePath}`);
  }
};