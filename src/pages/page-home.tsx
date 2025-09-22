import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotoList from "../contexts/photos/components/photo-list";

export default function PageHome() {
    return(
        <Container>
            <AlbumsFilter 
                albums={[
                    {id: '3421', title: 'Album 1'},
                    {id: '123', title: 'Album 2'},
                    {id: '456', title: 'Album 2'},
                ]} 
                className="mb-9"
            />
            <PhotoList 
                photos={[
                    {
                        id: '123',
                        title: 'PageHome',
                        imageId: 'portrait-tower.png',
                        albums: [
                            {id: '3421', title: 'Album 1'},
                            {id: '123', title: 'Album 2'},
                            {id: '456', title: 'Album 2'},
                        ],
                    },
                    {
                        id: '321',
                        title: 'PageHome',
                        imageId: 'portrait-tower.png',
                        albums: [
                            {id: '3421', title: 'Album 1'},
                            {id: '123', title: 'Album 2'},
                            {id: '456', title: 'Album 2'},
                        ],
                    },
                ]} 
            />
        </Container>
    )
}