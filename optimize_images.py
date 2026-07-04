import os
from PIL import Image
import glob

# Mapping of specific file prefixes/names to max dimensions (width, height)
# If not specified, we'll just do a default max dimension of 800x800
TARGET_SIZES = {
    'cafe-banner': (1200, 800), # Hero background
    'cafe-2': (400, 600),
    'cafe-5': (400, 600),
    'cafe-1': (400, 600),
    'cafe-4': (400, 600),
    'cafe-3': (800, 600),
    'menu-': (500, 500), # Menu items are square
    'coffee-section': (600, 600),
    'rise-and-grind-logo': (400, 100) # Give logo some padding
}

def get_target_size(filename):
    for key, size in TARGET_SIZES.items():
        if key in filename:
            return size
    return (800, 800)

image_dir = 'images'
if not os.path.exists(image_dir):
    print("Images directory not found!")
    exit(1)

for ext in ('*.png', '*.jpg', '*.jpeg'):
    for img_path in glob.glob(os.path.join(image_dir, ext)):
        filename = os.path.basename(img_path)
        name, _ = os.path.splitext(filename)
        out_path = os.path.join(image_dir, f"{name}.webp")
        
        try:
            with Image.open(img_path) as img:
                target_w, target_h = get_target_size(filename)
                
                # Convert to RGB if needed
                if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                    # Keep RGBA for transparent images, otherwise RGB
                    pass
                else:
                    img = img.convert('RGB')
                
                # Resize using thumbnail (preserves aspect ratio, fits within target size)
                img.thumbnail((target_w, target_h), Image.Resampling.LANCZOS)
                
                # Save as WebP
                img.save(out_path, 'webp', quality=80)
                
                print(f"Optimized {filename} -> {name}.webp (Size: {img.size})")
        except Exception as e:
            print(f"Failed to process {img_path}: {e}")
