# Version Lock Documentation

## Educational Stability Approach

This project uses **locked dependency versions** to ensure a consistent learning environment across all students and sessions.

### Locked Versions

- **React**: 19.1.1 (Latest stable)
- **TensorFlow.js**: 4.22.0 (ML library for browser)
- **MobileNet**: 2.1.1 (Pre-trained image classification model)
- **Vite**: 7.1.7 (Latest stable build tool)
- **Node.js**: 22 (via .devcontainer)
- **Prettier**: 3.4.2 (Code formatting)
- **ESLint**: 9.18.0 (Linting)

### Why Lock Versions?

1. **Classroom Consistency**: All students work with identical environments
2. **Predictable Behavior**: No "works on my machine" issues
3. **Stable Learning**: Focus on concepts, not troubleshooting version conflicts
4. **Instructor Confidence**: Lessons work reliably across all environments

### Support Timeline

- **Current Version**: 1.0.0
- **Support Until**: January 2027
- **Next Review**: January 2026

### Maintenance Policy

- **Security Updates**: Applied as needed within locked major versions
- **Breaking Changes**: Documented and communicated in advance
- **Student Projects**: Continue working with locked versions after course completion

### For Advanced Students

After completing the course, students can:

1. Fork their project to personal GitHub accounts
2. Upgrade dependencies using `npm update`
3. Experiment with newer TensorFlow.js features
4. Explore PyTorch.js, ONNX.js, and other ML frameworks

### Educational Philosophy

Version locking prioritizes **learning fundamentals** over chasing the latest features. Students build solid foundations with stable tools, then advance to cutting-edge technologies with confidence.

---

**Template Version**: 1.0.0  
**Last Updated**: January 2025  
**Next Review**: January 2026
