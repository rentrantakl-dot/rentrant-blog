---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
description: ""
tags: []
author: "RentRant Team"

# key_facts: Required for every post (see docs/BLOG_CONTENT_PROMPT.md)
key_facts:
  jurisdiction: "New Zealand"
  last_verified: "{{ now.Format "2006-01-02" }}"
  content_type: "guide"  # guide | analysis | update | checklist
  primary_law: ""        # e.g. "Residential Tenancies Act 1986"
  facts: []              # 3-7 bullet facts grounding the article

# faqs: Optional — enables FAQ rich results in Google Search (see docs/blog-technical-seo.md)
# faqs:
#   - question: ""
#     answer: ""

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
