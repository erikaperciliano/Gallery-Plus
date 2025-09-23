import { toast } from "sonner";
import { api } from "../../../helpers/api";
import { useQueryClient } from "@tanstack/react-query";

export default function usePhotoAlmbus() {
    const queryClient = useQueryClient();

    async function managePhotoOnAlbum(photoId: string, albumsId: string[]) {
        try{
            await api.put(`/photos/${photoId}/albums`, {
                albumsId
            });
            
            queryClient.invalidateQueries({queryKey: ['photo', photoId]});
            queryClient.invalidateQueries({queryKey: ['photos']});

            toast.success('Álbuns aturalizados');

        }catch(error) {
            toast.error('Erro ao gerenciar álbuns da foto')
            throw error;
        }
    }

    return {
        managePhotoOnAlbum,
    }
}