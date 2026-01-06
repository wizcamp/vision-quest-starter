# Training Library

This folder contains pre-built training datasets for students to use.

## Current Status

⚠️ **Images need to be added before camp starts**

## Required Datasets

### Food Dataset (30 images each)
- `food/pizza/` - 30 pizza images
- `food/burger/` - 30 burger images  
- `food/taco/` - 30 taco images

### Animals Dataset (30 images each)
- `animals/dog/` - 30 dog images
- `animals/cat/` - 30 cat images
- `animals/bird/` - 30 bird images

## Image Requirements

- **Format:** JPG or PNG
- **Size:** 500-1000px (will be resized by TensorFlow.js)
- **Quality:** Clear, well-lit, varied angles
- **Copyright:** Must be royalty-free/public domain

## Sourcing Images

### Recommended Sources

1. **Unsplash** (https://unsplash.com)
   - High quality, completely free
   - Good variety

2. **Pexels** (https://www.pexels.com)
   - Free stock photos
   - Easy download

3. **Kaggle Datasets**
   - Food-101: https://www.kaggle.com/datasets/dansbecker/food-101
   - Animals-10: https://www.kaggle.com/datasets/alessiocorrado99/animals10

### Download Instructions

#### Option 1: Manual Download (Unsplash/Pexels)
1. Search for category (e.g., "pizza")
2. Download 30 diverse images
3. Rename: `pizza-01.jpg`, `pizza-02.jpg`, etc.
4. Place in appropriate folder

#### Option 2: Kaggle Dataset
1. Download dataset ZIP
2. Extract relevant categories
3. Select 30 best images per category
4. Rename and organize

#### Option 3: Bulk Download Script
```bash
# Example using wget (requires image URLs)
cd public/training-library/food/pizza
wget -O pizza-01.jpg "https://images.unsplash.com/..."
# Repeat for each image
```

## File Naming Convention

Use consistent naming:
- `pizza-01.jpg` through `pizza-30.jpg`
- `dog-01.jpg` through `dog-30.jpg`
- etc.

## Verification

Before camp starts, verify:
- [ ] Each category has exactly 30 images
- [ ] All images are clear and appropriate
- [ ] File sizes are reasonable (< 2MB each)
- [ ] Images load correctly in browser
- [ ] Total folder size is manageable for git

## Git Considerations

**Option A: Commit images to repo**
- Pros: Students get images automatically
- Cons: Large repo size (~50-100MB)

**Option B: Download script**
- Pros: Smaller repo
- Cons: Students must run script first

**Recommendation:** Commit images to repo for simplicity.

## Testing

After adding images, test:
```bash
npm run dev
# Navigate to Pre-built Training tab
# Verify images load correctly
```

---

**TODO:** Add images before first camp session!
