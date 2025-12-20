# ⚠️ ISSUE: Node.js Not Installed

## The Problem
You're getting errors because **Node.js and npm are not installed** on your computer.

All the "Cannot find module" errors are because npm packages haven't been installed yet.

---

## The Solution

### Step 1: Install Node.js

1. Go to: **https://nodejs.org/**
2. Download the **LTS version** (Long Term Support)
3. Run the installer
4. **IMPORTANT: Restart your computer** after installation

### Step 2: Verify Installation

Open PowerShell and type:
```powershell
node --version
npm --version
```

Both should show version numbers (like `v18.19.0`)

### Step 3: Install Dependencies

```powershell
cd "C:\Users\deepa\OneDrive\Desktop\portfolio"
npm install
```

This will take 2-5 minutes. Wait until you see "added XXX packages"

### Step 4: Start Your Portfolio

```powershell
npm run dev
```

You should see:
```
> next dev
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

### Step 5: Open in Browser

Go to: **http://localhost:3000**

---

## Why This Happens

Your portfolio is built with:
- **Next.js** - Framework
- **React** - UI Library
- **TypeScript** - Programming Language
- **Tailwind CSS** - Styling

All these need to be downloaded and installed via npm.

---

## ✅ After Installation

Once you have Node.js installed and run `npm install`, all the errors will disappear!

The page.tsx file has **no bugs** - it just needs the dependencies installed.

---

## 🆘 Still Having Issues?

1. Check Node.js is installed: `node --version`
2. Check npm is installed: `npm --version`
3. Make sure you restarted your computer after installing Node.js
4. Try deleting `node_modules` folder and running `npm install` again

```powershell
# Clean install
rm -r node_modules
rm package-lock.json
npm install
```

---

**It's that simple! Install Node.js, run npm install, and everything will work! 🚀**
