---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
description: ""
tags: []
author: "RentRant Team"
brief: ""    # Optional: slug of companion brief (e.g. "healthy-homes-brief")
topic: ""    # suburb-guide | tenant-rights | healthy-homes | renting-tips | market-data
app_link: "" # Optional: deep link to relevant app page (see docs/app-routes.md). Leave blank to use app homepage.

# key_facts: Required for every post (see docs/BLOG_CONTENT_PROMPT.md)
key_facts:
  jurisdiction: "New Zealand"
  last_verified: "{{ now.Format "2006-01-02" }}"
  content_type: "guide"  # guide | analysis | update | checklist
  primary_law: ""        # e.g. "Residential Tenancies Act 1986"
  facts: []              # 3-7 bullet facts grounding the article

# faqs: Recommended — renders FAQPage JSON-LD in <head> for search engines and AI agents
faqs:
  - question: ""
    answer: ""

# Social & Sharing
# image: "images/cover.jpg"
# video: ""
# images: []
---

Write your post content here. Sweet as.

<!--
App links — see docs/app-routes.md for the full reference:
  How It Works:     https://rentrant.nz/how-it-works
  Location search:  https://rentrant.nz/locations/search
  Auckland city:    https://rentrant.nz/cities/auckland
  Suburb page:      https://rentrant.nz/suburbs/auckland/{slug}
  Suggest location: https://rentrant.nz/suggest-location

Social Embeds:
  TikTok:    {{< tiktok id="video_id" user="username" >}}
  Instagram: {{< instagram id="post_id" >}}
-->
