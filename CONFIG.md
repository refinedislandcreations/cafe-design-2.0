# rise-and-grind.md

## Project: Rise and Grind
**URL:** `https://rise-and-grind-cafe.refinedislandcreations.com`

### GEO & SEO Implementation

#### robots.txt
Deploy the standard portfolio `robots.txt` file to the site root.
*File content defined in the global AGENTS.md.*

#### Title & Meta Overrides
Replace the existing `<title>` and meta description with the following:

```html
<title>Rise & Grind Cafe | Specialty Coffee & Community in Bali</title>
<meta name="description" content="Rise & Grind Cafe serves exceptional specialty coffee, bold flavours, and a community-driven atmosphere in the heart of Bali. Explore our menu, order online, and start your day with us.">
```
#### Structured Data
Add the `CreativeWork` schema to the `<head>`. This explicitly connects the concept site to the Refined Island Creations portfolio.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Rise and Grind Cafe - Custom-Coded Website by Refined Island Creations",
  "description": "A concept website for a premium cafe brand. Designed and built by Refined Island Creations as a portfolio demonstration of bold, energetic custom-coded cafe and restaurant website design with digital menu and online ordering integration.",
  "url": "https://rise-and-grind-cafe.refinedislandcreations.com",
  "creator": {
    "@type": "Organization",
    "name": "Refined Island Creations",
    "url": "https://refinedislandcreations.com"
  },
  "isPartOf": {
    "@type": "CollectionPage",
    "name": "Portfolio - Refined Island Creations",
    "url": "https://refinedislandcreations.com/portfolio.html"
  },
  "about": {
    "@type": "CafeOrCoffeeShop",
    "name": "Rise and Grind Cafe",
    "address": { "@type": "PostalAddress", "addressLocality": "Bali", "addressCountry": "ID" }
  }
}
</script>