from PIL import Image
from pathlib import Path

src = Path(r"C:\Users\lenovo\.cursor\projects\c-Users-lenovo-Desktop-tasami-3-latest\assets\c__Users_lenovo_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-08-02_at_11.40.17_PM-7c5f36bf-0482-4a7c-8451-d52b11516260.png")
out = Path(r"C:\Users\lenovo\Desktop\tasami 3 latest\public\platforms")
out.mkdir(parents=True, exist_ok=True)
im = Image.open(src).convert("RGB")
print("size", im.size)
im.save(out / "_collage_full.png")
# Save a few candidate crops based on typical collage layout (will refine)
w, h = im.size
# Approximate regions from visual description — middle row Absher left-of-center
crops = {
    "crop_absher_try": (int(w*0.18), int(h*0.32), int(w*0.38), int(h*0.62)),
    "crop_gosi_try": (int(w*0.72), int(h*0.68), int(w*0.98), int(h*0.98)),
}
for name, box in crops.items():
    c = im.crop(box)
    c.save(out / f"{name}.png")
    print(name, box, c.size)
