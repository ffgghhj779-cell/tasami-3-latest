"""Fetch / prepare platform logos for Tasami showcase."""
from __future__ import annotations

import io
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "platforms"
OUT.mkdir(parents=True, exist_ok=True)

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

CANDIDATES = {
    "absher": [
        "https://www.google.com/s2/favicons?domain=absher.sa&sz=128",
        "https://logo.clearbit.com/absher.sa",
    ],
    "qiwa": [
        "https://logo.clearbit.com/qiwa.sa",
        "https://www.google.com/s2/favicons?domain=qiwa.sa&sz=128",
    ],
    "muqeem": [
        "https://logo.clearbit.com/muqeem.sa",
        "https://www.google.com/s2/favicons?domain=muqeem.sa&sz=128",
    ],
    "businessCenter": [
        "https://logo.clearbit.com/business.sa",
        "https://logo.clearbit.com/saudibusiness.gov.sa",
        "https://www.google.com/s2/favicons?domain=business.sa&sz=128",
    ],
    "balady": [
        "https://logo.clearbit.com/balady.gov.sa",
        "https://www.google.com/s2/favicons?domain=balady.gov.sa&sz=128",
    ],
    "sehhaty": [
        "https://logo.clearbit.com/seha.sa",
        "https://logo.clearbit.com/moh.gov.sa",
        "https://www.google.com/s2/favicons?domain=moh.gov.sa&sz=128",
    ],
    "gosi": [
        "https://logo.clearbit.com/gosi.gov.sa",
        "https://www.google.com/s2/favicons?domain=gosi.gov.sa&sz=128",
    ],
}


def fetch(url: str) -> bytes | None:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=20) as res:
            data = res.read()
            if len(data) < 200:
                return None
            return data
    except Exception as e:
        print(f"  fail {url}: {e}")
        return None


def save_png(key: str, data: bytes) -> bool:
    try:
        im = Image.open(io.BytesIO(data)).convert("RGBA")
        # upscale small favicons with nearest then slight smooth
        if max(im.size) < 96:
            im = im.resize((256, 256), Image.Resampling.NEAREST)
        elif max(im.size) < 256:
            im = im.resize((320, 320), Image.Resampling.LANCZOS)
        # pad to square white canvas
        side = max(im.size) + 48
        canvas = Image.new("RGBA", (side, side), (255, 255, 255, 255))
        x = (side - im.size[0]) // 2
        y = (side - im.size[1]) // 2
        canvas.paste(im, (x, y), im if im.mode == "RGBA" else None)
        path = OUT / f"{key}.png"
        canvas.convert("RGB").save(path, "PNG", optimize=True)
        print(f"OK {key} -> {path.name} {canvas.size}")
        return True
    except Exception as e:
        print(f"  decode fail {key}: {e}")
        return False


def main() -> None:
    for key, urls in CANDIDATES.items():
        print(f"== {key}")
        done = False
        for url in urls:
            data = fetch(url)
            if data and save_png(key, data):
                done = True
                break
        if not done:
            print(f"MISS {key}")


if __name__ == "__main__":
    main()
