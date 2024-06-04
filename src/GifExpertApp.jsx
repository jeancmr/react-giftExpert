import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        const lowerCaseCategories = categories.map(category => category.toLowerCase())
        const lowerCaseNewCategory = newCategory.toLowerCase()
        if (lowerCaseCategories.includes(lowerCaseNewCategory)) return

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={(event) => onAddCategory(event)}
            />

            {categories.map((category) =>
                <GifGrid
                    key={category}
                    category={category}
                />
            )
            }

        </>
    )
}
