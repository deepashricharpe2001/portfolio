# ✅ Node.js PATH Setup Complete

## What We Did

Found Node.js installation at:
```
C:\Program Files\nodejs
```

## How to Run Your Portfolio

Since npm is not in the default PATH, use these commands:

### Option 1: Full Path (Recommended for now)
```powershell
cd "C:\Users\deepa\OneDrive\Desktop\portfolio"
& "C:\Program Files\nodejs\npm.cmd" install
& "C:\Program Files\nodejs\npm.cmd" run dev
```

### Option 2: Add to PATH Permanently (Windows)

1. **Open Environment Variables**:
   - Press `Windows Key + X`
   - Select "System"
   - Click "Advanced system settings"
   - Click "Environment Variables"

2. **Add Node.js to PATH**:
   - Under "System variables", click "Path"
   - Click "Edit"
   - Click "New"
   - Add: `C:\Program Files\nodejs`
   - Click "OK" on all dialogs
   - **RESTART PowerShell**

3. **Then you can use**:
```powershell
npm install
npm run dev
```

### Current Status
- ✅ Node.js found at: `C:\Program Files\nodejs`
- ✅ Node version: `v24.12.0`
- ⏳ Installing npm packages...

### Next Steps
Wait for npm install to complete, then run:
```powershell
& "C:\Program Files\nodejs\npm.cmd" run dev
```

Then open: **http://localhost:3000**
