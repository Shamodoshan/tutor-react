import PageLayout from "@/components/layout-wrapper"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  )
}