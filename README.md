# Jan ERP

A comprehensive enterprise resource planning solution designed to streamline your business operations.

## Features

- **Financial Management**: Complete financial control with advanced accounting features
- **Inventory Control**: Real-time inventory tracking and management
- **HR Management**: Comprehensive human resources management system
- **Analytics & Reporting**: Data-driven insights and customizable reports

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [Jest](https://jestjs.io/) & [Testing Library](https://testing-library.com/) - Testing
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Code quality

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/jan-erp.git
   cd jan-erp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ci` - Run tests with coverage

## Project Structure

```
src/
├── app/                   # Next.js app directory
│   └── [locale]/         # Localized routes
├── components/           # React components
│   ├── home/            # Home page components
│   ├── layout/          # Layout components
│   └── products/        # Product page components
├── config/              # Configuration files
├── messages/            # Translation files
└── types/              # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 