---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
description: ""      # 150–160 chars; target the quick-answer search query
tags: []
author: "RentRant Team"
long_form: ""        # Optional: slug of the companion long-form guide (e.g. "healthy-homes-compliance-guide")
topic: ""            # suburb-guide | tenant-rights | healthy-homes | renting-tips | market-data
app_link: ""         # Optional: deep link to relevant app page (see docs/app-routes.md). Leave blank to use app homepage.

# key_facts: Required for every brief (see docs/BLOG_CONTENT_PROMPT.md)
key_facts:
  jurisdiction: "New Zealand"
  last_verified: "{{ now.Format "2006-01-02" }}"
  content_type: "brief"
  primary_law: ""        # e.g. "Residential Tenancies Act 1986"
  facts: []              # 2–4 key facts — pick the most load-bearing ones

# faqs: Highly recommended for briefs — Google often shows FAQ snippets for short focused articles
# faqs:
#   - question: ""
#     answer: ""

# Social & Sharing
# image: "images/cover.jpg"
# images: []
---

<!-- TARGET: 500 words hard limit. Cut everything that isn't the core answer. One takeaway per section. -->

Write your brief here. Sweet as.

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
