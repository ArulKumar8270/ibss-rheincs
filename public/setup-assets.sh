#!/bin/bash

# Setup script to copy assets from original PHP project to Next.js

ORIGINAL_DIR="../"
NEXTJS_DIR="."

echo "🚀 Setting up IBSS Next.js assets..."

# Create directories
echo "📁 Creating directories..."
mkdir -p public/images
mkdir -p public/videos
mkdir -p public/new
mkdir -p public/fonts
mkdir -p public/css

# Copy CSS files
echo "📄 Copying CSS files..."
if [ -d "${ORIGINAL_DIR}css" ]; then
  cp -r ${ORIGINAL_DIR}css/*.css public/css/ 2>/dev/null || true
  echo "✅ CSS files copied"
else
  echo "⚠️  CSS directory not found"
fi

# Copy images
echo "🖼️  Copying images..."
if [ -d "${ORIGINAL_DIR}images" ]; then
  cp -r ${ORIGINAL_DIR}images/* public/images/ 2>/dev/null || true
  echo "✅ Images copied"
else
  echo "⚠️  Images directory not found"
fi

# Copy videos
echo "🎬 Copying videos..."
if [ -d "${ORIGINAL_DIR}videos" ]; then
  cp -r ${ORIGINAL_DIR}videos/* public/videos/ 2>/dev/null || true
  echo "✅ Videos copied"
else
  echo "⚠️  Videos directory not found"
fi

# Copy new assets
echo "📦 Copying new assets..."
if [ -d "${ORIGINAL_DIR}new" ]; then
  cp -r ${ORIGINAL_DIR}new/* public/new/ 2>/dev/null || true
  echo "✅ New assets copied"
else
  echo "⚠️  New directory not found"
fi

# Copy fonts
echo "🔤 Copying fonts..."
if [ -d "${ORIGINAL_DIR}webfonts" ]; then
  cp -r ${ORIGINAL_DIR}webfonts/* public/fonts/ 2>/dev/null || true
  echo "✅ Fonts copied"
else
  echo "⚠️  Fonts directory not found"
fi

echo "✨ Asset setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Run: npm install"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"

