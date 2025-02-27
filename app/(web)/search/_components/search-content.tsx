import NavBreadCrumb from "@/components/NavBreadCrumb"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import Filters from "./filters"



const SearchContent = () => {
  const listings = []
  const breadcrumbItems = [
    { label: "CarSpot", href: "/" },
    { label: `${listings?.length || 0} results cars found` }
  ]
  return (
    <div className="space-y-3">
      <NavBreadCrumb breadcrumbItems={breadcrumbItems} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:hidden">
          <Sheet>
            <SheetContent className="w-[300px] !p-0 sm:w-[400px] overflow-y-auto">
              <Filters />
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:block col-span-1">
          <Filters />
        </div>
        <div className="col-span-1 lg:col-span-3">
          {/*AllListing*/}
        </div>

      </div>
    </div>
  )
}

export default SearchContent