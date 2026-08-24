/* ============================================================================
 * CLIENT CONFIG — the only file you edit when moving this template to another
 * wedding organizer. Nothing else in the codebase hardcodes a client detail.
 * See README.md ("Duplicating for the next client") for the numbered steps.
 * ==========================================================================*/

export type ClientConfig = {
  /** Business name, exactly as it should appear as the wordmark. */
  name: string
  /** Short name used in tight spots (mobile nav, OG image). Falls back to name. */
  shortName: string
  /** URL/repo/Vercel-project slug. Lowercase, hyphenated. */
  slug: string
  /** Production origin. No trailing slash. */
  origin: string
  /** City the business operates from. Shown on the hero and in structured data. */
  city: string
  /** Province / administrative area. */
  region: string
  /** WhatsApp number in international format, digits only, no + and no spaces. */
  whatsapp: string
  /** Accent colour, expressed as OKLCH chroma + hue. Lightness steps are
   *  derived in globals.css so every swap stays WCAG AA. Run `npm run audit:contrast`
   *  after changing these two numbers. */
  accent: { chroma: number; hue: number }

  /** ------------------------------------------------------------------------
   *  NOT CONFIRMED YET — deliberately empty. Nothing is invented here.
   *  Leave as-is until the client confirms; the UI and the structured data
   *  both degrade gracefully when these are empty strings / empty arrays.
   *  ----------------------------------------------------------------------*/
  unconfirmed: {
    /** Street line, e.g. "Jl. Example No. 1". Empty = omitted from schema + contact page. */
    streetAddress: string
    /** Postal code. Empty = omitted. */
    postalCode: string
    /** Opening hours in schema.org format, e.g. ["Mo-Fr 09:00-17:00"].
     *  Empty array = the contact page shows "by appointment" wording instead. */
    openingHours: string[]
    /** Public email address. Empty = email row hidden. */
    email: string
  }
}

export const client: ClientConfig = {
  name: 'Pratiwi Bali Wedding Organizer',
  shortName: 'Pratiwi Bali',
  slug: 'pratiwi-bali-wedding-organizer',
  origin: 'https://pratiwi-bali-wedding-organizer.onyxcreative.asia',
  city: 'Denpasar',
  region: 'Bali',
  // From the business' public Google Maps listing. Confirm with the client before launch.
  whatsapp: '6281357544938',
  // Deep forest green. Not the sage that the category defaults to: sage is
  // light and washed out, this is dark enough to carry text on the paper.
  accent: { chroma: 0.082, hue: 152 },

  unconfirmed: {
    streetAddress: '',
    postalCode: '',
    openingHours: [],
    email: '',
  },
}

/** Locales the site is published in. Order matters: first entry is the default. */
export const locales = ['id', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'id'
