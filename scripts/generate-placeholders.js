#!/usr/bin/env node

/**
 * Generate Placeholder Training Images
 * 
 * Creates colored placeholder images with category labels
 * For testing infrastructure only - replace with real images for production
 * 
 * Usage: node scripts/generate-placeholders.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from 'canvas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CATEGORIES = [
  { name: 'pizza', color: '#FF6B35' },
  { name: 'burger', color: '#F7931E' },
  { name: 'taco', color: '#FDC830' },
  { name: 'dog', color: '#8B4513' },
  { name: 'cat', color: '#FF69B4' },
  { name: 'bird', color: '#4A90E2' }
];
const IMAGES_PER_CATEGORY = 30;
const IMAGE_SIZE = 400;
const BASE_DIR = path.join(__dirname, '..', 'public', 'training-library');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function generatePlaceholderImage(category, index, color) {
  const canvas = createCanvas(IMAGE_SIZE, IMAGE_SIZE);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, IMAGE_SIZE, IMAGE_SIZE);

  // Add some variation with gradient
  const gradient = ctx.createRadialGradient(200, 200, 50, 200, 200, 300);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0.2)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, IMAGE_SIZE, IMAGE_SIZE);

  // Category label
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(category.toUpperCase(), IMAGE_SIZE / 2, IMAGE_SIZE / 2 - 20);

  // Image number
  ctx.font = '32px Arial';
  ctx.fillText(`#${index}`, IMAGE_SIZE / 2, IMAGE_SIZE / 2 + 30);

  // Border
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.lineWidth = 4;
  ctx.strokeRect(0, 0, IMAGE_SIZE, IMAGE_SIZE);

  return canvas.toBuffer('image/jpeg', { quality: 0.9 });
}

function generateCategoryImages(category, color) {
  const categoryDir = path.join(BASE_DIR, category);
  ensureDir(categoryDir);

  console.log(`\n🎨 Generating ${IMAGES_PER_CATEGORY} placeholders for: ${category}`);

  for (let i = 1; i <= IMAGES_PER_CATEGORY; i++) {
    const filename = `${category}-${String(i).padStart(2, '0')}.jpg`;
    const filepath = path.join(categoryDir, filename);

    try {
      const buffer = generatePlaceholderImage(category, i, color);
      fs.writeFileSync(filepath, buffer);
      process.stdout.write('✓');
    } catch (error) {
      process.stdout.write('✗');
      console.error(`\nError generating ${filename}:`, error.message);
    }
  }

  console.log(`\n✅ Completed: ${category}`);
}

function main() {
  console.log('🎨 Vision Quest - Placeholder Image Generator\n');
  console.log(`Generating ${IMAGES_PER_CATEGORY} images × ${CATEGORIES.length} categories = ${IMAGES_PER_CATEGORY * CATEGORIES.length} total images\n`);
  console.log('⚠️  WARNING: These are colored placeholders for testing only!');
  console.log('Replace with real category images before production use.\n');

  ensureDir(BASE_DIR);

  for (const { name, color } of CATEGORIES) {
    generateCategoryImages(name, color);
  }

  console.log('\n🎉 All placeholder images generated!');
  console.log(`\n📁 Images saved to: ${BASE_DIR}`);
  console.log('\n✨ Your Vision Quest starter is ready for infrastructure testing!');
  console.log('\n📝 Next: Replace placeholders with real images (see TRAINING-IMAGES.md)');
}

main().catch(console.error);
