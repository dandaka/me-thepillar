import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Simulate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the input argument (single author or array of authors)
const input = process.argv[2];

// Validate input
if (!input) {
  console.error('Please provide an author name or an array of author names.');
  console.log('Usage:');
  console.log('  node createAuthors.js "Author Name"');
  console.log('  node createAuthors.js \'["Author1", "Author2"]\'');
  process.exit(1);
}

// Determine if input is a JSON array or a single author name
let authors;
try {
  // Try to parse input as JSON array
  authors = JSON.parse(input);
  if (!Array.isArray(authors)) {
    throw new Error('Input is not an array');
  }
} catch {
  // If parsing fails, treat it as a single string
  authors = [input];
}

// Base path for authors
const basePath = path.join(__dirname, 'src', 'content', 'authors');

// Create folders and JSON files for each author
authors.forEach(author => {
  const folderName = path.join(basePath, author);

  // Create author's folder
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName, { recursive: true });
  }

  // Create '_assets' subfolder
  const assetsFolder = path.join(folderName, '_assets');
  if (!fs.existsSync(assetsFolder)) {
    fs.mkdirSync(assetsFolder);
  }

  // Create 'case-thumbnails' subfolder inside '_assets'
  const thumbnailsFolder = path.join(assetsFolder, 'case-thumbnails');
  if (!fs.existsSync(thumbnailsFolder)) {
    fs.mkdirSync(thumbnailsFolder);
  }

  // Create JSON file for the author
  const jsonFilePath = path.join(folderName, `${author}.json`);
  if (!fs.existsSync(jsonFilePath)) {
    const jsonData = {
      order: 0,
      name: author,
      workImg: "",
      caseURL: "",
      caseThumbnails: [],
    };

    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
  }

  console.log(`Folders and JSON file for "${author}" have been created!`);
});
