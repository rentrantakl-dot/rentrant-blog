# RentRant Blog Theme

A minimalistic Hugo theme designed to complement the RentRant rental insights platform.

## Features

- Clean, mobile-first design
- Kiwi-flavored brand voice
- Gradient brand styling (blue → purple → pink)
- Glassmorphism navbar
- Card-based layouts
- Configurable navigation and footer
- RSS feed support

## Installation

1. Add this theme to your Hugo site's `themes` directory
2. Set `theme = "rentrant-blog"` in your `config.toml`

## Configuration

### Basic Settings

```toml
baseURL = "https://blog.rentrant.nz/"
languageCode = "en-nz"
title = "RentRant Blog"
theme = "rentrant-blog"

[params]
  tagline = "The truth about that flat you're eyeing."
  description = "Insights for NZ renters"
  author = "RentRant Team"
  mainAppUrl = "https://rentrant.nz"

[[menus.main]]
  name = "Blog"
  url = "/"
  weight = 1

[[menus.main]]
  name = "About"
  url = "/about/"
  weight = 2

[[menus.footer]]
  name = "Privacy"
  url = "/privacy/"
  weight = 1
```

## Creating Content

```bash
hugo new posts/my-first-post.md
```

## License

MIT
