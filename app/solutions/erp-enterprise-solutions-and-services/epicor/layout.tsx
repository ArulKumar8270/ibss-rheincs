import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Epicor ERP Solutions & Services | ERP Implementation, Support & Consulting',
  description:
    'Premium Epicor ERP partner delivering implementation, upgrades, cloud migration, and ongoing support for enterprises worldwide.',
}

export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
