import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interactive Folder Tabs',
  description: 'Interactive folder tabs with drag and drop functionality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
EOF

# Create page.tsx
cat > src/app/page.tsx << 'EOF'
import { InteractiveFolderLayout } from '@/components/tabs/InteractiveFolderLayout'

export default function Home() {
  return (
    <main className="h-screen w-full">
      <InteractiveFolderLayout />
    </main>
  )
}