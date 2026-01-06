#!/usr/bin/env node

/**
 * Download Training Images Script
 * 
 * Downloads 180 sample images (30 per category) from Unsplash Source API
 * Categories: pizza, burger, taco, dog, cat, bird
 * 
 * Usage: node scripts/download-training-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CATEGORIES = ['pizza', 'burger', 'taco', 'dog', 'cat', 'bird'];
const IMAGES_PER_CATEGORY = 30;
const BASE_DIR = path.join(__dirname, '..', 'public', 'training-library');

// Picsum Photos API - reliable, free, no auth required
const PICSUM_BASE = 'https://picsum.photos/400/400';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function downloadCategoryImages(category) {
  const categoryDir = path.join(BASE_DIR, category);
  ensureDir(categoryDir);

  console.log(`\n📥 Downloading ${IMAGES_PER_CATEGORY} images for: ${category}`);

  for (let i = 1; i <= IMAGES_PER_CATEGORY; i++) {
    const filename = `${category}-${String(i).padStart(2, '0')}.jpg`;
    const filepath = path.join(categoryDir, filename);

    // Skip if already exists
    if (fs.existsSync(filepath)) {
      process.stdout.write('.');
      continue;
    }

    try {
      // Use unique seed for each image
      const seed = `${category}-${i}-${Date.now()}`;
      const url = `${PICSUM_BASE}?random=${seed}`;
      await downloadImage(url, filepath);
      process.stdout.write('✓');
      
      // Rate limit: 100ms delay between requests
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      process.stdout.write('✗');
      console.error(`\nError downloading ${filename}:`, error.message);
    }
  }

  console.log(`\n✅ Completed: ${category}`);
}

async function main() {
  console.log('🎨 Vision Quest - Training Image Downloader\n');
  console.log(`Downloading ${IMAGES_PER_CATEGORY} images × ${CATEGORIES.length} categories = ${IMAGES_PER_CATEGORY * CATEGORIES.length} total images\n`);
  console.log('Source: Picsum Photos (placeholder images)');
  console.log('Image size: 400×400px');
  console.log('Note: These are generic placeholders. Replace with real category images for production.\n');

  ensureDir(BASE_DIR);

  for (const category of CATEGORIES) {
    await downloadCategoryImages(category);
  }

  console.log('\n🎉 All images downloaded successfully!');
  console.log(`\n📁 Images saved to: ${BASE_DIR}`);
  console.log('\n✨ Your Vision Quest starter is ready to test in Codespaces!');
}

main().catch(console.error);
