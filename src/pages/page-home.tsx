import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photo-widget";
import type { Photo } from "../contexts/photos/models/photo";

export default function PageHome() {
    return(
        <Container>
            <div className="grid grid-cols-4 gap-9">
                <PhotoWidget 
                    photo={{
                        id: '123',
                        title: 'PhotoWidget',
                        imageId: 'portrait-tower.png',
                        albums: [
                            {id: '321', title: 'Album 1'},
                            {id: '123', title: 'Album 2'},
                            {id: '456', title: 'Album 3'},
                        ]
                    }}
                />
                <PhotoWidget 
                    photo={{
                        id: '123',
                        title: 'PhotoWidget',
                        imageId: 'portrait-tower.png',
                        albums: [
                            {id: '321', title: 'Album 1'},
                            {id: '123', title: 'Album 2'},
                            {id: '456', title: 'Album 3'},
                        ]
                    }}
                />
                <PhotoWidget 
                    photo={{
                        id: '123',
                        title: 'PhotoWidget',
                        imageId: 'portrait-tower.png',
                        albums: [
                            {id: '321', title: 'Album 1'},
                            {id: '123', title: 'Album 2'},
                            {id: '456', title: 'Album 3'},
                        ]
                    }}
                />
                <PhotoWidget 
                    photo={{} as Photo}
                    loading
                />
            </div>
        </Container>
    )
}