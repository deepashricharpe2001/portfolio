# 🚀 Quick Start Guide for Your Portfolio

## Step 1: Install Node.js
Your portfolio requires Node.js to run. If you don't have it installed:

### Windows Installation:
1. Go to https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the prompts
4. Restart your computer after installation

### Verify Installation:
Open PowerShell and type:
```powershell
node --version
npm --version
```

Both should show version numbers if installed correctly.

---

## Step 2: Install Dependencies
Navigate to your portfolio folder and install all required packages:

```powershell
cd "C:\Users\deepa\OneDrive\Desktop\portfolio"
npm install
```

This will take a few minutes to complete.

---

## Step 3: Run Development Server
Start the development server to preview your portfolio locally:

```powershell
npm run dev
```

You should see output like:
```
> next dev
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

---

## Step 4: View Your Portfolio
Open your web browser and go to:
```
http://localhost:3000
```

Your portfolio should now be live!

---

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check code quality |

---

## 📝 Customization Tips

### Update Contact Information
Edit your contact information in:
- `src/app/page.tsx` - Social links section
- `src/app/contact/page.tsx` - Contact form

### Add New Projects
1. Create project images in `public/images/projects/`
2. Update the projects section in `src/app/projects/`

### Modify Blog Posts
Add markdown files in `src/app/blog/` directory

### Change Colors & Styling
Edit `tailwind.config.ts` for color changes
Edit `src/app/globals.css` for global styles

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Click "Deploy"

### Deploy to Other Platforms
- **Netlify**: Drag and drop your `out/` folder
- **GitHub Pages**: Use GitHub Actions for auto-deployment
- **Your Own Server**: Use `npm run build` and deploy the `.next/` folder

---

## 🆘 Troubleshooting

### Port 3000 Already in Use
```powershell
npm run dev -- -p 3001
```
(This uses port 3001 instead)

### Dependencies Not Installing
```powershell
rm -r node_modules package-lock.json
npm install
```

### Styling Issues After Changes
Clear Next.js cache:
```powershell
rm -r .next
npm run dev
```

---

## 📞 Support Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Node.js Documentation**: https://nodejs.org/docs/

---

**Happy Portfolio Building! 🎉**
