# 🎨 Tô Màu Cùng Nana

Ứng dụng tô màu dành cho bé gái 6 tuổi, chạy trên mobile browser. Bé chạm vào vùng tranh để tô màu, nhấn "Nana xong rồi!" để nhận lời khen từ AI bằng tiếng Việt.

## Tính năng

- 3 nhân vật cute: 🐰 Thỏ · 🐱 Mèo · ⭐ Tiên
- 16 màu pastel (hồng, tím, xanh bạc hà, cam đào...)
- AI khen ngợi bằng tiếng Việt (Claude Vision API)
- Hiệu ứng confetti khi hoàn thành
- Mobile-first, không cần cài app

## Cấu trúc project

```
nana-colors/
├── src/
│   └── main.jsx          # Entry point
├── NanaColors.jsx         # Component chính
├── index.html
├── vite.config.js
├── package.json
├── .env.example
└── .gitignore
```

---

## Chạy local

### 1. Cài dependencies

```bash
npm install
```

### 2. Tạo file `.env.local`

Sao chép từ `.env.example`:

```bash
cp .env.example .env.local
```

Mở `.env.local` và điền API key thật:

```
VITE_ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxx...
```

> Lấy API key tại: https://console.anthropic.com/settings/keys

### 3. Chạy dev server

```bash
npm run dev
```

Mở trình duyệt tại `http://localhost:5173`

---

## Deploy lên Cloudflare Pages

### Bước 1 — Đẩy code lên GitHub

```bash
git init
git add .
git commit -m "init nana colors app"
git remote add origin https://github.com/<username>/nana-colors.git
git push -u origin main
```

> ⚠️ Không commit file `.env.local` — đã có trong `.gitignore`

### Bước 2 — Tạo project trên Cloudflare Pages

1. Vào [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages**
2. Chọn **Connect to Git** → chọn repo `nana-colors`
3. Cấu hình build:

| Trường | Giá trị |
|--------|---------|
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `dist` |

### Bước 3 — Thêm API Key vào Cloudflare

Trong trang cấu hình project (trước khi Save and Deploy), hoặc sau khi deploy vào **Settings > Environment variables**:

| Variable name | Value |
|--------------|-------|
| `VITE_ANTHROPIC_API_KEY` | `sk-ant-api03-...` |

Chọn **Production** (và optionally **Preview**) rồi **Save**.

### Bước 4 — Deploy

Nhấn **Save and Deploy**. Cloudflare sẽ tự build và publish. URL dạng:

```
https://nana-colors.pages.dev
```

### Redeploy sau khi sửa code

Push code mới lên GitHub — Cloudflare Pages tự động build lại.

```bash
git add .
git commit -m "update"
git push
```

---

## Lưu ý bảo mật

API key được nhúng vào JavaScript bundle khi build (`VITE_` prefix). Điều này có nghĩa key **có thể bị xem** trong browser DevTools. Để tránh:

- Tạo API key riêng chỉ dùng cho app này
- Giới hạn spending limit trên [Anthropic Console](https://console.anthropic.com/settings/limits) (ví dụ $5/tháng)
- Nếu cần bảo mật cao hơn: dùng Cloudflare Worker làm proxy để key không lộ ra browser
