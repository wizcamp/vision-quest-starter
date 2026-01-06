# Training Library

This folder contains the cat vs dog training dataset for Sessions 1-4.

## Current Dataset

✅ **60 images ready** (30 cats + 30 dogs)

### Cat Images
- `cat/cat-01.jpg` through `cat/cat-30.jpg`
- Source: Dog-Cat-Classifier dataset (MIT License)

### Dog Images  
- `dog/dog-01.jpg` through `dog/dog-30.jpg`
- Source: Dog-Cat-Classifier dataset (MIT License)

## Usage

### Sessions 1-2: Pre-trained Model
- Students use MobileNet to classify cats vs dogs
- No training needed - MobileNet already knows these categories
- Students see high accuracy predictions

### Sessions 3-4: Custom Training
- Students train their own cat vs dog classifier
- Use these 60 images as training data
- Try to match MobileNet's accuracy

### Sessions 5-6: Student's Choice
- Students choose their own categories
- Examples: taco vs burger, pizza vs sushi, car vs truck
- Students collect their own images in `my-training-data/`

## Image Details

- **Format:** JPG
- **Count:** 30 per category
- **Quality:** Clear, varied angles and backgrounds
- **License:** MIT (from ardamavi/Dog-Cat-Classifier)

## For Instructors

These images are committed to the repo so students get them automatically when they clone/fork the template.

**Why cat vs dog?**
1. MobileNet already recognizes them (great for Session 1-2)
2. Clear visual differences (good for learning)
3. Readily available training data
4. Students can compare their model to pre-trained model

---

**Source:** https://github.com/ardamavi/Dog-Cat-Classifier
