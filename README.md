# Levra 

## What is this?

This is the web app for Levra. It lets you create and manage payment streams without dealing with complex blockchain stuff. Just connect your wallet and start streaming.

## Features

- **Create Streams** - Set up payroll, subscriptions, escrow, or invoices
- **Manage Streams** - View, pause, resume, or claim your streams
- **Real-time Updates** - See your streams update as blocks are mined
- **Clean Design** - Simple, intuitive interface that just works

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
frontend/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── StreamCard.tsx
│   │   ├── StreamTypeSelector.tsx
│   │   └── CreateStreamForm.tsx
│   ├── stream/[id]/        # Stream detail page
│   ├── docs/               # Documentation page
│   ├── page.tsx            # Home page
│   └── layout.tsx          # Root layout
├── hooks/                  # React hooks
│   ├── useWallet.ts        # Wallet connection
│   └── useStreams.ts       # Stream management
├── lib/                    # Utilities
│   ├── types.ts            # TypeScript types
│   └── streamUtils.ts      # Helper functions
└── public/                 # Static assets
```

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library

## Design Philosophy

This frontend is built to feel natural and human. No AI-generated corporate speak. Just clear, simple language that explains what's happening.

### Key Principles

1. **Simple Language** - We say "money flows" not "liquidity streaming protocol"
2. **Clear Actions** - Buttons say what they do: "Claim Now", "Pause Stream"
3. **Visual Feedback** - Progress bars, colors, and animations show what's happening
4. **No Jargon** - We explain blockchain concepts in plain English

## Integration with Contracts

The frontend connects to the Levra contracts in `../contracts/`. Key integrations:

- **StreamController** - Create and manage streams
- **RateEngine** - Calculate claimable amounts
- **ConditionEngine** - Check stream conditions
- **LoopRenewal** - Handle stream iterations
- **SafetyModule** - Emergency overrides

## Wallet Support

Currently supports:
- CashConnect (planned)
- Paytaca (planned)
- Electron Cash (planned)

## Development

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_BCH_NETWORK=mainnet
NEXT_PUBLIC_API_URL=https://api.lumina.cash
```

## License

MIT
