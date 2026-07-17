---
layout: base.njk
title: "Libraria Salafi Kosove"
eleventyNoTitle: true
---

<!-- Pure Centered Header Section -->
<div style="text-align: center; margin: 3rem 0 5rem 0;">
  <h1 style="font-size: 2.5rem; font-weight: 700; color: #ffffff; letter-spacing: -0.03em; margin-bottom: 0.75rem; text-align: center;">
    LIBRARIA SALAFI KOSOVE
  </h1>
  <p style="text-align: center; font-size: 1rem; color: var(--text-muted); letter-spacing: 0.05em; text-transform: uppercase; margin: 0;">
    <br>Koleksion librash autentikë sipas kuptimit të Selefëve<br> Instagram: @salafi_kosove
    <br><br><br><br>Lexo më poshtë 
  </p>

  <!-- Continuous Soft-Flashing Indicator -->
  <div class="scroll-indicator" style="font-size: 2.5rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; display: inline-flex; align-items: center; gap: 0.3rem;">
  <span class="pulsing-arrow">↓</span>
  </div>
</div>

<!-- Strict Centered Stack with Generous Vertical Breathing Room -->
<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; max-width: 80ch; margin: 0 auto; gap: 3rem;">
  {%- for book in collections.books -%}
    <a href="{{ book.url }}" class="shelf-book" style="display: inline-flex; align-items: center; justify-content: center; flex-wrap: wrap; text-align: center; gap: 0.8rem; width: auto; max-width: 100%; margin: 0; padding: 0;">
      {{- book.data.title -}}
      {%- if book.date | isRecent -%}
        <span class="recently-added" style="margin: 0; white-space: nowrap;">(Shtuar së fundmi)</span>
      {%- endif -%}
    </a>
  {%- endfor -%}
</div>
