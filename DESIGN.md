# Design System

Levra's design is built to feel natural and human. No corporate jargon, no AI-generated fluff.

## Principles

### 1. Simple Language
We say "money flows" not "liquidity streaming protocol". We say "claim now" not "execute withdrawal transaction".

### 2. Clear Actions
Every button tells you exactly what it does. No guessing.

### 3. Visual Feedback
Colors, animations, and progress bars show what's happening. You always know the state of your streams.

### 4. No Jargon
We explain blockchain concepts in plain English. "Stream" is easier to understand than "UTXO renewal loop".

## Colors

### Primary Colors
- **Emerald** (#10b981) - Success, active states, money flowing
- **Blue** (#3b82f6) - Information, links, secondary actions
- **Gray** (#6b7280) - Text, borders, neutral elements

### Status Colors
- **Green** - Active, success, positive
- **Yellow** - Paused, warning, attention needed
- **Red** - Error, disputed, danger
- **Blue** - Completed, information

### Gradients
We use subtle gradients for visual interest:
- `from-emerald-500 to-blue-500` - Primary actions
- `from-emerald-50 via-white to-blue-50` - Backgrounds

## Typography

### Font Stack
- **Sans**: Geist Sans (primary)
- **Mono**: Geist Mono (code, addresses)
- **Fallback**: Arial, Helvetica, sans-serif

### Sizes
- **3xl** (30px) - Page titles
- **2xl** (24px) - Section headers
- **xl** (20px) - Card titles
- **lg** (18px) - Emphasized text
- **base** (16px) - Body text
- **sm** (14px) - Secondary text
- **xs** (12px) - Labels, captions

## Spacing

We use Tailwind's spacing scale:
- **2** (8px) - Tight spacing
- **4** (16px) - Default spacing
- **6** (24px) - Section spacing
- **8** (32px) - Large spacing
- **12** (48px) - Extra large spacing

## Components

### Buttons

**Primary Button**
```tsx
<button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all">
  Create Stream
</button>
```

**Secondary Button**
```tsx
<button className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
  Cancel
</button>
```

**Danger Button**
```tsx
<button className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors">
  Delete
</button>
```

### Cards

```tsx
<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
  {/* Content */}
</div>
```

### Inputs

```tsx
<input
  type="text"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
/>
```

### Progress Bars

```tsx
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
  <div 
    className="h-full bg-gradient-to-r from-emerald-500 to-blue-500"
    style={{ width: '45%' }}
  />
</div>
```

### Status Badges

```tsx
<div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
  Active
</div>
```

## Animations

### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Pulse (for active indicators)
```tsx
<span className="animate-pulse" />
```

### Spin (for loading)
```tsx
<div className="animate-spin" />
```

## Layout

### Max Width
Content is constrained to `max-w-6xl` (1152px) for readability.

### Responsive Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Grid
We use CSS Grid for layouts:
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

## Icons

We use emoji for icons because they're:
- Universal
- No extra dependencies
- Friendly and approachable

Examples:
- 💰 Payroll
- 🔄 Subscription
- 🎯 Escrow
- 📄 Invoice
- ✓ Success
- ✕ Error

## Accessibility

- All interactive elements have focus states
- Color is not the only indicator (we use icons too)
- Text has sufficient contrast (WCAG AA)
- Buttons have clear labels
- Forms have proper labels

## Dark Mode

Currently not implemented, but the design system is ready for it:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

## Voice & Tone

### Do Say
- "Money flows"
- "Claim now"
- "Stream is active"
- "Pause stream"

### Don't Say
- "Liquidity streaming protocol"
- "Execute withdrawal transaction"
- "UTXO state is active"
- "Suspend payment iteration"

Keep it simple. Keep it human.
