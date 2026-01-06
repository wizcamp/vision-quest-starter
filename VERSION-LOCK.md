# Version Lock

This document explains the locked versions in this project and why they're important.

## Why Lock Versions?

This is an educational project designed for a specific camp curriculum. Locking versions ensures:

1. **Consistency** - All students have the same experience
2. **Stability** - Code works the same way for everyone
3. **Support** - Instructors can provide accurate help
4. **Documentation** - Session guides match the actual code

## Locked Versions

### Core Dependencies

- **React:** `19.1.1`
  - Latest stable version with improved performance
  - Consistent with other Wizcamp projects

- **TensorFlow.js:** `^4.22.0`
  - Stable ML library for browser
  - Compatible with MobileNet v2

- **@tensorflow-models/mobilenet:** `^2.1.1`
  - Pre-trained image classification model
  - 1000+ object categories

### Build Tools

- **Vite:** `^7.1.7`
  - Fast development server
  - Optimized production builds

- **Node.js:** `22` (in devcontainer)
  - Latest LTS version
  - Required for Express server

### Development Dependencies

- **ESLint:** `^9.18.0`
  - Latest flat config format
  - Consistent code quality

- **Prettier:** `^3.4.2`
  - Code formatting
  - Consistent style

## Server Dependencies

- **Express:** `^4.21.2`
  - File upload server
  - Development only (not in production build)

- **Multer:** `^1.4.5-lts.1`
  - Handle multipart/form-data
  - Image upload processing

- **CORS:** `^2.8.5`
  - Enable cross-origin requests
  - Vite dev server → Express server

## When to Update

**During the camp:** DO NOT update versions

**After the camp:** You can update if you want to continue developing:

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Or update specific package
npm update react
```

## Breaking Changes to Watch For

If you do update versions, be aware:

### TensorFlow.js
- API changes between major versions
- Model loading syntax may change
- Check migration guides

### React
- Hooks behavior may change
- Build process updates
- Check React changelog

### Vite
- Config format changes
- Plugin compatibility
- Build output structure

## Compatibility Notes

### Browser Requirements

This project requires modern browsers with:
- ES2020 support
- WebGL (for TensorFlow.js)
- File API
- Fetch API

Supported browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Node.js Requirements

- **Minimum:** Node 18
- **Recommended:** Node 22 (LTS)
- **Maximum:** Node 23

## Testing After Updates

If you update versions, test:

1. ✅ `npm install` completes without errors
2. ✅ `npm run dev` starts both servers
3. ✅ Pre-built classifier loads MobileNet
4. ✅ Image upload works
5. ✅ Custom training functions
6. ✅ `npm run build` succeeds
7. ✅ Production build works in browser

## Rollback Instructions

If updates break something:

```bash
# Restore package-lock.json from git
git checkout package-lock.json

# Reinstall exact versions
rm -rf node_modules
npm ci
```

## Questions?

- Check the main README.md
- Ask your instructor
- Review TensorFlow.js docs: https://js.tensorflow.org
- Review React docs: https://react.dev

---

**Remember:** During the camp, use the locked versions. They're tested and guaranteed to work with the session guides!
