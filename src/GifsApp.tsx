import { mockGifs } from "./mock-data/gifs/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { PrevSearch } from "./shared/components/PrevSearch"
import { GifsList } from "./shared/components/GifsList"



export const GifsApp = () =>{

    const handleTermClick = (term: string) => {
        console.log({term}),
    }




    const [previusTerms, setpreviusTerms] = useState(['DRBZ'])
    return (
        <>
        {/* Header */}
        <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto"/>


        {/* Search */}
        <SearchBar/>

        {/* Busquedas previas */}
        <PrevSearch searches={previusTerms} 
        onLabelClick={handleTermClick}/>

   

        {/* Gifs */}
        <GifsList gifs={mockGifs}/>
        </>
    )
}