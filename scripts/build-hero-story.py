"""Build Tasami hero story reel: office exterior → Saudi client enters → finishes easily."""
from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "visuals"
REEL = PUBLIC / "reel"
TMP = Path.home() / "AppData" / "Local" / "Temp" / "tasami-hero-story"
ASSETS = Path(
    r"C:\Users\lenovo\.cursor\projects\c-Users-lenovo-Desktop-tasami-3-latest\assets"
)

FRAMES = [
    ("reel-01-exterior.png", 3.8, "zoom"),
    ("reel-02-arrive.png", 3.4, "pan"),
    ("reel-03-enter.png", 3.4, "zoom"),
    ("reel-04-consult.png", 3.6, "pan"),
    ("reel-05-complete.png", 3.2, "zoom"),
    ("reel-06-done.png", 3.4, "pan"),
]
FADE = 0.55
FPS = 25


def run(cmd: list[str]) -> None:
    print("+", " ".join(cmd[:8]), "...")
    subprocess.run(cmd, check=True)


def kenburns(src: Path, dst: Path, sec: float, mode: str) -> None:
    frames = int(sec * FPS)
    if mode == "zoom":
        vf = (
            "scale=1920:1080:force_original_aspect_ratio=increase,"
            "crop=1920:1080,"
            f"zoompan=z='min(zoom+0.0014,1.12)':d={frames}:"
            "x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=25,"
            "format=yuv420p"
        )
    else:
        vf = (
            "scale=2304:1296:force_original_aspect_ratio=increase,"
            f"crop=1920:1080:'min(iw-ow\\,max(0\\,(iw-ow)*t/{sec}))':'(ih-oh)/2',"
            "format=yuv420p"
        )
    run(
        [
            "ffmpeg",
            "-y",
            "-loop",
            "1",
            "-i",
            str(src),
            "-t",
            str(sec),
            "-vf",
            vf,
            "-an",
            "-c:v",
            "libx264",
            "-preset",
            "veryfast",
            "-crf",
            "20",
            "-pix_fmt",
            "yuv420p",
            str(dst),
        ]
    )


def main() -> int:
    REEL.mkdir(parents=True, exist_ok=True)
    if TMP.exists():
        shutil.rmtree(TMP)
    TMP.mkdir(parents=True)

    sources: list[Path] = []
    for name, _sec, _mode in FRAMES:
        src = ASSETS / name
        if not src.exists():
            src = REEL / name
        if not src.exists():
            print(f"missing {name}", file=sys.stderr)
            return 1
        dest = REEL / name
        shutil.copy2(src, dest)
        sources.append(dest)

    shutil.copy2(sources[0], PUBLIC / "hero-plate.png")

    clips: list[Path] = []
    for i, (name, sec, mode) in enumerate(FRAMES):
        out = TMP / f"clip-{i:02d}.mp4"
        kenburns(sources[i], out, sec, mode)
        clips.append(out)

    filter_parts: list[str] = []
    prev = "[0:v]"
    offset = FRAMES[0][1] - FADE
    for i in range(1, len(clips)):
        label = "[vout]" if i == len(clips) - 1 else f"[v{i}]"
        filter_parts.append(
            f"{prev}[{i}:v]xfade=transition=fade:duration={FADE}:offset={offset:.3f}{label}"
        )
        prev = label
        offset += FRAMES[i][1] - FADE

    cmd = ["ffmpeg", "-y"]
    for clip in clips:
        cmd += ["-i", str(clip)]
    merged = TMP / "merged.mp4"
    cmd += [
        "-filter_complex",
        ";".join(filter_parts),
        "-map",
        "[vout]",
        "-an",
        "-c:v",
        "libx264",
        "-preset",
        "veryfast",
        "-crf",
        "20",
        "-pix_fmt",
        "yuv420p",
        "-movflags",
        "+faststart",
        str(merged),
    ]
    run(cmd)

    mp4 = PUBLIC / "hero.mp4"
    webm = PUBLIC / "hero.webm"
    shutil.copy2(merged, mp4)
    run(
        [
            "ffmpeg",
            "-y",
            "-i",
            str(mp4),
            "-c:v",
            "libvpx-vp9",
            "-b:v",
            "1.4M",
            "-deadline",
            "realtime",
            "-cpu-used",
            "8",
            "-row-mt",
            "1",
            "-an",
            str(webm),
        ]
    )
    print(f"mp4={mp4.stat().st_size} webm={webm.stat().st_size}")
    shutil.rmtree(TMP, ignore_errors=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
