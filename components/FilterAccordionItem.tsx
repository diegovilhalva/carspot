import { ReactNode, useEffect, useState } from "react"
import { AccordionItem, AccordionTrigger } from "./ui/accordion"

interface PropsType {
    title: string
    value: string
    filterType: "checkbox" | "radio"
    disabled?: boolean
    options?: { label: string, value: string }[]
    selectedValues?: string[] | string | undefined
    onValuesChange?: (values: string[] | string | undefined) => void
    hasSearch?: boolean
    hasClearButton?: boolean
    children?: ReactNode
    renderCustom?: JSX.Element
    onClear?: () => void
}

const FilterAccordionItem = ({title,value,filterType,options = [],selectedValues,onValuesChange,hasSearch = false,hasClearButton = false,disabled = false,children,renderCustom,onClear}:PropsType) => {
    const [searchItem,setSearchTem] = useState("")
    const [filteredOptions, setFilteredOptions] = useState(options)
    const [isCustomSelected, setIsCustomSelected] = useState(false)

    useEffect(() => {
        if (hasSearch && options) {
            const filtered = options.filter((option) => option?.label?.toLowerCase()?.includes(searchItem.toLowerCase()))
            setFilteredOptions(filtered)
        }else{
            setFilteredOptions(options)
        }


    },[searchItem,hasSearch])

    const handleRadioChange = (value:string) => {
        if (value === "custom") {
            setIsCustomSelected(true);
          } else {
            setIsCustomSelected(false);
            onValuesChange?.(value);
          }
    }

    const handleClear = () => {
        onClear?.()
    }
    return (
        <AccordionItem className="w-full mb-3 rounded-[4px] min-h-14 bg-white px-4 border-0">
            <AccordionTrigger>

            </AccordionTrigger> 
        </AccordionItem>
    )
}

export default FilterAccordionItem