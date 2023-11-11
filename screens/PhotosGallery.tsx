import { ScrollView, Alert, View, Text, TextInput, Pressable } from "react-native"
import { common, colors } from "../styles"
import { useEffect, useState } from "react"
import PhotosService from "../services/PhotosService";
import { Photo } from "../components";

interface Props {
    navigation: any;
}

export const PhotosGalleryScreen: React.FC<Props> = ({ navigation }) => {
    const [photoUrl, setPhotoUrl] = useState('');
    const [photos, setPhotos] = useState<any[]>([]);

    useEffect(() => {
        PhotosService.getPhotos(setPhotos);
    }, []);

    const handleSubmit = async () => {
        if (photoUrl === '') return Alert.alert('Atenção', 'Informe o URL da imagem', [{ text: 'OK' }]);
        PhotosService.savePhoto(photoUrl);
        setPhotoUrl('');
    }

    return (
        <ScrollView style={common.container}>
            <View style={common.form}>
                <Text style={common.formTitle}>
                    Adicionar Imagem
                </Text>
                <View style={common.formGroup}>
                    <Text style={common.formLabel}>
                        Endereço da imagem:
                    </Text>
                    <TextInput
                        style={common.input}
                        value={photoUrl}
                        onChangeText={(newText) => setPhotoUrl(newText)}
                    />
                </View>
                <Pressable style={common.formBtn} onPress={handleSubmit}>
                    <Text style={common.formBtnText}>
                        Adicionar
                    </Text>
                </Pressable>
            </View>
            <View style={{ width: 330, margin: 30, flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    photos ?
                        photos.map((photo) => (<Photo url={photo.photoUrl} key={photo.id} id={photo.id} navigation={navigation} />))
                        :
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            paddingVertical: 20,
                            color: colors.white
                        }}>
                            Nenhuma foto salva
                        </Text>
                }
            </View>
        </ScrollView>
    )
}