# Training Images - Manual Download Guide

## Current Status

✅ **Cat vs Dog dataset ready!** (60 images total)

The starter template includes 30 cat images and 30 dog images in `public/training-library/`.

## For Sessions 1-4: Cat vs Dog

No action needed! The images are already included:
- `public/training-library/cat/` - 30 cat images
- `public/training-library/dog/` - 30 dog images

**Learning Arc:**
1. **Session 1-2:** Use MobileNet (pre-trained) to classify cats vs dogs
2. **Session 3-4:** Train your own cat vs dog classifier
3. **Compare:** Can your model match MobileNet's accuracy?

## For Sessions 5-6: Your Custom Categories

Choose your own categories and collect training images!

### Category Ideas

**Food:**
- Taco vs Burger
- Pizza vs Sushi  
- Donut vs Bagel
- Ice cream vs Cake

**Objects:**
- Car vs Truck
- Phone vs Tablet
- Book vs Laptop
- Shoe vs Sneaker

**Sports:**
- Basketball vs Soccer ball
- Tennis vs Baseball
- Skateboard vs Scooter

**Nature:**
- Tree vs Flower
- Mountain vs Beach
- Sun vs Moon

### Quick Download Options

### Option 1: Kaggle Datasets (Recommended)

**Food Images:**
1. Go to https://www.kaggle.com/datasets/kmader/food41
2. Download dataset (requires free Kaggle account)
3. Extract and copy 30 images each for pizza, burger, taco folders

**Animal Images:**
1. Go to https://www.kaggle.com/datasets/alessiocorrado99/animals10
2. Download dataset
3. Extract and copy 30 images each for dog, cat, bird folders

### Option 2: Pexels/Unsplash (10 minutes)

1. Go to https://www.pexels.com/
2. Search for each category: "pizza", "burger", "taco", "dog", "cat", "bird"
3. Download 30 images per category (400x400 or larger)
4. Rename to format: `category-01.jpg`, `category-02.jpg`, etc.
5. Place in respective folders under `public/training-library/`

### Option 3: Use Your Phone (Most Fun!)

Take photos of objects around you:
1. Choose 2 categories (mug vs water bottle, plant vs book, etc.)
2. Take 20-30 photos of each with varied angles
3. Upload to your Codespace
4. Train on YOUR real-world data!

## File Structure for Custom Categories

```
public/
├── training-library/       # Provided cat vs dog dataset
│   ├── cat/
│   │   ├── cat-01.jpg
│   │   └── ... (30 total)
│   └── dog/
│       ├── dog-01.jpg
│       └── ... (30 total)
└── my-training-data/       # Your custom categories (Session 5-6)
    ├── taco/
    │   ├── taco-01.jpg
    │   └── ... (20-30 images)
    └── burger/
        ├── burger-01.jpg
        └── ... (20-30 images)
```

## Image Requirements

- **Format:** JPG or PNG
- **Size:** 400x400px minimum (resized automatically)
- **License:** Royalty-free (Pexels, Unsplash, Kaggle)
- **Quality:** Clear, well-lit, single subject
- **Variety:** Different angles, backgrounds, lighting
- **Quantity:** 20-30 images per category (minimum 10)

## Tips for Success

1. **Start Simple:** Choose 2 categories with clear visual differences
2. **Quality > Quantity:** 20 good images beat 50 blurry ones
3. **Variety Matters:** Different angles, lighting, backgrounds improve accuracy
4. **Test First:** Use MobileNet to see if it recognizes your categories
5. **Have Fun:** Choose categories you care about!

## Next Steps

1. **Sessions 1-4:** Use provided cat vs dog dataset
2. **Session 5:** Choose your custom categories
3. **Session 5:** Collect 20-30 images per category  
4. **Session 6:** Train, test, and deploy your classifier!

---

**Ready to start?** The cat vs dog images are already in your repo. Just open your Codespace and run `npm run dev`!
