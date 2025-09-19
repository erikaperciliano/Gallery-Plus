import { useParams } from "react-router";
import Text from "../components/text";

export default function PagePhotoDetails() {
    const {id} = useParams();

    return(
        <>
            <Text>Página de detalhes da foto!</Text>
            <hr/>
            <Text>ID da foto: {id}</Text>
        </>
    )
}