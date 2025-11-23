# Quick Start Guide

Get Levra running in 5 minutes.

## Prerequisites

- Node.js 20+ installed
- A Bitcoin Cash wallet (for testing, you can use testnet)

## Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

## First Steps

### 1. Connect Your Wallet

Click "Connect Wallet" in the top right. For now, this is a mock connection. Real wallet integration coming soon.

### 2. Create Your First Stream

1. Click "Create Stream" tab
2. Choose a stream type (try Payroll first)
3. Fill in:
   - Recipient address
   - Total amount (e.g., 1000 BCH)
   - Payment rate (e.g., 0.01 BCH)
   - Time unit (Block, Minute, Hour, or Day)
4. Click "Create Stream"

### 3. View Your Streams

Click "My Streams" tab to see:
- Active streams you've created
- Streams you're receiving from
- Claim available funds
- Pause or resume streams

### 4. Explore

- Check out the **Stats** page for network statistics
- Read the **Docs** for detailed explanations
- View stream details by clicking "Details" on any stream

## What's Next?

### For Users
- Connect a real Bitcoin Cash wallet
- Create your first real stream on testnet
- Claim funds from incoming streams

### For Developers
- Read `INTEGRATION.md` for contract integration
- Check `DESIGN.md` for design system
- Explore the code in `app/` and `lib/`

## Project Structure

```
frontend/
├── app/
│   ├── components/     # UI components
│   ├── stream/[id]/   # Stream detail page
│   ├── docs/          # Documentation page
│   ├── stats/         # Statistics page
│   └── page.tsx       # Home page
├── hooks/             # React hooks
├── lib/               # Utilities and types
└── public/            # Static assets
```

## Common Issues

### Port Already in Use

If port 3000 is taken:
```bash
npm run dev -- -p 3001
```

### Module Not Found

Clear cache and reinstall:
```bash
rm -rf node_modules .next
npm install
```

### Styling Issues

Rebuild Tailwind:
```bash
npm run build
```

## Need Help?

- Check the [Docs](/docs) page
- Read the [README](README.md)
- Open an issue on GitHub

## Next Steps

Once you're comfortable with the UI:
1. Read `INTEGRATION.md` to understand contract integration
2. Check out the contracts in `../contracts/`
3. Test on Bitcoin Cash testnet
4. Deploy your own streams!

Happy streaming! 💰
