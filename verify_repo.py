import re
from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Load local index.html
        file_path = os.path.abspath("index.html")
        page.goto(f"file://{file_path}")

        print("Page loaded.")

        # Verify Header Text
        header = page.locator("h1")
        if "Hi, I'm yogiloop3-bit" in header.inner_text():
            print("SUCCESS: Header contains correct username.")
        else:
            print(f"FAILURE: Header text is '{header.inner_text()}'")

        # Verify Repositories load (Wait for API response and DOM update)
        try:
            page.wait_for_selector(".repo-card", timeout=10000)
            print("Repo cards loaded.")
        except:
            print("FAILURE: Repo cards did not load.")
            browser.close()
            return

        # Check for specific repos
        content = page.content()

        if "Percobaan" in content:
            print("SUCCESS: 'Percobaan' repo found.")
        else:
            print("FAILURE: 'Percobaan' repo NOT found.")

        if "Pak-toyib" in content:
            print("SUCCESS: 'Pak-toyib' repo found.")
        else:
            print("FAILURE: 'Pak-toyib' repo NOT found.")

        browser.close()

if __name__ == "__main__":
    run()
