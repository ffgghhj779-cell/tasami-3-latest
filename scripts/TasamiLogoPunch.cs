using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

public static class TasamiLogoPunch
{
    public static void Run(string srcPath, string lockupPath, string markPath)
    {
        using (var src = new Bitmap(srcPath))
        {
            Rectangle content = OpaqueBounds(src);
            SaveCrop(src, Inflate(content, 12, src.Width, src.Height), lockupPath);

            int iconBottom = content.Y + (int)(content.Height * 0.42);
            Rectangle iconScan = Rectangle.FromLTRB(
                content.Left,
                content.Top,
                content.Right,
                Math.Min(src.Height, iconBottom)
            );
            Rectangle icon = OpaqueBounds(src, iconScan);
            int pad = 48;
            int side = Math.Max(icon.Width, icon.Height) + pad * 2;
            int cx = icon.Left + icon.Width / 2;
            int cy = icon.Top + icon.Height / 2;
            int sx = Math.Max(0, cx - side / 2);
            int sy = Math.Max(0, cy - side / 2);
            if (sx + side > src.Width) sx = Math.Max(0, src.Width - side);
            if (sy + side > src.Height) sy = Math.Max(0, src.Height - side);
            side = Math.Min(side, Math.Min(src.Width - sx, src.Height - sy));
            SaveCrop(src, new Rectangle(sx, sy, side, side), markPath);

            Console.WriteLine(
                "lockup " + content.Width + "x" + content.Height + " mark " + side + "x" + side
            );
        }
    }

    static Rectangle OpaqueBounds(Bitmap bmp)
    {
        return OpaqueBounds(bmp, new Rectangle(0, 0, bmp.Width, bmp.Height));
    }

    static Rectangle OpaqueBounds(Bitmap bmp, Rectangle scan)
    {
        int minX = scan.Right, minY = scan.Bottom, maxX = scan.Left, maxY = scan.Top;
        for (int y = scan.Top; y < scan.Bottom; y++)
        {
            for (int x = scan.Left; x < scan.Right; x++)
            {
                if (bmp.GetPixel(x, y).A > 12)
                {
                    if (x < minX) minX = x;
                    if (y < minY) minY = y;
                    if (x > maxX) maxX = x;
                    if (y > maxY) maxY = y;
                }
            }
        }
        if (maxX < minX) return scan;
        return Rectangle.FromLTRB(minX, minY, maxX + 1, maxY + 1);
    }

    static Rectangle Inflate(Rectangle r, int pad, int w, int h)
    {
        int x = Math.Max(0, r.X - pad);
        int y = Math.Max(0, r.Y - pad);
        int rgt = Math.Min(w, r.Right + pad);
        int btm = Math.Min(h, r.Bottom + pad);
        return Rectangle.FromLTRB(x, y, rgt, btm);
    }

    static void SaveCrop(Bitmap bmp, Rectangle crop, string path)
    {
        using (var outBmp = new Bitmap(crop.Width, crop.Height, PixelFormat.Format32bppArgb))
        using (var g = Graphics.FromImage(outBmp))
        {
            g.Clear(Color.Transparent);
            g.InterpolationMode = InterpolationMode.HighQualityBicubic;
            g.DrawImage(bmp, new Rectangle(0, 0, crop.Width, crop.Height), crop, GraphicsUnit.Pixel);
            outBmp.Save(path, ImageFormat.Png);
        }
    }
}
