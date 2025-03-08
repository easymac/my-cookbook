import { Header } from '@/components/global/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header showBackButton={true} />
      {children}
    </>
  )
}