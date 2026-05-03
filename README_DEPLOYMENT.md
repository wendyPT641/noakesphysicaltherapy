# Wendy Noakes Physical Therapy Website Deployment

This folder is ready to upload to GitHub Pages. It is a static website, so it does not need a build step.

## Files included

- `index.html`: Homepage
- `services.html`: Services page
- `about.html`: About and credentials page
- `contact.html`: Contact page
- `styles.css`: Website styling
- `script.js`: Theme toggle and email form behavior
- `CNAME`: Custom domain setting for GitHub Pages
- `sitemap.xml`: Sitemap for search engines
- `robots.txt`: Basic crawl permission

## Recommended GitHub Pages setup

1. Create a GitHub account if you do not already have one.
2. Create a new public repository named `noakesphysicaltherapy`.
3. Upload every file in this folder to the root of that repository.
4. Go to repository **Settings**.
5. Go to **Pages**.
6. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. Under **Custom domain**, enter:

   ```text
   noakesphysicaltherapy.com
   ```

8. Save the custom domain.
9. After DNS is correct and GitHub finishes provisioning HTTPS, check **Enforce HTTPS**.

## DNS records for noakesphysicaltherapy.com

In the DNS manager where your domain is registered, add these records for the root domain:

```text
Type: A
Name/Host: @
Value: 185.199.108.153

Type: A
Name/Host: @
Value: 185.199.109.153

Type: A
Name/Host: @
Value: 185.199.110.153

Type: A
Name/Host: @
Value: 185.199.111.153
```

For the www version, add:

```text
Type: CNAME
Name/Host: www
Value: YOUR-GITHUB-USERNAME.github.io
```

Replace `YOUR-GITHUB-USERNAME` with your GitHub username.

## Important Google Workspace email note

Do not delete your Google Workspace MX records. Those are what keep `wendy@noakesphysicaltherapy.com` working. Only add or edit the website-related A/CNAME records unless you are sure what each record does.

## After launch

Check these URLs:

- https://noakesphysicaltherapy.com
- https://www.noakesphysicaltherapy.com
- https://noakesphysicaltherapy.com/contact.html

Then submit the sitemap in Google Search Console:

```text
https://noakesphysicaltherapy.com/sitemap.xml
```
