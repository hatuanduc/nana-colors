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
├── functions/
│   └── api/
│       └── praise.js      # Cloudflare Pages Function (proxy → Anthropic)
├── src/
│   └── main.jsx           # Entry point
├── NanaColors.jsx          # Component chính
├── index.html
├── vite.config.js
├── package.json
├── .dev.vars.example
└── .gitignore
```

> **Kiến trúc:** Browser → `/api/praise` (Cloudflare Worker) → Anthropic API.
> API key nằm hoàn toàn phía server, không bao giờ lộ ra browser.

---

## Chạy local

### 1. Cài dependencies

```bash
npm install
npm install -g wrangler   # nếu chưa có
```

### 2. Tạo file `.dev.vars`

```bash
cp .dev.vars.example .dev.vars
```

Điền API key thật vào `.dev.vars`:

```
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxx...
```

> Lấy API key tại: https://console.anthropic.com/settings/keys

### 3. Chạy dev server (có Worker)

```bash
npm run dev:full
```

Mở trình duyệt tại `http://localhost:8788`

> `npm run dev` (không có `:full`) chạy Vite thuần — nút "Nana xong rồi!" sẽ báo lỗi vì không có Worker xử lý `/api/praise`.

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

Sau khi deploy vào **Settings > Environment variables**:

| Variable name | Value |
|--------------|-------|
| `ANTHROPIC_API_KEY` | `sk-ant-api03-...` |

Chọn **Production** (và optionally **Preview**) rồi **Save**.
Sau đó vào **Deployments** → **Retry deployment** để apply key mới.

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

API key nằm trong Cloudflare Worker (`functions/api/praise.js`), **không bao giờ gửi xuống browser**. Vẫn nên:

- Giới hạn spending limit trên [Anthropic Console](https://console.anthropic.com/settings/limits) (ví dụ $5/tháng)
- Không commit file `.dev.vars` (đã có trong `.gitignore`)
