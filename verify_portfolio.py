import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # The dev server log said it might use 3001 if 3000 is busy, but we killed 3000.
        # Let's check the log to be sure what port it used.
        port = 3000
        try:
            with open('dev_server.log', 'r') as f:
                log = f.read()
                if '3001' in log:
                    port = 3001
        except:
            pass

        page = await browser.new_page(viewport={'width': 1280, 'height': 800})
        url = f'http://localhost:{port}'
        print(f"Connecting to {url}...")

        try:
            await page.goto(url, wait_until="networkidle")
        except Exception as e:
            print(f"Failed to connect: {e}")
            await browser.close()
            return

        os.makedirs('verification', exist_ok=True)

        # Hero
        await page.screenshot(path='verification/hero.png')

        # Move mouse to test parallax
        await page.mouse.move(100, 100)
        await asyncio.sleep(0.5)
        await page.mouse.move(1100, 700)
        await asyncio.sleep(0.5)

        # About
        await page.locator('#journey').scroll_into_view_if_needed()
        await asyncio.sleep(1)
        await page.screenshot(path='verification/about.png')

        # Stack
        await page.locator('#stack').scroll_into_view_if_needed()
        await asyncio.sleep(1)
        # Hover a skill item
        await page.hover('text=React / Next.js')
        await asyncio.sleep(0.5)
        await page.screenshot(path='verification/stack.png')

        # Works
        await page.locator('#works').scroll_into_view_if_needed()
        await asyncio.sleep(1)
        # Hover a project card to test tilt
        await page.hover('text=NEBULA_DEX')
        await asyncio.sleep(0.5)
        await page.screenshot(path='verification/works.png')

        # Connect
        await page.locator('#connect').scroll_into_view_if_needed()
        await asyncio.sleep(1)
        await page.screenshot(path='verification/connect.png')

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
