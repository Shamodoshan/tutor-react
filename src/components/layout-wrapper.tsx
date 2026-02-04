import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function PageLayout({ children }: { children: React.ReactNode }) {
  
  const childProps = (children as React.ReactElement<{ title: string }>).props
  
  return (
    <SidebarProvider>
      {/* 1. Left Sidebar Rail */}

      
      <SidebarInset>
        {/* 2. Sticky Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{ childProps.title }</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* 3. Main Content Area */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-neutral-100" />
            <div className="aspect-video rounded-xl bg-neutral-100" />
            <div className="aspect-video rounded-xl bg-neutral-100" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-neutral-100 md:min-h-min">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}