# Mahjong: A Visual Guide

A 1:1 recreation of [themahjong.guide](https://themahjong.guide/) - an interactive visual guide for learning mahjong.

## Features

- **Interactive Tile Display**: Browse mahjong tiles with hover/tap details
- **Tile Filtering**: Filter tiles by category, including the 108-tile Sichuan suited set
- **Theme Switching**: Three beautiful themes (Jade, Lacquer, Study)
- **Ruleset Toggle**: Switch between Hong Kong, Taiwan, and Sichuan rules
- **Responsive Design**: Sidebar navigation with smooth scrolling
- **Complete Sections**:
  - Section 01: What are the tiles?
  - Section 02: How do you win?
  - Section 03: How do you draw tiles?
  - Section 04: Valid moves on a turn

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **SVG Assets** - Mahjong tile designs, including flowers and seasons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
mahjong-guide/
├── app/
│   ├── globals.css       # Global styles with theme variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page entry
├── components/
│   └── MahjongGuide.jsx  # Complete interactive guide
└── public/
    └── tiles/            # SVG tile images
```

## Credits

- Original website: [themahjong.guide](https://themahjong.guide/) by emily
- Mahjong tile SVGs adapted from [Shizhao](https://commons.wikimedia.org/wiki/Category:SVG_Planar_illustrations_of_Mahjong_tiles) (Public domain, via Wikimedia Commons)
- This is an educational recreation created with permission from the original author

## License

This project is open source and available for educational purposes.
