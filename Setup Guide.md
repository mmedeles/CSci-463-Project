# 🚀 CSci-463-Project Setup Guide (For Teammates)

## 🎯 Project Overview
This project is a full-stack web application built with:

- **Frontend:** Angular (TypeScript)
- **Backend:** Symfony (PHP 8+)
- **Session-based communication** between frontend and backend (fully functional)

---

## 🧰 Prerequisites

### ✅ Required Software

| Tool            | Version Recommended | Notes |
|-----------------|---------------------|-------|
| PHP             | 8.1+                | Use XAMPP, Homebrew, or native PHP |
| Composer        | Latest              | PHP package manager |
| Symfony CLI     | Latest              | https://symfony.com/download |
| Node.js         | 18.x or 20.x        | https://nodejs.org |
| Angular CLI     | ^15.x               | `npm install -g @angular/cli` |
| Git (optional)  | Latest              | For pulling updates |

---

## 📁 Project Structure

```
CSci-463-Project/
├── client/               # Angular frontend
├── server/               # Symfony backend
└── README.md             # This file
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-team/CSci-463-Project.git
cd CSci-463-Project
```

---

### 2. Frontend Setup (Angular)

```bash
cd client
npm install          # Install Angular dependencies
ng serve             # Starts Angular on http://localhost:4200
```

---

### 3. Backend Setup (Symfony)

```bash
cd ../server
composer install                 # Install Symfony packages
```

- Backend runs at: http://localhost:8000
- Set up the Built-in-server in Symfony

---

## Session & CORS Integration

- Angular sends requests using `withCredentials: true`
- Symfony is configured with CORS (`nelmio_cors.yaml`) to accept credentials from `http://localhost:4200`
- Symfony session is configured in `framework.yaml` with native file storage

---

##  4. Run the Full App

1. Ensure both frontend (`ng serve`) and backend (`symfony serve`) are running
2. Go to http://localhost:4200
3. Click **"Increment Counter"**
4. You should see the counter value increase and persist

---

## Test Checklist

| Feature                                      | Works? |
|---------------------------------------------|--------|
| Backend status check shows ✅               | ✅     |
| Incrementing counter persists across requests | ✅     |
| Console logs consistent session ID          | ✅     |
| Network requests return `200 OK`            | ✅     |

---

## Troubleshooting

| Problem                                  | Solution |
|------------------------------------------|----------|
| Counter stays at 1                       | Session or cookie not persisting – check `framework.yaml`, `nelmio_cors.yaml`, and browser cookies |
| White screen in Angular                  | Check for `*ngIf` errors – add `CommonModule` to component or `AppModule` |
| `ng serve` fails                         | Try deleting `node_modules` and reinstalling: `rm -rf node_modules && npm install` |
| Symfony error or route not found         | Run `composer install`, check routes with `php bin/console debug:router` |

---

## Notes

- Use Chrome DevTools → Application → Cookies to verify session is maintained
- Both frontend (port 4200) and backend (port 8000) must be running
- If you change ports, update the `apiUrl` in `client/src/app/services/api.service.ts`

---